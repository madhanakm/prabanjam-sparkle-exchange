import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Testimonials from './pages/Testimonials';
import Shareholders from './pages/Shareholders';
import Contacts from './pages/Contacts';
import Investments from './pages/Investments';
import ChangePassword from './pages/ChangePassword';
import Gallery from './pages/Gallery';
import Sliders from './pages/Sliders';
import Navbar from './components/Navbar';
import './App.css';

const INACTIVITY_TIMEOUT = 3 * 60 * 60 * 1000; // 3 hours

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    let inactivityTimer;
    
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      if (isAuthenticated) {
        inactivityTimer = setTimeout(() => {
          handleLogout();
        }, INACTIVITY_TIMEOUT);
      }
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    if (isAuthenticated) {
      events.forEach(event => {
        document.addEventListener(event, resetTimer, true);
      });
      resetTimer();
    }

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [isAuthenticated, handleLogout]);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
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
          <Route 
            path="/sliders" 
            element={
              isAuthenticated ? 
              <Sliders /> : 
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