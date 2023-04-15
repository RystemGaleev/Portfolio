import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../Layout/Layout';
import { ScreenProject } from '../ScreenProject/ScreenProject';
import { UiButton } from '../UI/UiButton/UiButton';
import { ErrorMessage } from '../UI/ErrorMessage/ErrorMessage';
import { Loader } from '../UI/Loader/Loader';

import { motion } from 'framer-motion';
import { PageTranstition, AnimationPage } from '../../Animation/Animation';
import { IProjectProps } from '../../types';
import style from './SingleProject.module.scss';

export const SingleProject = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
  });

  const [singleProject, setSingleProject] = useState<IProjectProps | null>(null);
  let { id } = useParams();

  useEffect(() => {
    setStatus({ isLoading: true, isError: false });

    try {
      const fetchProjects = async () => {
        const res = await fetch(import.meta.env.VITE_PROJECTS_API + `/${id}`);
        if (!res.ok) {
          setStatus({ isLoading: false, isError: true });
        }
        const data = await res.json();
        setSingleProject(data);
      };
      fetchProjects();
    } catch (error) {
      console.error(error);
      setStatus({ isLoading: false, isError: true });
    }
    setStatus({ isLoading: false, isError: false });
  }, []);

  if (!singleProject) return null;
  if (status.isError) return <ErrorMessage />;
  if (status.isLoading) return <Loader />;

  return (
    <Layout>
      <motion.section
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className={style.project}
      >
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.column_left}>
              <div className={style.title}>{language === 'ru' ? singleProject.titleRu : singleProject.titleEn}</div>
              <div className={style.links}>
                <a href={singleProject.link} target="_blank" rel="noopener noreferrer" className={style.link}>
                  GitHub
                </a>
                {singleProject.site && (
                  <a href={singleProject.site} target="_blank" rel="noopener noreferrer" className={style.link}>
                    Visit site
                  </a>
                )}
              </div>
              <div className={style.descr}>{language === 'ru' ? singleProject.descrRu : singleProject.descrEn}</div>
              <UiButton onClick={() => navigate(-1)} size="sm" variant="outlined">
                {t('buttons.backBtn')}
              </UiButton>
            </div>
            <div className={style.column_right}>
              {singleProject.screens &&
                singleProject.screens.map((screen, index) => <ScreenProject key={screen} screen={screen} index={index} />)}
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
