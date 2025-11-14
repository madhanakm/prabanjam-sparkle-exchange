// Single point configuration for all URLs
const CONFIG = {
  // Change this to switch between environments
  ENVIRONMENT: 'production', // 'development' or 'production'
  
  development: {
    API_BASE_URL: 'http://localhost:5001/api',
    API_KEY: 'prabanjam_api_key_2024',
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASSWORD: '',
    DB_NAME: 'prabanjam_db',
    BASE_URL: 'http://localhost:5001'
  },
  
  production: {
    API_BASE_URL: 'https://backend.prabanjamjewellery.com/api',
    API_KEY: 'prabanjam_api_key_2024',
    DB_HOST: 'localhost',
    DB_USER: 'prabanjam_api_db',
    DB_PASSWORD: 'prabanjam_api_db',
    DB_NAME: 'prabanjam_api_db',
    BASE_URL: 'https://backend.prabanjamjewellery.com'
  }
};

// Export current environment config
const currentConfig = CONFIG[CONFIG.ENVIRONMENT];

module.exports = currentConfig;