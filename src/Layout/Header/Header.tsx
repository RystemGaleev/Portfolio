import style from './Header.module.scss';
import { Navbar } from '../../components/Navbar/Navbar';
import { FaTelegram } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext) || {
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
                onClick={toggleTheme}
              />
              <span className={style.slider}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
