import style from './ThemeSwitch.module.scss';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: 'default',
    toggleTheme: () => {},
  };
  return (
    <div className={style.toggle_switch}>
      <label>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={theme === 'dark' ? true : false}
          onChange={toggleTheme}
        />
        <span className={style.slider}></span>
      </label>
    </div>
  );
};
