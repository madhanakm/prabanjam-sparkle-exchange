import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
const API_KEY = 'prabanjam_api_key_2024';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-API-Key': API_KEY,
    'Content-Type': 'application/json'
  }
});

export const testimonialsAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/testimonials`),
};

export const contactAPI = {
  submit: (data) => api.post('/contact', data),
};

export const investmentAPI = {
  submit: (data) => api.post('/invest', data),
};

export default api;