import React, { useState, useEffect } from 'react';
import { api } from '../config/api';

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
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchShareholders();
  }, []);

  const fetchShareholders = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        console.error('No admin token found');
        window.location.href = '/login';
        return;
      }
      const response = await api.get('/shareholders');
      setShareholders(response.data);
    } catch (error) {
      console.error('Error fetching shareholders:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      if (editingId) {
        await api.put(`/shareholders/${editingId}`, formData);
      } else {
        await api.post('/shareholders', formData);
      }
      fetchShareholders();
      resetForm();
    } catch (error) {
      console.error('Error saving shareholder:', error);
      if (error.response?.data?.message) {
        alert('Error: ' + error.response.data.message);
      } else {
        alert('Error saving shareholder. Please check all fields.');
      }
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
        await api.delete(`/shareholders/${id}`);
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

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

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
        
        {/* Items per page selector */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Show:</span>
            <select 
              value={itemsPerPage} 
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              style={{ padding: '0.25rem', border: '1px solid #ddd', borderRadius: '4px' }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>
          <div>
            <span>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, shareholders.length)} of {shareholders.length} entries</span>
          </div>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
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
        )}
      </div>
    </div>
  );
};

export default Shareholders;