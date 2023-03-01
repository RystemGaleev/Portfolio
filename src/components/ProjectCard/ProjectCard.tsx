import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UiButton } from '../UI/UiButton/UiButton';
import { motion } from 'framer-motion';
import { IProjectProps } from '../../Interface';
import style from './ProjectCard.module.scss';

export const ProjectCard = forwardRef<HTMLDivElement, IProjectProps>(({ id, titleRu, titleEn, image }, ref) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const navigate = useNavigate();
  const redirectToProject = () => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.1 }} className={style.card}>
      <div className={style.img} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={style.block}>
        <div className={style.title}>{language === 'en' ? titleEn : titleRu}</div>
        <UiButton onClick={redirectToProject} variant="outlined" size="lg">
          {t('buttons.cardBtn')}
        </UiButton>
      </div>
    </motion.div>
  );
});

export const MProjectCard = motion(ProjectCard);
