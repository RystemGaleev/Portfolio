import useMediaQuery from '../../hook/useMediaQuery';
import style from './Markup.module.scss';

export const Markup = () => {
  const matches = useMediaQuery('(max-width: 576px)');
  const num = Array.from(matches ? { length: 35 } : { length: 49 }, (v, k) => k + 1);

  return (
    <ul className={style.markup}>
      {num.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
