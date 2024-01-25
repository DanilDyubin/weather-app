import Icons from '../../assets/icons/global/GlobalSVGSelector';

import s from './Days.module.scss';

const Card = ({ day, day_info, icon_id, temp_day, temp_night, info }) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.img}>
        <Icons id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};

export default Card;
