import style from './Markup.module.scss';

const num = Array.from({ length: 22 }, (v, k) => k + 1);
export const Markup = () => {
  return (
    <ul className={style.markup}>
      {num.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
