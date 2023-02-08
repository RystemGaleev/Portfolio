import { FaTelegram, FaGithub } from 'react-icons/fa';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.wrapper}>
          <a
            href="https://t.me/Rystezy"
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
          >
            <FaTelegram size={30} />
          </a>
          <a
            href="https://github.com/RystemGaleev"
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:2starcraft@list.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};
