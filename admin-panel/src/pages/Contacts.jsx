import React, { useState, useEffect } from 'react';
import { api } from '../config/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await api.get('/admin/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contacts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Submissions</h1>
      
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Area</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((contact, index) => (
              <tr key={contact.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.area}</td>
                <td>{new Date(contact.created_at).toLocaleDateString()}</td>
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
            <span>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, contacts.length)} of {contacts.length} entries</span>
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

export default Contacts;