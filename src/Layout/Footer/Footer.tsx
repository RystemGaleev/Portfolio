import { FaTelegram, FaGithub } from 'react-icons/fa';
import style from './Footer.module.scss';

export const socialLinks = [
  { href: 'https://t.me/Rystezy', icon: <FaTelegram size={30} /> },
  { href: 'https://github.com/RystemGaleev', icon: <FaGithub size={30} /> },
  { href: 'mailto:rystezy@list.ru', label: 'rystezy@list.ru' },
];

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.wrapper}>
          {socialLinks.map(({ href, icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={style.link}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
