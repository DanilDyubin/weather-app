import ThisDay from '../thisDay/ThisDay';
import ThisDayInfo from '../thisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

const Home = () => {
  return (
    <section className={s.home}>
      <ThisDay />
      <ThisDayInfo />
    </section>
  );
};

export default Home;
