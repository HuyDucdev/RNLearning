// Main.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store'; // Đảm bảo import đúng đường dẫn tới store
import App from './App';

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
