import { NavLink } from 'react-router-dom';
import style from './NavbarMobile.module.scss';
import { NavigationLink } from './Navbar';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
import { socialLinks } from '../../Layout/Footer/Footer';

export const NavbarMobile = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navigation}>
        <div className={style.title}>Navigate</div>

        {NavigationLink.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? style.link_active : style.link)}>
            {link.title}
          </NavLink>
        ))}
      </div>
      <div className={style.social}>
        <div className={style.title}>Social</div>
        {socialLinks.map(({ href, icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={style.social_link}>
            {icon} {label}
          </a>
        ))}
      </div>
      <ThemeSwitch />
    </nav>
  );
};
