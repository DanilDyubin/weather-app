import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openPortal: false,
  items: ['Москва', 'Мытищи', 'Санкт-Петербург'],
  deleteCity: false,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // addToFavorites: (state, action) => { // 1й вариант проверки и добавления
    //   const city = action.payload;
    //   if(state.some(obj => obj.id === city.id)) return;
    //   state.push(city);
    // }
    closePortal: (state) => {
      state.openPortal = false;
    },
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

      const index = state.items.findIndex((item) => item === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.openPortal = true;
        state.deleteCity = true;
      } else {
        state.items.push(action.payload);
        state.openPortal = true;
        state.deleteCity = false;
      }
    },
  },
});

export const { toggleFavorites, closePortal } = favoriteSlice.actions;
export default favoriteSlice.reducer;
