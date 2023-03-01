import style from './ScreenProject.module.scss';
import { useState } from 'react';

export const ScreenProject = ({ screen, index }: any) => {
  const [zoom, setZoom] = useState(false);

  return (
    <div className={zoom ? `${style.overlay}` : `${style.content}`}>
      <img
        className={zoom ? `${style.zooming} ${style.img}` : `${style.normal} ${style.img}`}
        onClick={() => setZoom(!zoom)}
        src={screen}
        alt={`Screen${index}`}
      />
    </div>
  );
};
