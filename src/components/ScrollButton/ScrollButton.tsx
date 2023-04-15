import { RxDoubleArrowUp } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import style from './ScrollButton.module.scss';

export const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollPosition > 1500);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log('render');
  return <>{showButton && <RxDoubleArrowUp className={style.scrollBtn} onClick={handleClick} />}</>;
};
