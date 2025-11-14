import axios from 'axios';
const config = require('../../../env-config.js');

const API_BASE_URL = config.API_BASE_URL;
const API_KEY = config.API_KEY;

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