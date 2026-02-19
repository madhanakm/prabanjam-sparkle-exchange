const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));

// Debug middleware for deployment issues
app.use((req, res, next) => {
  console.log(`🌐 [API DEBUG] ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  console.log(`🔑 [API DEBUG] API Key: ${req.headers['x-api-key'] ? 'Present' : 'Missing'}`);
  console.log(`🔐 [API DEBUG] Auth: ${req.headers.authorization ? 'Present' : 'Missing'}`);
  next();
});

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname))
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Database connection with reconnection logic
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
});

function handleDisconnect() {
  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_QUIT' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' || err.code === 'PROTOCOL_ENQUEUE_HANDSHAKE_TWICE') {
      console.log('Reconnecting to database...');
      handleDisconnect();
    } else {
      throw err;
    }
  });

  // Keep connection alive
  setInterval(() => {
    db.query('SELECT 1', (err) => {
      if (err) {
        console.error('Keep alive query failed:', err);
        handleDisconnect();
      }
    });
  }, 60000); // Every minute
}

handleDisconnect();

// Centralized URL fixing utility
const fixImageUrl = (url) => {
  if (!url) return url;
  const baseUrl = process.env.BASE_URL || 'https://backend.prabanjamjewellery.com';
  // Fix any localhost URLs to use production URL
  return url.replace(/http:\/\/localhost:\d+/g, baseUrl).replace(/undefined/g, baseUrl);
};

// Apply URL fixing to results
const fixImageUrls = (results) => {
  return results.map(item => ({
    ...item,
    image_url: item.image_url ? fixImageUrl(item.image_url) : item.image_url
  }));
};

// API Key middleware
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  console.log(`🔑 [API KEY DEBUG] Expected: ${process.env.API_KEY}`);
  console.log(`🔑 [API KEY DEBUG] Received: ${apiKey}`);
  
  if (!apiKey || apiKey !== process.env.API_KEY) {
    console.error(`❌ [API KEY DEBUG] Authentication failed`);
    return res.status(401).json({ message: 'Invalid API key' });
  }
  
  console.log(`✅ [API KEY DEBUG] Authentication successful`);
  next();
};

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  console.log(`🔐 [TOKEN DEBUG] Auth header: ${authHeader}`);
  console.log(`🔐 [TOKEN DEBUG] Token: ${token ? 'Present' : 'Missing'}`);

  if (!token) {
    console.error(`❌ [TOKEN DEBUG] No token provided`);
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error(`❌ [TOKEN DEBUG] Token verification failed:`, err.message);
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.log(`✅ [TOKEN DEBUG] Token verified for user:`, user);
    req.user = user;
    next();
  });
};

// Routes

// Shareholder login (for website)
app.post('/api/shareholder/login', (req, res) => {
  const { username, password } = req.body;
  
  const query = 'SELECT * FROM shareholders WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const shareholder = results[0];
    const isValidPassword = await bcrypt.compare(password, shareholder.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: shareholder.id, username: shareholder.username, type: 'shareholder' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token, 
      shareholder: { 
        id: shareholder.id, 
        name: shareholder.name, 
        username: shareholder.username,
        shares: shareholder.shares,
        investment_date: shareholder.investment_date
      } 
    });
  });
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  console.log('🔐 [ADMIN LOGIN DEBUG] Login attempt for:', username);
  
  const query = 'SELECT * FROM admins WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error('❌ [ADMIN LOGIN DEBUG] Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    
    if (results.length === 0) {
      console.error('❌ [ADMIN LOGIN DEBUG] Admin not found:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const admin = results[0];
    const isValidPassword = await bcrypt.compare(password, admin.password);
    
    if (!isValidPassword) {
      console.error('❌ [ADMIN LOGIN DEBUG] Invalid password for:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    console.log('✅ [ADMIN LOGIN DEBUG] Login successful for:', username);
    console.log('✅ [ADMIN LOGIN DEBUG] Token generated:', token.substring(0, 20) + '...');
    
    res.json({ token, admin: { id: admin.id, username: admin.username } });
  });
});

// Get testimonials
app.get('/api/testimonials', (req, res) => {
  const query = 'SELECT * FROM testimonials ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Add testimonial (admin only)
app.post('/api/testimonials', authenticateToken, (req, res) => {
  const { name, message, rating } = req.body;
  
  const query = 'INSERT INTO testimonials (name, message, rating) VALUES (?, ?, ?)';
  db.query(query, [name, message, rating], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json({ message: 'Testimonial added successfully', id: result.insertId });
  });
});

// Update testimonial (admin only)
app.put('/api/testimonials/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { name, message, rating } = req.body;
  
  const query = 'UPDATE testimonials SET name = ?, message = ?, rating = ? WHERE id = ?';
  db.query(query, [name, message, rating, id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json({ message: 'Testimonial updated successfully' });
  });
});

// Update shareholder (admin only)
app.put('/api/shareholders/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, shares, investment_date, username, password } = req.body;
  
  try {
    let query, params;
    
    if (password && password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(password, 10);
      query = 'UPDATE shareholders SET name = ?, shares = ?, investment_date = ?, username = ?, password = ? WHERE id = ?';
      params = [name, shares, investment_date, username, hashedPassword, id];
    } else {
      query = 'UPDATE shareholders SET name = ?, shares = ?, investment_date = ?, username = ? WHERE id = ?';
      params = [name, shares, investment_date, username, id];
    }
    
    db.query(query, params, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Username already exists' });
        }
        return res.status(500).json({ message: 'Database error', error: err.message });
      }
      res.json({ message: 'Shareholder updated successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete shareholder (admin only)
app.delete('/api/shareholders/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM shareholders WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json({ message: 'Shareholder deleted successfully' });
  });
});

// Delete testimonial (admin only)
app.delete('/api/testimonials/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM testimonials WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  });
});

// Get shareholders (admin only)
app.get('/api/shareholders', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM shareholders ORDER BY shares DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Add shareholder (admin only)
app.post('/api/shareholders', authenticateToken, async (req, res) => {
  const { name, shares, investment_date, username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO shareholders (name, shares, investment_date, username, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, shares, investment_date, username, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Username already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
      }
      res.json({ message: 'Shareholder added successfully', id: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Contact form submission
app.post('/api/contact', authenticateApiKey, (req, res) => {
  const { name, phone, area } = req.body;
  
  const query = 'INSERT INTO contact_submissions (name, phone, area) VALUES (?, ?, ?)';
  db.query(query, [name, phone, area], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Contact form submitted successfully' });
  });
});

// Investment form submission
app.post('/api/invest', authenticateApiKey, (req, res) => {
  console.log('Investment API called with body:', req.body);
  const { name, email, phone, amount, investmentType } = req.body;
  
  console.log('Extracted fields:', { name, email, phone, amount, investmentType });
  
  const query = 'INSERT INTO investment_inquiries (name, email, phone, amount, investment_type) VALUES (?, ?, ?, ?, ?)';
  console.log('Executing query with values:', [name, email, phone, amount, investmentType]);
  
  db.query(query, [name, email, phone, amount, investmentType], (err, result) => {
    if (err) {
      console.error('Database error in investment API:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    console.log('Investment inquiry saved successfully, ID:', result.insertId);
    res.json({ message: 'Investment inquiry submitted successfully' });
  });
});

// Get contact submissions (admin only)
app.get('/api/admin/contacts', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Get investment inquiries (admin only)
app.get('/api/admin/investments', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM investment_inquiries ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Change admin password
app.put('/api/admin/change-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const adminId = req.user.id;
  
  try {
    // Get current admin
    const query = 'SELECT * FROM admins WHERE id = ?';
    db.query(query, [adminId], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      
      const admin = results[0];
      const isValidPassword = await bcrypt.compare(currentPassword, admin.password);
      
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
      
      // Hash new password
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      
      // Update password
      const updateQuery = 'UPDATE admins SET password = ? WHERE id = ?';
      db.query(updateQuery, [hashedNewPassword, adminId], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'Password changed successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Gallery endpoints
// Get all gallery images
app.get('/api/gallery', (req, res) => {
  const query = 'SELECT * FROM gallery ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(fixImageUrls(results));
  });
});

// Upload image endpoint
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  const baseUrl = process.env.BASE_URL || 'https://backend.prabanjamjewellery.com';
  const imageUrl = `${baseUrl}/uploads/${req.file.filename}`;
  res.json({ image_url: imageUrl });
});

// Slider image upload
app.post('/api/admin/sliders/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }

  const baseUrl = process.env.BASE_URL || 'https://backend.prabanjamjewellery.com';
  const imageUrl = `${baseUrl}/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Add gallery image (admin only)
app.post('/api/gallery', authenticateToken, (req, res) => {
  const { title, description, image_url, category } = req.body;
  
  const query = 'INSERT INTO gallery (title, description, image_url, category) VALUES (?, ?, ?, ?)';
  db.query(query, [title, description, image_url, category || 'general'], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Gallery image added successfully', id: result.insertId });
  });
});

// Update gallery image (admin only)
app.put('/api/gallery/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, image_url, category } = req.body;
  
  const query = 'UPDATE gallery SET title = ?, description = ?, image_url = ?, category = ? WHERE id = ?';
  db.query(query, [title, description, image_url, category, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Gallery image updated successfully' });
  });
});

// Delete gallery image (admin only)
app.delete('/api/gallery/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM gallery WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Gallery image deleted successfully' });
  });
});

// Company Gallery endpoints
// Get gallery images by company (no auth required for public access)
app.get('/api/company-gallery/:company', (req, res) => {
  const { company } = req.params;
  const query = 'SELECT * FROM company_gallery WHERE company_name = ? ORDER BY created_at DESC';
  db.query(query, [company], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(fixImageUrls(results));
  });
});

// Add company gallery image (admin only)
app.post('/api/company-gallery', authenticateToken, (req, res) => {
  const { company_name, title, description, image_url } = req.body;
  
  const query = 'INSERT INTO company_gallery (company_name, title, description, image_url) VALUES (?, ?, ?, ?)';
  db.query(query, [company_name, title, description, image_url], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Company gallery image added successfully', id: result.insertId });
  });
});

// Update company gallery image (admin only)
app.put('/api/company-gallery/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, image_url } = req.body;
  
  const query = 'UPDATE company_gallery SET title = ?, description = ?, image_url = ? WHERE id = ?';
  db.query(query, [title, description, image_url, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Company gallery image updated successfully' });
  });
});

// Delete company gallery image (admin only)
app.delete('/api/company-gallery/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM company_gallery WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Company gallery image deleted successfully' });
  });
});

// Gallery categories endpoints
// Get all categories
app.get('/api/gallery/categories', (req, res) => {
  const query = 'SELECT * FROM gallery_categories ORDER BY name ASC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Add category (admin only)
app.post('/api/gallery/categories', authenticateToken, (req, res) => {
  const { name } = req.body;
  
  const query = 'INSERT INTO gallery_categories (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Category already exists' });
      }
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Category added successfully', id: result.insertId });
  });
});

// Update category (admin only)
app.put('/api/gallery/categories/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const query = 'UPDATE gallery_categories SET name = ? WHERE id = ?';
  db.query(query, [name, id], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Category name already exists' });
      }
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Category updated successfully' });
  });
});

// Delete category (admin only)
app.delete('/api/gallery/categories/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM gallery_categories WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Category deleted successfully' });
  });
});

// Homepage sliders endpoints
// Get all active sliders
app.get('/api/sliders', (req, res) => {
  const query = 'SELECT * FROM homepage_sliders WHERE is_active = TRUE ORDER BY sort_order ASC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(fixImageUrls(results));
  });
});

// Get all sliders (admin only)
app.get('/api/admin/sliders', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM homepage_sliders ORDER BY sort_order ASC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(fixImageUrls(results));
  });
});

// Add slider (admin only)
app.post('/api/admin/sliders', authenticateToken, (req, res) => {
  const { title, subtitle, description, image_url, button_text, button_link, is_active, sort_order } = req.body;
  
  const query = 'INSERT INTO homepage_sliders (title, subtitle, description, image_url, button_text, button_link, is_active, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [title, subtitle, description, image_url, button_text, button_link, is_active || true, sort_order || 0], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Slider added successfully', id: result.insertId });
  });
});

// Update slider (admin only)
app.put('/api/admin/sliders/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, subtitle, description, image_url, button_text, button_link, is_active, sort_order } = req.body;
  
  const query = 'UPDATE homepage_sliders SET title = ?, subtitle = ?, description = ?, image_url = ?, button_text = ?, button_link = ?, is_active = ?, sort_order = ? WHERE id = ?';
  db.query(query, [title, subtitle, description, image_url, button_text, button_link, is_active, sort_order, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Slider updated successfully' });
  });
});

// Delete slider (admin only)
app.delete('/api/admin/sliders/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM homepage_sliders WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Slider deleted successfully' });
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Unused images management endpoints
// Scan for unused images (admin only)
app.get('/api/admin/unused-images', authenticateToken, (req, res) => {
  const uploadsDir = path.join(__dirname, 'uploads');
  
  if (!fs.existsSync(uploadsDir)) {
    return res.json({ images: [], stats: { total: 0, size: 0 } });
  }

  // Get all files in uploads directory
  const files = fs.readdirSync(uploadsDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });

  // Get all image URLs from database
  const queries = [
    'SELECT image_url FROM gallery WHERE image_url IS NOT NULL',
    'SELECT image_url FROM company_gallery WHERE image_url IS NOT NULL',
    'SELECT image_url FROM homepage_sliders WHERE image_url IS NOT NULL'
  ];

  Promise.all(queries.map(query => new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results.map(row => row.image_url));
    });
  })))
  .then(results => {
    const usedUrls = results.flat();
    const usedFiles = new Set();
    
    // Extract filenames from URLs
    usedUrls.forEach(url => {
      if (url) {
        const filename = path.basename(url);
        usedFiles.add(filename);
      }
    });

    // Find unused files
    const unusedImages = [];
    let totalSize = 0;

    files.forEach(file => {
      if (!usedFiles.has(file)) {
        const filePath = path.join(uploadsDir, file);
        const stats = fs.statSync(filePath);
        const baseUrl = process.env.BASE_URL || 'https://backend.prabanjamjewellery.com';
        
        unusedImages.push({
          name: file,
          path: filePath,
          url: `${baseUrl}/uploads/${file}`,
          size: stats.size,
          modified: stats.mtime
        });
        totalSize += stats.size;
      }
    });

    res.json({
      images: unusedImages,
      stats: {
        total: unusedImages.length,
        size: totalSize
      }
    });
  })
  .catch(err => {
    console.error('Error scanning unused images:', err);
    res.status(500).json({ message: 'Database error' });
  });
});

// Delete unused images (admin only)
app.post('/api/admin/delete-unused-images', authenticateToken, (req, res) => {
  const { images } = req.body;
  
  if (!Array.isArray(images) || images.length === 0) {
    return res.status(400).json({ message: 'No images specified for deletion' });
  }

  let deletedCount = 0;
  let errors = [];

  images.forEach(imagePath => {
    try {
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        deletedCount++;
      }
    } catch (error) {
      errors.push({ path: imagePath, error: error.message });
    }
  });

  res.json({
    message: `Successfully deleted ${deletedCount} images`,
    deletedCount,
    errors: errors.length > 0 ? errors : undefined
  });
});

// Debug token endpoint
app.get('/api/debug/token', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log('🔐 [TOKEN DEBUG] Auth header:', authHeader);
  console.log('🔐 [TOKEN DEBUG] Token:', token);
  
  if (!token) {
    return res.json({ valid: false, error: 'No token provided' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('❌ [TOKEN DEBUG] Verification failed:', err.message);
      return res.json({ valid: false, error: err.message });
    }
    console.log('✅ [TOKEN DEBUG] Token valid for:', user);
    res.json({ valid: true, user });
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  db.end(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  db.end(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
  console.log('🌐 [DEPLOYMENT DEBUG] Environment variables:');
  console.log(`  - BASE_URL: ${process.env.BASE_URL}`);
  console.log(`  - API_KEY: ${process.env.API_KEY ? 'Set' : 'Missing'}`);
  console.log(`  - JWT_SECRET: ${process.env.JWT_SECRET ? 'Set' : 'Missing'}`);
  console.log(`  - DB_HOST: ${process.env.DB_HOST}`);
  console.log(`  - DB_NAME: ${process.env.DB_NAME}`);
});