import axios from 'axios';

const API_URL = 'https://661389d053b0d5d80f6799e5.mockapi.io/test'; 

export const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createData = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateData = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteData = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
