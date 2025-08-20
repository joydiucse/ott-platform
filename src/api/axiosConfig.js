import axios from 'axios';
import { API_URL } from '../utils/GlobalService';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    
    // Add auth token if exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response.data;
  },
  (error) => {
    console.error('❌ Response Interceptor Error:', error);
    
    // Enhanced error information
    const enhancedError = {
      ...error,
      config: error.config,
      response: error.response,
      message: error.message,
      code: error.code
    };
    
    return Promise.reject(enhancedError);
  }
);

export default api;