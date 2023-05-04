// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../store/counterSlice';
import App from './App';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
