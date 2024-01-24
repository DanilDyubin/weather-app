import Icons from '../../assets/icons/global/GlobalSVGSelector';

import s from './ThisDay.module.scss';

const ThisDay = () => {
  return (
    <section className={s.thisDay}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.degree}>20°</div>
          <div className={s.today}>Сегодня</div>
        </div>
        <Icons id="icon-sun" />
      </div>
      <div className={s.time}>Время: 21:54</div>
      <div className={s.city}>Город: Санкт-Петербург</div>
    </section>
  );
};

export default ThisDay;
