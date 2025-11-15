import React, { useState, useEffect } from 'react';
import { api, API_BASE_URL } from '../config/api';

const Sliders = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSlider, setEditingSlider] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image_url: '',
    button_text: '',
    button_link: '',
    is_active: true,
    sort_order: 0
  });

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await api.get('/admin/sliders');
      setSliders(response.data);
    } catch (error) {
      console.error('Error fetching sliders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/admin/sliders/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataUpload
      });
      
      const data = await response.json();
      setFormData(prev => ({ ...prev, image_url: data.imageUrl }));
      setImagePreview(data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSlider) {
        await api.put(`/admin/sliders/${editingSlider.id}`, formData);
      } else {
        await api.post('/admin/sliders', formData);
      }
      fetchSliders();
      resetForm();
    } catch (error) {
      console.error('Error saving slider:', error);
    }
  };

  const handleEdit = (slider) => {
    setEditingSlider(slider);
    setFormData({
      title: slider.title,
      subtitle: slider.subtitle || '',
      description: slider.description || '',
      image_url: slider.image_url,
      button_text: slider.button_text || '',
      button_link: slider.button_link || '',
      is_active: slider.is_active,
      sort_order: slider.sort_order
    });
    setImagePreview(slider.image_url);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this slider?')) {
      try {
        await api.delete(`/admin/sliders/${id}`);
        fetchSliders();
      } catch (error) {
        console.error('Error deleting slider:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image_url: '',
      button_text: '',
      button_link: '',
      is_active: true,
      sort_order: 0
    });
    setEditingSlider(null);
    setImagePreview('');
    setShowForm(false);
  };

  if (loading) {
    return <div className="loading">Loading sliders...</div>;
  }

  return (
    <div className="sliders-page">
      <div className="page-header-modern">
        <div className="header-content">
          <div className="header-text">
            <h1 className="page-title-modern">Homepage Sliders</h1>
            <p className="page-subtitle">Manage your website's hero slider content</p>
          </div>
          <button 
            className="btn-add-modern"
            onClick={() => setShowForm(true)}
          >
            <span className="btn-icon">+</span>
            Add New Slider
          </button>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="slider-modal">
            <div className="slider-modal-header">
              <h2>{editingSlider ? 'Edit Slider' : 'Add New Slider'}</h2>
              <button className="modal-close" onClick={resetForm}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="slider-form-container">
              <div className="slider-form-body">
                <div className="form-section">
                  <h3>Content Details</h3>
                  <div className="form-fields">
                    <div className="field-group">
                      <label>Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Enter compelling slider title"
                        required
                      />
                    </div>
                    
                    <div className="field-group">
                      <label>Subtitle</label>
                      <input
                        type="text"
                        value={formData.subtitle}
                        onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                        placeholder="Supporting subtitle text"
                      />
                    </div>
                    
                    <div className="field-group">
                      <label>Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows="3"
                        placeholder="Brief description of the slider content"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Image Upload</h3>
                  <div className="image-section">
                    {imagePreview ? (
                      <div className="image-preview-container">
                        <img src={imagePreview} alt="Preview" className="preview-image" />
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => {
                            setImagePreview('');
                            setFormData(prev => ({ ...prev, image_url: '' }));
                          }}
                        >
                          ✕ Remove
                        </button>
                      </div>
                    ) : (
                      <div className="upload-zone">
                        <div className="upload-content">
                          <div className="upload-icon">📷</div>
                          <label className="upload-button">
                            {uploading ? 'Uploading...' : 'Upload Image'}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              disabled={uploading}
                            />
                          </label>
                          <p>Recommended: 1920×1080px, Max 5MB</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="url-input">
                      <label>Or paste image URL</label>
                      <input
                        type="url"
                        value={formData.image_url}
                        onChange={(e) => {
                          setFormData({...formData, image_url: e.target.value});
                          setImagePreview(e.target.value);
                        }}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Action Button & Settings</h3>
                  <div className="form-fields">
                    <div className="field-row">
                      <div className="field-group">
                        <label>Button Text</label>
                        <input
                          type="text"
                          value={formData.button_text}
                          onChange={(e) => setFormData({...formData, button_text: e.target.value})}
                          placeholder="Learn More"
                        />
                      </div>
                      <div className="field-group">
                        <label>Display Order</label>
                        <input
                          type="number"
                          value={formData.sort_order}
                          onChange={(e) => setFormData({...formData, sort_order: parseInt(e.target.value)})}
                          min="0"
                        />
                      </div>
                    </div>
                    
                    <div className="field-group">
                      <label>Button Link</label>
                      <select
                        value={formData.button_link}
                        onChange={(e) => setFormData({...formData, button_link: e.target.value})}
                      >
                        <option value="">Select a page</option>
                        <option value="/">Home</option>
                        <option value="/about">About Us</option>
                        <option value="/services">Services</option>
                        <option value="/contact">Contact</option>
                        <option value="/gallery">Gallery</option>
                        <option value="/shareholders">Shareholders</option>
                        <option value="/board-of-directors">Board of Directors</option>
                        <option value="/group-of-companies">Group of Companies</option>
                        <option value="/upcoming">Upcoming</option>
                      </select>
                    </div>
                    
                    <div className="field-group">
                      <label className="switch-label">
                        <input
                          type="checkbox"
                          checked={formData.is_active}
                          onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                          className="switch-input"
                        />
                        <span className="switch-slider"></span>
                        Active Slider
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="slider-form-footer">
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-save"
                  disabled={uploading || !formData.image_url}
                >
                  {uploading ? 'Processing...' : (editingSlider ? 'Update Slider' : 'Create Slider')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="sliders-grid">
        {sliders.map((slider) => (
          <div key={slider.id} className="slider-card-modern">
            <div className="card-image">
              <img src={slider.image_url} alt={slider.title} />
              <div className="image-overlay">
                <span className={`status-badge ${slider.is_active ? 'active' : 'inactive'}`}>
                  {slider.is_active ? '● Live' : '○ Draft'}
                </span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{slider.title}</h3>
                <span className="order-badge">#{slider.sort_order}</span>
              </div>
              {slider.subtitle && <p className="card-subtitle">{slider.subtitle}</p>}
              <p className="card-description">{slider.description}</p>
              <div className="card-footer">
                <div className="button-info">
                  {slider.button_text && (
                    <span className="button-preview">
                      "{slider.button_text}" → {slider.button_link}
                    </span>
                  )}
                </div>
                <div className="card-actions">
                  <button 
                    className="action-btn edit-btn"
                    onClick={() => handleEdit(slider)}
                    title="Edit slider"
                  >
                    ✏️
                  </button>
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(slider.id)}
                    title="Delete slider"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;