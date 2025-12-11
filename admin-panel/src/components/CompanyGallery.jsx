import React, { useState, useEffect } from 'react';
import { api } from '../config/api';

const CompanyGallery = () => {
  const [galleries, setGalleries] = useState({});
  const [selectedCompany, setSelectedCompany] = useState('prabanjam-jewellery');
  const [newImage, setNewImage] = useState({ title: '', description: '', image_url: '' });
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const companies = [
    { id: 'prabanjam-jewellery', name: 'Prabanjam Jewellery Limited' },
    { id: 'sri-cashway-finance', name: 'Sri Cashway Gold Finance' },
    { id: 'prabanjam-gold-covering', name: 'Prabanjam Gold Covering' },
    { id: 'siruvani-complex', name: 'Siruvani Complex' },
    { id: 'prabanjam-resorts', name: 'Prabanjam Resorts (Ooty)' }
  ];

  useEffect(() => {
    fetchCompanyGallery(selectedCompany);
  }, [selectedCompany]);

  const fetchCompanyGallery = async (company) => {
    try {
      const response = await api.get(`/company-gallery/${company}`);
      setGalleries(prev => ({ ...prev, [company]: response.data }));
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    
    setSelectedFile(file);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setNewImage(prev => ({ ...prev, image_url: response.data.image_url }));
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!newImage.title || !newImage.image_url) {
      return;
    }

    try {
      if (editingId) {
        await api.put(`/company-gallery/${editingId}`, newImage);
        setEditingId(null);
        showSuccessMessage('Image updated successfully!');
      } else {
        await api.post('/company-gallery', {
          company_name: selectedCompany,
          ...newImage
        });
        showSuccessMessage('Image added successfully!');
      }
      setNewImage({ title: '', description: '', image_url: '' });
      setSelectedFile(null);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      await fetchCompanyGallery(selectedCompany);
    } catch (error) {
      console.error('Error saving image:', error);
      showSuccessMessage('Error saving image!');
    }
  };

  const handleEditImage = (image) => {
    setNewImage({ title: image.title, description: image.description, image_url: image.image_url });
    setEditingId(image.id);
  };

  const handleCancelEdit = () => {
    setNewImage({ title: '', description: '', image_url: '' });
    setEditingId(null);
    setSelectedFile(null);
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };

  const handleDeleteImage = (id) => {
    setConfirmMessage('Are you sure you want to delete this image?');
    setConfirmAction(() => async () => {
      try {
        await api.delete(`/company-gallery/${id}`);
        showSuccessMessage('Image deleted successfully!');
        fetchCompanyGallery(selectedCompany);
      } catch (error) {
        console.error('Error deleting image:', error);
        showSuccessMessage('Error deleting image!');
      }
    });
    setShowConfirm(true);
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleConfirm = () => {
    if (confirmAction) confirmAction();
    setShowConfirm(false);
    setConfirmAction(null);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setConfirmAction(null);
  };



  const currentGallery = galleries[selectedCompany] || [];

  return (
    <div className="page-container">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="page-title">Company Gallery Management</h1>

        {/* Company Selector */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Select Company</label>
          <select 
            value={selectedCompany} 
            onChange={(e) => setSelectedCompany(e.target.value)}
            style={{ width: '300px', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
          >
            {companies.map(company => (
              <option key={company.id} value={company.id}>{company.name}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
          {/* Add New Image Form */}
          <div>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
                {editingId ? 'Edit Image' : 'Add New Image'}
              </h2>
              <form onSubmit={handleAddImage}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '4px' }}>Title *</label>
                  <input
                    type="text"
                    value={newImage.title}
                    onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                    style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
                    placeholder="Enter image title"
                    required
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '4px' }}>Description</label>
                  <textarea
                    value={newImage.description}
                    onChange={(e) => setNewImage(prev => ({ ...prev, description: e.target.value }))}
                    style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', height: '60px', resize: 'none' }}
                    placeholder="Enter image description"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '4px' }}>Upload Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                    style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
                    disabled={uploading}
                  />
                  {uploading && (
                    <p style={{ color: '#2563eb', fontSize: '14px', margin: '8px 0 0 0' }}>Uploading...</p>
                  )}
                  {newImage.image_url && (
                    <img src={newImage.image_url} alt="Preview" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px', marginTop: '8px', border: '1px solid #ddd' }} />
                  )}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="submit"
                    style={{ 
                      flex: 1,
                      padding: '12px', 
                      backgroundColor: uploading || !newImage.title || !newImage.image_url ? '#9ca3af' : '#2563eb', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      cursor: uploading || !newImage.title || !newImage.image_url ? 'not-allowed' : 'pointer'
                    }}
                    disabled={uploading || !newImage.title || !newImage.image_url}
                  >
                    {uploading ? 'Uploading...' : (editingId ? 'Update' : 'Add')}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      style={{ 
                        padding: '12px 16px', 
                        backgroundColor: '#6b7280', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Gallery Images */}
          <div>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>
                  {companies.find(c => c.id === selectedCompany)?.name} Gallery
                </h2>
                <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>
                  {currentGallery.length} images
                </span>
              </div>
              
              {currentGallery.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                  {currentGallery.map(image => (
                    <div key={image.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
                      <img 
                        src={image.image_url} 
                        alt={image.title}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '12px' }}>
                        <h3 style={{ fontWeight: '600', margin: '0 0 4px 0', fontSize: '14px' }}>{image.title}</h3>
                        {image.description && (
                          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 12px 0' }}>{image.description}</p>
                        )}

                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button
                            onClick={() => handleEditImage(image)}
                            style={{ 
                              flex: 1,
                              padding: '8px', 
                              backgroundColor: editingId === image.id ? '#059669' : '#2563eb', 
                              color: 'white', 
                              border: 'none', 
                              borderRadius: '4px', 
                              fontSize: '12px', 
                              fontWeight: '500',
                              cursor: 'pointer'
                            }}
                          >
                            {editingId === image.id ? 'Editing' : 'Edit'}
                          </button>
                          <button
                            onClick={() => handleDeleteImage(image.id)}
                            style={{ 
                              flex: 1,
                              padding: '8px', 
                              backgroundColor: '#dc2626', 
                              color: 'white', 
                              border: 'none', 
                              borderRadius: '4px', 
                              fontSize: '12px', 
                              fontWeight: '500',
                              cursor: 'pointer'
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '60px', height: '60px', margin: '0 auto 16px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '24px', color: '#9ca3af' }}>📷</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 8px 0' }}>No images yet</h3>
                  <p style={{ color: '#6b7280', margin: '0', fontSize: '14px' }}>Upload your first image to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Confirmation Modal */}
      {showConfirm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', maxWidth: '400px', width: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Confirm Action</h3>
            <p style={{ margin: '0 0 24px 0', color: '#666' }}>{confirmMessage}</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={handleCancel}
                style={{ padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#10b981', color: 'white', padding: '12px 20px', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000 }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default CompanyGallery;