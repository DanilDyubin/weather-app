import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
  'getWeather/fetchWeather',

  async (city) => {
    // const { city } = params;
    // console.log(city);
    const apiKey = '0f2792faa0efb5a166998675f96bb975';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`,
    );

    // return await response.json();
    const data = await response.json();
    return data;
  },
);

const initialState = {
  city: 'Москва',
  itemsWeather: [],
  weatherLoadingStatus: '',
};

const getWeatherSlice = createSlice({
  name: 'getWeather',
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemsWeather = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
      //   console.log(state.city);
    },
  },
  extraReducers: (builder) => [
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherLoadingStatus = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherLoadingStatus = 'loaded';
        state.itemsWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.weatherLoadingStatus = 'error';
      }),
  ],
});

export const { setCity } = getWeatherSlice.actions;
export default getWeatherSlice.reducer;
