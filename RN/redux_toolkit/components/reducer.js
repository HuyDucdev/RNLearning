// reducer.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createDataSuccess(state, action) {
      state.items.push(action.payload);
    },
    deleteDataSuccess(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateDataSuccess(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

// Xuất các action
export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  createDataSuccess,
  deleteDataSuccess,
  updateDataSuccess,
} = dataSlice.actions;

// Xuất reducer
export default dataSlice.reducer;
