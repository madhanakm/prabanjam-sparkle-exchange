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
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { API_BASE_URL, API_KEY };