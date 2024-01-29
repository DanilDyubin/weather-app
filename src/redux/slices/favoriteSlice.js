import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // addToFavorites: (state, action) => { // 1й вариант проверки и добавления
    //   const city = action.payload;
    //   if(state.some(obj => obj.id === city.id)) return;
    //   state.push(city);
    // }
    toggleFavorites: (state, action) => {
      // const isExists = state.some((obj) => obj.id === action.payload.id);
      // if (isExists) {
      //   const index = state.findIndex((item) => item.id === action.payload.id);
      //   if (index !== -1) {
      //     state.splice(index, 1);
      //   }
      // } else {
      //   state.push(action.payload);
      // }

      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
