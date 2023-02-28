import { NavLink } from 'react-router-dom';
import style from './NavbarMobile.module.scss';
import { NavigationLink } from './Navbar';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';

export const NavbarMobile = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        {NavigationLink.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? style.link_active : style.link)}>
            {link.title}
          </NavLink>
        ))}
      </div>

      <ThemeSwitch />
    </nav>
  );
};
