// store.js

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducer'; // Đảm bảo đường dẫn đúng

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
