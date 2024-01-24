import Icons from '../../assets/icons/indicators/IndicatorsSVG';
import s from './ThisDayInfoItem.module.scss';

const ThisDayInfo = ({ icon_id, name, value }) => {
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <Icons id={icon_id} />
      </div>
      <div className={s.name}>{name}</div>
      <div className={s.value}>{value}</div>
    </div>
  );
};

export default ThisDayInfo;
