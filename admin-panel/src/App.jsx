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
import UnusedImages from './pages/UnusedImages';
import CompanyGallery from './components/CompanyGallery';
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
          alert('Session expired due to inactivity. You will be logged out.');
          handleLogout();
        }, INACTIVITY_TIMEOUT);
      }
    };

    const handleActivity = () => {
      resetTimer();
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    if (isAuthenticated) {
      events.forEach(event => {
        document.addEventListener(event, handleActivity, true);
      });
      resetTimer();
    }

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [isAuthenticated, handleLogout]);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('adminToken', token);
    console.log('✅ [LOGIN DEBUG] Token saved to localStorage:', token.substring(0, 20) + '...');
    setIsAuthenticated(true);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <main className={isAuthenticated ? 'main-content' : ''}>
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
          <Route 
            path="/company-gallery" 
            element={
              isAuthenticated ? 
              <CompanyGallery /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/unused-images" 
            element={
              isAuthenticated ? 
              <UnusedImages /> : 
              <Navigate to="/login" />
            } 
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;