import ThisDayInfoItem from './ThisDayInfoItem';
import s from './ThisDayInfo.module.scss';

const dataStatistics = [
  {
    icon_id: 'temp',
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное',
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков',
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер',
  },
];

const ThisDayInfo = () => {
  return (
    <section className={s.this_day_info}>
      <ul className="this_day_info__list">
        {dataStatistics.map((item) => (
          <ThisDayInfoItem key={item.icon_id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ThisDayInfo;
