import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/slices/favoriteSlice';
import Icons from '../../assets/icons/global/GlobalSVGSelector';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import Portal from '../../components/Portal';

import s from './ThisDay.module.scss';
import { combineSlices } from '@reduxjs/toolkit';

const ThisDay = () => {
  const favorite = useSelector((state) => state.favorites);
  console.log(favorite);
  const dispatch = useDispatch();

  const city = 'Москва';
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

  const getWeatherApi = () => {
    const apiKey = '0f2792faa0efb5a166998675f96bb975';
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&units=metric&lang=ru&appid=${apiKey}`,
    )
      .then((responce) => responce.json())
      .then((data) => console.log(data));
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
      <div className={s.time} onClick={getWeatherApi}>
        Время: 21:54
      </div>
      <div className={s.bottom__block_wrapper}>
        <div className={s.city}>Город: Санкт-Петербург</div>
        <BsBookmarkHeartFill
          onClick={() => dispatch(toggleFavorites('Снакт-Петербург'))}
          className={s.heart}
        />
      </div>

      <Portal>
        <div className={s.city_message}>Город добавлен в список</div>
      </Portal>
    </section>
  );
};

export default ThisDay;
