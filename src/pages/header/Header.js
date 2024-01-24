import Icons from '../../assets/icons/global/GlobalSVGSelector';
import Select from 'react-select';

import s from './Header.module.scss';

const options = [
  { value: 'Msc', label: 'Москва' },
  { value: 'Mts', label: 'Мытищи' },
  { value: 'Spb', label: 'Санкт-Петербург' },
];

const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: '194px',
    height: '37px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
  }),
};

const Header = () => {
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
            <input type="checkbox" className={s.input} />
            <span className={s.slider}></span>
          </label>
        </div>
        <Select options={options} defaultValue={options[0]} styles={selectStyles} />
      </div>
    </header>
  );
};

export default Header;
