import ThisDay from '../thisDay/ThisDay';
import ThisDayInfo from '../thisDayInfo/ThisDayInfo';

import { useSelector } from 'react-redux';

import s from './Home.module.scss';

const Home = () => {
  const { itemsWeather, weatherLoadingStatus } = useSelector((state) => state.getWeather);
  return (
    <section className={s.home}>
      {weatherLoadingStatus === 'loading' ? (
        <div>Loading</div>
      ) : (
        <ThisDay itemsWeather={itemsWeather} />
      )}
      <ThisDayInfo />
    </section>
  );
};

export default Home;
