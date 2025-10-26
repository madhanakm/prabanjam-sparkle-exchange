import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    testimonials: 0,
    shareholders: 0,
    contacts: 0,
    investments: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const headers = { Authorization: `Bearer ${token}` };

      const [testimonials, shareholders, contacts, investments] = await Promise.all([
        axios.get('http://localhost:5001/api/testimonials'),
        axios.get('http://localhost:5001/api/shareholders', { headers }),
        axios.get('http://localhost:5001/api/admin/contacts', { headers }),
        axios.get('http://localhost:5001/api/admin/investments', { headers })
      ]);

      setStats({
        testimonials: testimonials.data.length,
        shareholders: shareholders.data.length,
        contacts: contacts.data.length,
        investments: investments.data.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%' }}>
        <div className="card">
          <h3>Testimonials</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3498db' }}>{stats.testimonials}</p>
        </div>
        
        <div className="card">
          <h3>Shareholders</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27ae60' }}>{stats.shareholders}</p>
        </div>
        
        <div className="card">
          <h3>Contact Submissions</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f39c12' }}>{stats.contacts}</p>
        </div>
        
        <div className="card">
          <h3>Investment Inquiries</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>{stats.investments}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;