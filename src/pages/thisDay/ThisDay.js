import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites, closePortal } from '../../redux/slices/favoriteSlice';
import Icons from '../../assets/icons/global/GlobalSVGSelector';
import { BsBookmarkCheckFill, BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs';

import Portal from '../../components/Portal';

import s from './ThisDay.module.scss';

const ThisDay = () => {
  const { openPortal, items, deleteCity } = useSelector((state) => state.favorites);
  const { itemsWeather } = useSelector((state) => state.getWeather);
  const temp = Object.keys(itemsWeather).length > 0 ? Math.round(itemsWeather.main.temp) : null;

  const dispatch = useDispatch();

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
          <div className={s.degree}>{temp}°</div>
          <div className={s.today}>Сегодня</div>
        </div>
        <div className={s.icon}>
          <Icons id="13n" />
        </div>
      </div>
      <div className={s.time}>Время: 21:54</div>
      <div className={s.bottom__block_wrapper}>
        <div className={s.city}>Город: {itemsWeather.name}</div>
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
