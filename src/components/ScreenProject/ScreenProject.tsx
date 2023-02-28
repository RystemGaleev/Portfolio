import style from './ScreenProject.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ScreenProject = ({ screen, index }: any) => {
  const [zoom, setZoom] = useState(false);

  return (
    <motion.div className={zoom ? `${style.overlay}` : `${style.wrapper}`}>
      <motion.img
        className={
          zoom
            ? `${style.zooming} ${style.img}`
            : `${style.normal} ${style.img}`
        }
        onTap={() => setZoom(!zoom)}
        src={screen}
        alt={`Screen${index}`}
      />
    </motion.div>
  );
};
