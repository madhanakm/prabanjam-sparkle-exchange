const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
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

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Key middleware
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Invalid API key' });
  }
  
  next();
};

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
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
  
  const query = 'SELECT * FROM admins WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const admin = results[0];
    const isValidPassword = await bcrypt.compare(password, admin.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
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
  const { firstName, lastName, email, phone, subject, message } = req.body;
  
  const query = 'INSERT INTO contact_submissions (first_name, last_name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, phone, subject, message], (err, result) => {
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
    // Fix image URLs for production
    const baseUrl = process.env.BASE_URL || 'http://localhost:5001';
    const fixedResults = results.map(item => ({
      ...item,
      image_url: item.image_url.replace('http://localhost:5001', baseUrl)
    }));
    res.json(fixedResults);
  });
});

// Upload image endpoint
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  const imageUrl = `${process.env.BASE_URL || 'https://backend.prabanjamjewellery.com'}/uploads/${req.file.filename}`;
  res.json({ image_url: imageUrl });
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});