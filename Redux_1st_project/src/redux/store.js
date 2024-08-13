import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterslice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
