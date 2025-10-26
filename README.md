# Prabanjam Jewelry Pvt Ltd - Complete System

## Overview
Complete website system with frontend, backend API, and admin panel for Prabanjam Jewelry Pvt Ltd.

## System Components

### 1. Frontend Website (React + Vite)
- Modern responsive website
- Dynamic testimonials from database
- Contact and investment forms
- Shareholders section with authentication

### 2. Backend API (Node.js + Express)
- RESTful API endpoints
- MySQL database integration
- JWT authentication for admin
- Form submissions handling

### 3. Admin Panel (React)
- Admin authentication
- Manage testimonials
- View shareholders list
- Handle contact submissions
- Investment inquiries management

## Setup Instructions

### Database Setup (XAMPP)
1. Start XAMPP and ensure MySQL is running
2. Open phpMyAdmin (http://localhost/phpmyadmin)
3. Import the database schema from `backend/database.sql`
4. Default admin credentials: username: `admin`, password: `admin123`

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend will run on http://localhost:5000

### Frontend Website
```bash
npm install
npm run dev
```
Website will run on http://localhost:8080

### Admin Panel
```bash
cd admin-panel
npm install
npm start
```
Admin panel will run on http://localhost:3000

## API Endpoints

### Public Endpoints
- `GET /api/testimonials` - Get all testimonials
- `POST /api/contact` - Submit contact form
- `POST /api/invest` - Submit investment inquiry

### Admin Endpoints (Requires Authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/shareholders` - Get shareholders list
- `POST /api/shareholders` - Add new shareholder
- `POST /api/testimonials` - Add new testimonial
- `GET /api/admin/contacts` - Get contact submissions
- `GET /api/admin/investments` - Get investment inquiries

## Features

### Website Features
- ✅ Dynamic testimonials from database
- ✅ Contact form with backend integration
- ✅ Investment form with backend integration
- ✅ Shareholders section (login required)
- ✅ Responsive design with animations
- ✅ SEO optimized

### Admin Panel Features
- ✅ Secure admin authentication
- ✅ Dashboard with statistics
- ✅ Testimonials management
- ✅ Shareholders management
- ✅ Contact submissions view
- ✅ Investment inquiries view

## Database Schema

### Tables
- `admins` - Admin users
- `testimonials` - Customer testimonials
- `shareholders` - Company shareholders
- `contact_submissions` - Contact form submissions
- `investment_inquiries` - Investment form submissions

## Environment Variables

### Backend (.env)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=prabanjam_db
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

## Default Admin Credentials
- Username: `admin`
- Password: `admin123`

## Technologies Used

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Axios

### Backend
- Node.js + Express
- MySQL2
- JWT Authentication
- bcryptjs
- CORS

### Admin Panel
- React
- React Router DOM
- Axios

## Deployment Notes
- Update API URLs in production
- Set proper environment variables
- Configure CORS for production domains
- Use HTTPS in production
- Set up proper database backups