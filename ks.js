// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Get all users
export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Get analytics data
export const fetchAnalytics = async () => {
  const response = await api.get('/analytics');
  return response.data;
};
