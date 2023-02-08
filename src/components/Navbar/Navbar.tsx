import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.link_active : style.link
        }
        to="/"
      >
        _home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.link_active : style.link
        }
        to="/about"
      >
        _about me
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.link_active : style.link
        }
        to="/projects"
      >
        _projects
      </NavLink>
    </div>
  );
};
