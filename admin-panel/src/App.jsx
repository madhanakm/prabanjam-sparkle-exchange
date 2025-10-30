import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Testimonials from './pages/Testimonials';
import Shareholders from './pages/Shareholders';
import Contacts from './pages/Contacts';
import Investments from './pages/Investments';
import ChangePassword from './pages/ChangePassword';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('adminToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? 
              <Login onLogin={handleLogin} /> : 
              <Navigate to="/dashboard" />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
              <Dashboard /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/testimonials" 
            element={
              isAuthenticated ? 
              <Testimonials /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/shareholders" 
            element={
              isAuthenticated ? 
              <Shareholders /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/contacts" 
            element={
              isAuthenticated ? 
              <Contacts /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/investments" 
            element={
              isAuthenticated ? 
              <Investments /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/change-password" 
            element={
              isAuthenticated ? 
              <ChangePassword /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/gallery" 
            element={
              isAuthenticated ? 
              <Gallery /> : 
              <Navigate to="/login" />
            } 
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;