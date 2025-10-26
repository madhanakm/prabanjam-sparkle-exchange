import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shareholders = () => {
  const [shareholders, setShareholders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    shares: '',
    investment_date: '',
    username: '',
    password: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchShareholders();
  }, []);

  const fetchShareholders = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5001/api/shareholders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShareholders(response.data);
    } catch (error) {
      console.error('Error fetching shareholders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      if (editingId) {
        await axios.put(`http://localhost:5001/api/shareholders/${editingId}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('http://localhost:5001/api/shareholders', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      fetchShareholders();
      resetForm();
    } catch (error) {
      console.error('Error saving shareholder:', error);
    }
  };

  const handleEdit = (shareholder) => {
    setFormData({
      name: shareholder.name,
      shares: shareholder.shares,
      investment_date: shareholder.investment_date.split('T')[0],
      username: shareholder.username,
      password: ''
    });
    setEditingId(shareholder.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this shareholder?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.delete(`http://localhost:5001/api/shareholders/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchShareholders();
      } catch (error) {
        console.error('Error deleting shareholder:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', shares: '', investment_date: '', username: '', password: '' });
    setEditingId(null);
    setShowForm(false);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shareholders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(shareholders.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title">Shareholders</h1>
        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Add Shareholder
        </button>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingId ? 'Edit Shareholder' : 'Add Shareholder'}</h3>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Shares</label>
                <input
                  type="number"
                  value={formData.shares || ''}
                  onChange={(e) => setFormData({...formData, shares: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Investment Date</label>
                <input
                  type="date"
                  value={formData.investment_date || ''}
                  onChange={(e) => setFormData({...formData, investment_date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Username (for website login)</label>
                <input
                  type="text"
                  value={formData.username || ''}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                  placeholder="e.g. john.doe"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={formData.password || ''}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required={!editingId}
                  placeholder={editingId ? "Leave blank to keep current password" : "Enter password"}
                />
              </div>
              <button type="submit" className="btn">
                {editingId ? 'Update' : 'Add'} Shareholder
              </button>
            </form>
          </div>
        </div>
      )}
      
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Shares</th>
              <th>Investment Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((shareholder, index) => (
              <tr key={shareholder.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{shareholder.name}</td>
                <td>{shareholder.username}</td>
                <td>{shareholder.shares}</td>
                <td>{new Date(shareholder.investment_date).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon btn-primary" onClick={() => handleEdit(shareholder)} title="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </button>
                    <button className="btn-icon btn-danger" onClick={() => handleDelete(shareholder.id)} title="Delete">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="pagination">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className="btn-pagination"
          >
            ← Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`btn-page ${currentPage === index + 1 ? 'btn-page-active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="btn-pagination"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shareholders;