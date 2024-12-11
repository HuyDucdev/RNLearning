import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk(
  'users/fetchData',
  async () => {
    const response = await axios.get('https://661389d053b0d5d80f6799e5.mockapi.io/user')
    return response.data
  },
)


export const deleteData = createAsyncThunk(
  'users/deleteData',
  async (id) => {
    await axios.delete(`https://661389d053b0d5d80f6799e5.mockapi.io/user/${id}`)
    return id // Return the ID of the deleted item
  },
)

export const createUser = createAsyncThunk(
  'users/createUser',
  async (newUser) => {
    const response = await axios.post('https://661389d053b0d5d80f6799e5.mockapi.io/user', newUser);
    return response.data; // Trả về dữ liệu user mới
  }
);

export const updateTodo = createAsyncThunk(
  'users/updateTodo',
  async ({ userId, todoIndex, updatedTodo }) => {
    const response = await axios.get(`https://661389d053b0d5d80f6799e5.mockapi.io/user/${userId}`);
    const user = response.data;

    // Cập nhật todo trong danh sách todo
    user.todo[todoIndex] = updatedTodo;

    // Gửi cập nhật lên API
    const updateResponse = await axios.put(`https://661389d053b0d5d80f6799e5.mockapi.io/user/${userId}`, user);
    return updateResponse.data;
  }
);


const initialState = {
  listData: [],
  status: 'idle', 
  error: null,
}

const fetchDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading' 
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded' 
        state.listData = action.payload 
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed' 
        state.error = action.error.message 
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.listData = state.listData.filter(item => item.id !== action.payload)
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.listData.push(action.payload); // Thêm user mới vào danh sách
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
      const updatedUser = action.payload;
      const index = state.listData.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.listData[index] = updatedUser;
      }
    })
  }
})

export default fetchDataSlice.reducer