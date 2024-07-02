import axios from 'axios';

// Set up axios instance with base URL and headers
const api = axios.create({
  baseURL: 'http://localhost:3007/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the token to headers
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Fetch gender percentages
export const getGenderPercentages = async () => {
  const response = await api.get('/personnel/gender-percentages');
  return response.data;
};

// Fetch rank percentages
export const getRankPercentages = async () => {
  const response = await api.get('/personnel/percentages');
  return response.data;
};
