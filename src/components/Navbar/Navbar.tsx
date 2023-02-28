import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
import style from './Navbar.module.scss';

export const NavigationLink = [
  { path: '/', title: '_home' },
  { path: '/about', title: '_about me' },
  { path: '/projects', title: '_projects' },
];

export const Navbar = () => {
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
