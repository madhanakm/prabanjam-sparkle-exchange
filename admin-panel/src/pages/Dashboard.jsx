import React, { useState, useEffect } from 'react';
import { api } from '../config/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    testimonials: 0,
    shareholders: 0,
    contacts: 0,
    investments: 0,
    gallery: 0,
    categories: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const headers = { Authorization: `Bearer ${token}` };

      const [testimonials, shareholders, contacts, investments, gallery, categories] = await Promise.all([
        api.get('/testimonials'),
        api.get('/shareholders'),
        api.get('/admin/contacts'),
        api.get('/admin/investments'),
        api.get('/gallery'),
        api.get('/gallery/categories')
      ]);

      setStats({
        testimonials: testimonials.data.length,
        shareholders: shareholders.data.length,
        contacts: contacts.data.length,
        investments: investments.data.length,
        gallery: gallery.data.length,
        categories: categories.data.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', width: '100%' }}>
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
        
        <div className="card">
          <h3>Gallery Images</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9b59b6' }}>{stats.gallery}</p>
        </div>
        
        <div className="card">
          <h3>Gallery Categories</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1abc9c' }}>{stats.categories}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;