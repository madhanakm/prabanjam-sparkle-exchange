import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Investments = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5001/api/admin/investments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInvestments(response.data);
    } catch (error) {
      console.error('Error fetching investments:', error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = investments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(investments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">Investment Inquiries</h1>
      
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((investment, index) => (
              <tr key={investment.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{investment.name}</td>
                <td>{investment.email}</td>
                <td>{investment.phone}</td>
                <td>₹{investment.amount}</td>
                <td>{investment.investment_type}</td>
                <td>{new Date(investment.created_at).toLocaleDateString()}</td>
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

export default Investments;