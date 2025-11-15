const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const createSlidersTable = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS homepage_sliders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(200) NOT NULL,
      subtitle VARCHAR(300),
      description TEXT,
      image_url VARCHAR(500) NOT NULL,
      button_text VARCHAR(50),
      button_link VARCHAR(200),
      is_active BOOLEAN DEFAULT TRUE,
      sort_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const insertSampleData = `
    INSERT INTO homepage_sliders (title, subtitle, description, image_url, button_text, button_link, is_active, sort_order) VALUES
    ('Prabanjam Group of Companies', 'Excellence in Diversified Business', 'Leading the way in finance, real estate, jewelry, and hospitality with unwavering commitment to quality and customer satisfaction.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80', 'Explore Our Companies', '/group-of-companies', TRUE, 1),
    ('Premium Investment Opportunities', 'Secure Your Financial Future', 'Join thousands of satisfied investors who trust Prabanjam for reliable returns and transparent investment solutions.', 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80', 'Start Investing', '/invest-now', TRUE, 2),
    ('Trusted Since 2015', 'Your Partner in Growth', 'With years of experience across multiple industries, we deliver exceptional value and build lasting relationships with our clients.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', 'Learn More', '/about', TRUE, 3)
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('✅ Homepage sliders table created successfully');

    db.query(insertSampleData, (err, result) => {
      if (err) {
        console.error('Error inserting sample data:', err);
      } else {
        console.log('✅ Sample slider data inserted successfully');
        console.log('Inserted', result.affectedRows, 'sliders');
      }
      db.end();
    });
  });
};

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database');
  createSlidersTable();
});