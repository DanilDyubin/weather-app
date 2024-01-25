import s from './Tabs.module.scss';

const Tabs = () => {
  const tabs = [{ value: 'На неделю' }, { value: 'На 10 дней' }];

  return (
    <div className={s.tabs}>
      {tabs.map((item, i) => (
        <div key={i} className={s.tab}>
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
