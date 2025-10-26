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