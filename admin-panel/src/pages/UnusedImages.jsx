import React, { useState, useEffect } from 'react';
import api from '../config/api';

const UnusedImages = () => {
  const [unusedImages, setUnusedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [stats, setStats] = useState({ total: 0, size: 0 });
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const scanUnusedImages = async () => {
    setScanning(true);
    try {
      const response = await api.get('/admin/unused-images');
      setUnusedImages(response.data.images);
      setStats(response.data.stats);
    } catch (error) {
      console.error('Error scanning unused images:', error);
      showSuccessMessage('Failed to scan unused images');
    } finally {
      setScanning(false);
    }
  };

  const deleteSelectedImages = () => {
    if (selectedImages.length === 0) {
      showSuccessMessage('Please select images to delete');
      return;
    }

    setConfirmMessage(`Are you sure you want to delete ${selectedImages.length} unused images? This action cannot be undone.`);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      await api.post('/admin/delete-unused-images', { images: selectedImages });
      showSuccessMessage(`Successfully deleted ${selectedImages.length} unused images`);
      setSelectedImages([]);
      scanUnusedImages();
    } catch (error) {
      console.error('Error deleting images:', error);
      showSuccessMessage('Failed to delete images');
    } finally {
      setDeleting(false);
      setShowConfirm(false);
    }
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const toggleImageSelection = (imagePath) => {
    setSelectedImages(prev => 
      prev.includes(imagePath) 
        ? prev.filter(path => path !== imagePath)
        : [...prev, imagePath]
    );
  };

  const selectAllImages = () => {
    setSelectedImages(unusedImages.map(img => img.path));
  };

  const deselectAllImages = () => {
    setSelectedImages([]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  useEffect(() => {
    scanUnusedImages();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header-modern">
        <div className="header-content">
          <div className="header-text">
            <h1 className="page-title-modern">Unused Images Management</h1>
            <p className="page-subtitle">Scan and clean up unused images to free up storage space</p>
          </div>
          <div className="header-actions">
            <button 
              className="btn-scan" 
              onClick={scanUnusedImages}
              disabled={scanning}
            >
              {scanning ? (
                <>
                  <div className="spinner"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Scan Images
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="stats-card">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Unused Images</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{formatFileSize(stats.size)}</div>
              <div className="stat-label">Total Size</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{selectedImages.length}</div>
              <div className="stat-label">Selected</div>
            </div>
          </div>
        </div>
      )}

      {unusedImages.length > 0 && (
        <div className="actions-bar">
          <div className="selection-actions">
            <button className="btn-select" onClick={selectAllImages}>
              Select All
            </button>
            <button className="btn-select" onClick={deselectAllImages}>
              Deselect All
            </button>
          </div>
          <button 
            className="btn-delete-selected" 
            onClick={deleteSelectedImages}
            disabled={deleting || selectedImages.length === 0}
          >
            {deleting ? (
              <>
                <div className="spinner"></div>
                Deleting...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                Delete Selected ({selectedImages.length})
              </>
            )}
          </button>
        </div>
      )}

      {unusedImages.length === 0 && !scanning ? (
        <div className="empty-state">
          <svg className="empty-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <h3>No Unused Images Found</h3>
          <p>All images are being used in your galleries and sliders.</p>
        </div>
      ) : (
        <div className="images-grid">
          {unusedImages.map((image, index) => (
            <div key={index} className={`image-card ${selectedImages.includes(image.path) ? 'selected' : ''}`}>
              <div className="image-checkbox">
                <input
                  type="checkbox"
                  checked={selectedImages.includes(image.path)}
                  onChange={() => toggleImageSelection(image.path)}
                />
              </div>
              <div className="image-preview">
                <img 
                  src={image.url} 
                  alt={image.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-error" style={{ display: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  <small>Failed to load</small>
                </div>
              </div>
              <div className="image-info">
                <div className="image-name">{image.name}</div>
                <div className="image-size">{formatFileSize(image.size)}</div>
                <div className="image-date">{new Date(image.modified).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {showConfirm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', maxWidth: '400px', width: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Confirm Deletion</h3>
            <p style={{ margin: '0 0 24px 0', color: '#666' }}>{confirmMessage}</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowConfirm(false)}
                style={{ padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: deleting ? 'not-allowed' : 'pointer', opacity: deleting ? 0.6 : 1 }}
              >
                {deleting ? 'Deleting...' : 'Delete'}
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

export default UnusedImages;