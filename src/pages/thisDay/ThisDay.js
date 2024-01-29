import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/slices/favoriteSlice';
import Icons from '../../assets/icons/global/GlobalSVGSelector';

import s from './ThisDay.module.scss';

const ThisDay = () => {
  const favorite = useSelector((state) => state.favorites);
  console.log(favorite);
  const dispatch = useDispatch();

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
      <div className={s.time}>Время: 21:54</div>
      <div className={s.bottom__block_wrapper}>
        <div className={s.city}>Город: Санкт-Петербург</div>
        <div className={s.heart} onClick={() => dispatch(toggleFavorites('Снакт-Петербург'))}></div>
      </div>
    </section>
  );
};

export default ThisDay;
