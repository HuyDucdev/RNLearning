import { configureStore } from '@reduxjs/toolkit'
import fetchDataReducer from './slices/fetchDataSlice'

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
  },
})

 