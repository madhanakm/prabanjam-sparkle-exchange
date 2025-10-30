import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <h1>Prabanjam Admin</h1>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/shareholders">Shareholders</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/investments">Investments</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
      
      <div className="user-menu">
        <button 
          className="user-icon" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
        
        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/change-password" className="dropdown-item" onClick={() => setShowDropdown(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              Change Password
            </Link>
            <button className="dropdown-item" onClick={onLogout}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;