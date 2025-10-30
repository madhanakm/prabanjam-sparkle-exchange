import React, { useState, useEffect } from 'react';
import { api } from '../config/api';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [newCategory, setNewCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: 'jewelry'
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    fetchGallery();
    fetchCategories();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await api.get('/gallery');
      setGallery(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/gallery/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleFileUpload = async (file) => {
    setUploading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return response.data.image_url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = formData.image_url;
      
      // Upload file if selected
      if (selectedFile) {
        imageUrl = await handleFileUpload(selectedFile);
      }
      
      const token = localStorage.getItem('adminToken');
      const submitData = { ...formData, image_url: imageUrl };
      
      if (editingId) {
        await api.put(`/gallery/${editingId}`, submitData);
      } else {
        await api.post('/gallery', submitData);
      }
      fetchGallery();
      resetForm();
    } catch (error) {
      console.error('Error saving gallery image:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      description: item.description,
      image_url: item.image_url,
      category: item.category
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await api.delete(`/gallery/${id}`);
        fetchGallery();
      } catch (error) {
        console.error('Error deleting gallery image:', error);
      }
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      if (editingCategoryId) {
        await api.put(`/gallery/categories/${editingCategoryId}`, { name: newCategory });
      } else {
        await api.post('/gallery/categories', { name: newCategory });
      }
      fetchCategories();
      setNewCategory('');
      setEditingCategoryId(null);
      setShowCategoryForm(false);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleEditCategory = (category) => {
    setNewCategory(category.name);
    setEditingCategoryId(category.id);
    setShowCategoryForm(true);
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await api.delete(`/gallery/categories/${id}`);
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image_url: '', category: categories[0]?.name || '' });
    setSelectedFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gallery.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title">Gallery Management</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-add" onClick={() => setShowCategoryForm(true)}>
            + Manage Categories
          </button>
          <button className="btn-add" onClick={() => setShowForm(true)}>
            + Add Image
          </button>
        </div>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingId ? 'Edit Image' : 'Add Image'}</h3>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    style={{ marginBottom: '0.5rem' }}
                  />
                  {selectedFile && (
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Selected: {selectedFile.name}</p>
                  )}
                </div>
                <div style={{ textAlign: 'center', margin: '1rem 0', color: '#666' }}>OR</div>
                <input
                  type="url"
                  placeholder="Enter image URL"
                  value={formData.image_url || ''}
                  onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={formData.category || ''}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn" disabled={uploading}>
                {uploading ? 'Uploading...' : (editingId ? 'Update' : 'Add')} Image
              </button>
            </form>
          </div>
        </div>
      )}

      {showCategoryForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Manage Categories</h3>
              <button className="close-btn" onClick={() => setShowCategoryForm(false)}>×</button>
            </div>
            
            <form onSubmit={handleAddCategory} style={{ marginBottom: '2rem' }}>
              <div className="form-group">
                <label>{editingCategoryId ? 'Edit Category' : 'Add New Category'}</label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="submit" className="btn">
                  {editingCategoryId ? 'Update' : 'Add'} Category
                </button>
                {editingCategoryId && (
                  <button 
                    type="button" 
                    className="btn" 
                    style={{ background: '#6c757d' }}
                    onClick={() => {
                      setNewCategory('');
                      setEditingCategoryId(null);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Existing Categories</h4>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {categories.map(category => (
                  <div key={category.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                    <span>{category.name}</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => handleEditCategory(category)}
                        style={{ background: '#007bff', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                        title="Edit"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleDeleteCategory(category.id)}
                        style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                        title="Delete"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer'}} 
                    onClick={() => openLightbox(item)}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon btn-primary" onClick={() => handleEdit(item)} title="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </button>
                    <button className="btn-icon btn-danger" onClick={() => handleDelete(item.id)} title="Delete">
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
            <span>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, gallery.length)} of {gallery.length} entries</span>
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

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="modal" onClick={closeLightbox}>
            <div className="modal-content" style={{maxWidth: '90vw', maxHeight: '90vh', padding: '1rem'}} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{currentImage.title}</h3>
                <button className="close-btn" onClick={closeLightbox}>×</button>
              </div>
              <div style={{textAlign: 'center'}}>
                <img 
                  src={currentImage.image_url} 
                  alt={currentImage.title} 
                  style={{maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain'}} 
                />
                {currentImage.description && (
                  <p style={{marginTop: '1rem', color: '#666'}}>{currentImage.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;