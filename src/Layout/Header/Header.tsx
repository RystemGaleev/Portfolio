import { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarMobile } from '../../components/Navbar/NavbarMobile';
import { BurgerMenu } from '../../components/UI/BurgerMenu/BurgerMenu';
import { AiOutlineClose } from 'react-icons/ai';
import style from './Header.module.scss';
import { LanguageToggler } from '../../components/LanguageToggler/LanguageToggler';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleMenu} className={isOpen ? `${style.overlay} ${style.active}` : `${style.overlay}`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={isOpen ? `${style.overlay_content} ${style.active}` : `${style.overlay_content}`}
        >
          <AiOutlineClose onClick={toggleMenu} size={30} className={style.close_icon} />
          <NavbarMobile />
        </div>
      </div>

      <div className={style.header}>
        <div className="container">
          <div className={style.wrapper}>
            <Navbar />
            <LanguageToggler />
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
};
