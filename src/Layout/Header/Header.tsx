import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Navbar } from '../../components/Navbar/Navbar';
import style from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: 'default',
    toggleTheme: () => {},
  };

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <Navbar />
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
        </div>
      </div>
    </div>
  );
};
