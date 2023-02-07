import style from './Header.module.scss';
import { Navbar } from '../../components/Navbar/Navbar';
import { FaTelegram } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

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
          <div className={style.tools}>
            <button onClick={toggleTheme} className={style.theme}>
              {theme === 'light' ? (
                <div className={style.theme_block}>
                  <CiDark size={30} /> <p>Dark</p>
                </div>
              ) : (
                <div className={style.theme_block}>
                  <CiLight size={30} /> <p>Light</p>
                </div>
              )}
            </button>
            <a
              href="https://t.me/Rystezy"
              target="_blank"
              rel="noopener noreferrer"
              className={style.telegram}
            >
              Telegram
              <FaTelegram className={style.icon} size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
