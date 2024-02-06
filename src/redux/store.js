import { configureStore } from '@reduxjs/toolkit';
import favorites from './slices/favoriteSlice';
import getWeather from './slices/getWeatherSlice';

export const store = configureStore({
  reducer: { favorites, getWeather },
});
