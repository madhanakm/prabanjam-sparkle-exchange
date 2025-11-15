import axios from 'axios';

const API_BASE_URL = 'https://backend.prabanjamjewellery.com/api';
const API_KEY = 'prabanjam_api_key_2024';

// Create axios instance with default config
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests when available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  console.log('🔐 [API DEBUG] Token from localStorage:', token ? 'Present' : 'Missing');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('🔐 [API DEBUG] Authorization header set');
  } else {
    console.warn('⚠️ [API DEBUG] No token found in localStorage');
  }
  return config;
});

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('✅ [API DEBUG] Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ [API DEBUG] Error:', error.response?.status, error.config?.url);
    if (error.response?.status === 401) {
      console.error('❌ [API DEBUG] 401 Unauthorized - Token may be invalid or missing');
    }
    return Promise.reject(error);
  }
);

// Debug function to check token status
export const debugToken = () => {
  const token = localStorage.getItem('adminToken');
  console.log('🔍 [TOKEN DEBUG] Token in localStorage:', token);
  return token;
};

export { API_BASE_URL, API_KEY };