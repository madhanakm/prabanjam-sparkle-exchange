-- Create database
CREATE DATABASE IF NOT EXISTS prabanjam_db;
USE prabanjam_db;

-- Admins table
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin (password: admin123)
INSERT INTO admins (username, password) VALUES 
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Testimonials table
CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  rating INT DEFAULT 5,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample testimonials
INSERT INTO testimonials (name, message, rating, image) VALUES
('Rajesh Kumar', 'Excellent service and genuine products. I have been investing with Prabanjam for 3 years now.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'),
('Priya Sharma', 'Very trustworthy company. Their gold exchange service is transparent and fair.', 5, 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80'),
('Arun Patel', 'Professional team and great investment returns. Highly recommended!', 5, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80');

-- Shareholders table
CREATE TABLE shareholders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  shares INT NOT NULL,
  investment_date DATE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample shareholders (password: shareholder123 for all)
INSERT INTO shareholders (name, shares, investment_date, username, password) VALUES
('Rajesh Kumar', 1000, '2023-01-15', 'rajesh.kumar', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Priya Sharma', 750, '2023-02-20', 'priya.sharma', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Arun Patel', 500, '2023-03-10', 'arun.patel', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Meera Singh', 1200, '2023-04-05', 'meera.singh', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Vikram Reddy', 800, '2023-05-12', 'vikram.reddy', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Contact submissions table
CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Investment inquiries table
CREATE TABLE investment_inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  amount DECIMAL(10,2),
  investment_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  image_url VARCHAR(500) NOT NULL,
  category VARCHAR(50) DEFAULT 'general',
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery categories table
CREATE TABLE gallery_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample categories
INSERT INTO gallery_categories (name) VALUES
('Jewelry'),
('Gold'),
('Silver'),
('Diamond'),
('Rings'),
('Necklaces'),
('Bracelets'),
('Earrings');

-- Sample gallery images
INSERT INTO gallery (title, description, image_url, category, is_featured) VALUES
('Gold Necklace Collection', 'Exquisite handcrafted gold necklaces', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', 'jewelry', TRUE),
('Diamond Rings', 'Premium diamond engagement rings', 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80', 'jewelry', TRUE),
('Silver Bracelets', 'Elegant silver bracelet designs', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80', 'jewelry', FALSE),
('Gold Earrings', 'Traditional and modern gold earrings', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', 'jewelry', FALSE);

-- Homepage sliders table
CREATE TABLE homepage_sliders (
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
);

-- Sample homepage sliders
INSERT INTO homepage_sliders (title, subtitle, description, image_url, button_text, button_link, is_active, sort_order) VALUES
('Prabanjam Group of Companies', 'Excellence in Diversified Business', 'Leading the way in finance, real estate, jewelry, and hospitality with unwavering commitment to quality and customer satisfaction.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80', 'Explore Our Companies', '/group-of-companies', TRUE, 1),
('Premium Investment Opportunities', 'Secure Your Financial Future', 'Join thousands of satisfied investors who trust Prabanjam for reliable returns and transparent investment solutions.', 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80', 'Start Investing', '/invest-now', TRUE, 2),
('Trusted Since 2015', 'Your Partner in Growth', 'With years of experience across multiple industries, we deliver exceptional value and build lasting relationships with our clients.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', 'Learn More', '/about', TRUE, 3);