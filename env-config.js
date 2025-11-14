// ========================================
// SINGLE POINT URL CONFIGURATION
// ========================================
// Change ONLY this line to switch environments:

const ENVIRONMENT = 'production'; // 'development' or 'production'

// ========================================

const environments = {
  development: {
    // Frontend & Admin Panel
    API_BASE_URL: 'http://localhost:5001/api',
    API_KEY: 'prabanjam_api_key_2024',
    
    // Backend Database
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASSWORD: '',
    DB_NAME: 'prabanjam_db',
    BASE_URL: 'http://localhost:5001',
    JWT_SECRET: 'your_jwt_secret_key_here',
    PORT: 5001
  },
  
  production: {
    // Frontend & Admin Panel
    API_BASE_URL: 'https://backend.prabanjamjewellery.com/api',
    API_KEY: 'prabanjam_api_key_2024',
    
    // Backend Database
    DB_HOST: 'localhost',
    DB_USER: 'prabanjam_api_db',
    DB_PASSWORD: 'prabanjam_api_db',
    DB_NAME: 'prabanjam_api_db',
    BASE_URL: 'https://backend.prabanjamjewellery.com',
    JWT_SECRET: 'your_jwt_secret_key_here',
    PORT: 5001
  }
};

module.exports = environments[ENVIRONMENT];