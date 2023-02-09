import style from './ProjectCard.module.scss';
import furniture from '../../assets/img/furniture.jpg';
import { UiButton } from '../UI/UiButton/UiButton';
import { motion } from 'framer-motion';
import { IProjectProps } from '../../Interface';
import { forwardRef } from 'react';

export const ProjectCard = forwardRef(
  ({ id, link, title, descr, image }: IProjectProps, ref: any) => {
    return (
      <motion.div
        ref={ref}
        // whileHover={{ scale: 1.1 }}

        className={style.card}
      >
        <div
          className={style.img}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={style.block}>
          <div className={style.title}>{title}</div>
          <UiButton variant="outlined" size="md">
            View project
          </UiButton>
        </div>
      </motion.div>
    );
  },
);

export const MProjectCard = motion(ProjectCard);
