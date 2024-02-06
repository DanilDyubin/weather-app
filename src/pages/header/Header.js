import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCity } from '../../redux/slices/getWeatherSlice';
import Icons from '../../assets/icons/global/GlobalSVGSelector';
import Select from 'react-select';

import s from './Header.module.scss';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const { city, itemsWeather } = useSelector((state) => state.getWeather);
  const dispatch = useDispatch();
  console.log(city);

  const options = [
    // select
    { value: 'Moscow', label: 'Москва' },
    { value: 'Mytishchi', label: 'Мытищи' },
    { value: 'Saint Petersburg', label: 'Санкт Петербург' },
  ];

  const selectStyles = {
    // select
    control: (styles) => ({
      ...styles,
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      backgroundColor: theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme === 'light' ? '#000' : '#fff',
    }),
  };

  const getWeather = () => {
    dispatch(fetchWeather({ city }));
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root');
    const themes = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];

    themes.map((item) => {
      root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
    });

    // root.style.setProperty('--body-background-default', `var(--body-background-${theme})`);
  }, [theme]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Icons id="icon-header" />
        <h1 className={s.title}>REACT WEATHER</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <label className={s.switch}>
            <span className={s.sun}>
              <Icons id="icon-sun" />
            </span>
            <span className={s.moon}>
              <Icons id="icon-moon" />
            </span>
            <input type="checkbox" className={s.input} onClick={onChangeTheme} />
            <span className={s.slider}></span>
          </label>
        </div>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={selectStyles}
          onChange={(obj) => dispatch(setCity(obj.label))}
        />
      </div>
    </header>
  );
};
// dispatch(fetchWeather(obj.label))   console.log(obj.label)
export default Header;
