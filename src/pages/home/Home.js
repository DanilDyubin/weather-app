import ThisDay from '../thisDay/ThisDay';
import ThisDayInfo from '../thisDayInfo/ThisDayInfo';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import s from './Home.module.scss';

const Home = () => {
  //   const [town, setTown] = useState([]);

  //   const getWeatherApi = async () => {
  //     const apiKey = '0f2792faa0efb5a166998675f96bb975';
  //     const city = 'Торонто';

  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`,
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setTown(data));
  //   };

  //   useEffect(() => {
  //     getWeatherApi();
  //   }, []);

  return (
    <section className={s.home}>
      <ThisDay />
      {/* {Object.keys(town).length > 0 ? <div>{town.main.temp}</div> : null} */}
      <ThisDayInfo />
    </section>
  );
};

export default Home;
