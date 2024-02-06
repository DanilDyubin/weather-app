import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites, closePortal } from '../../redux/slices/favoriteSlice';
import Icons from '../../assets/icons/global/GlobalSVGSelector';
import { BsBookmarkCheckFill, BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs';

import Portal from '../../components/Portal';

import s from './ThisDay.module.scss';
import { combineSlices } from '@reduxjs/toolkit';

const ThisDay = ({ itemsWeather }) => {
  const { openPortal, items, deleteCity } = useSelector((state) => state.favorites);
  console.log(itemsWeather);
  const dispatch = useDispatch();

  //   const getWeatherApi = async () => {
  //     const apiKey = '0f2792faa0efb5a166998675f96bb975';
  //     const responce = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  //     );
  //     const data = await responce.json();
  //     console.log(data);
  //   };

  //   const getWeatherApi = () => {
  //     const apiKey = '0f2792faa0efb5a166998675f96bb975';
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`)
  //       .then((responce) => responce.json())
  //       .then((data) => console.log(data));
  //   };

  useEffect(() => {
    portalClose();
  }, [openPortal]);

  const portalClose = () => {
    if (openPortal) {
      setTimeout(() => dispatch(closePortal()), 3000);
    }
  };

  return (
    <section className={s.thisDay}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.degree}>20°</div>
          <div className={s.today}>Сегодня</div>
        </div>
        <div className={s.icon}>
          <Icons id="sun" />
        </div>
      </div>
      <div className={s.time}>Местное время: 21:54</div>
      <div className={s.bottom__block_wrapper}>
        <div className={s.city}>Город: </div>
        <div
          className={s.custom_checkbox}
          onClick={() => dispatch(toggleFavorites('Санкт-Петербур'))}>
          <input type="checkbox" className={s.checkbox} />
          <BsBookmarkCheckFill className={s.checkbox_icon} />
        </div>
      </div>
      {openPortal && (
        <Portal>
          {/* <div className={s.city_add}>{deleteCity ? 'Город удален' : 'Город добавлен'}</div> */}
          {deleteCity ? (
            <div className={s.city_add}>
              <BsFillXCircleFill />
              <p>Город удален</p>
            </div>
          ) : (
            <div className={s.city_add}>
              <BsCheckCircleFill />
              <p>Город добавлен</p>
            </div>
          )}
        </Portal>
      )}
    </section>
  );
};

export default ThisDay;
