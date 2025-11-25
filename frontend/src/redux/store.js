import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './adminSlice';
import startupReducer from './startupSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    startup: startupReducer,
  },
});

export default store;
