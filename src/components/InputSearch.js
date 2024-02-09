import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCity } from '../redux/slices/getWeatherSlice';

const InputSearch = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    dispatch(setCity(value));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="search" value={value} onChange={onChangeValue} />
      <button type="submit"></button>
    </form>
  );
};

export default InputSearch;
