import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const fetchInfo = async () => {
  const res = await axios.get(`${API_BASE}/info`);
  return res.data;
};