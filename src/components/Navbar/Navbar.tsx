import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
import style from './Navbar.module.scss';

export const Navbar = () => {
  const { t } = useTranslation();
  const NavigationLink = [
    { path: '/', title: t('navbar.home') },
    { path: '/about', title: t('navbar.about') },
    { path: '/projects', title: t('navbar.projects') },
  ];
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        {NavigationLink.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? style.link_active : style.link)}>
            {link.title}
          </NavLink>
        ))}
      </div>
      <div className={style.tools}>
        <ThemeSwitch />
        <LanguageToggler />
      </div>
    </nav>
  );
};
