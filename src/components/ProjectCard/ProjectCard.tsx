import style from './ProjectCard.module.scss';
import { UiButton } from '../UI/UiButton/UiButton';
import { motion } from 'framer-motion';
import { IProjectProps } from '../../Interface';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = forwardRef(
  ({ id, title, image }: IProjectProps, ref: any) => {
    const navigate = useNavigate();
    const redirectToProject = () => {
      navigate(`/portfolio/${id}`);
    };

    return (
      <motion.div ref={ref} whileHover={{ scale: 1.1 }} className={style.card}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={style.block}>
          <div className={style.title}>{title}</div>
          <UiButton onClick={redirectToProject} variant="outlined" size="md">
            View project
          </UiButton>
        </div>
      </motion.div>
    );
  },
);

export const MProjectCard = motion(ProjectCard);
