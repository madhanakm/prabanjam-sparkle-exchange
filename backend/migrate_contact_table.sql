-- Migration to update contact_submissions table structure
-- Run this on your existing database

USE prabanjam_api_db;

-- Drop the old table and create new one with simplified structure
DROP TABLE IF EXISTS contact_submissions;

CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  area VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
