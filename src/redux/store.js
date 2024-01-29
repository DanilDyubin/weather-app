import { configureStore } from '@reduxjs/toolkit';
import favorites from './slices/favoriteSlice';

export const store = configureStore({
  reducer: { favorites },
});
