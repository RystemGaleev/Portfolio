import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProjectProps } from '../../Interface';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import style from './SingleProject.module.scss';
import { PageTranstition, AnimationPage } from '../../Animation/Animation';
import furniture from '../../assets/img/furniture.jpg';
import test from '../../assets/img/test.jpg';

export const SingleProject = () => {
  const [singleProject, setSingleProject] = useState<IProjectProps | null>(
    null,
  );
  let { id } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(import.meta.env.VITE_PROJECTS_API + `/${id}`);
      const data = await res.json();
      setSingleProject(data);
    };
    fetchProjects();
  }, []);

  console.log(singleProject);

  if (!singleProject) return null;
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
              <div className={style.subtitle}>SPA application</div>
              <div className={style.title}>{singleProject.title}</div>
              <div className={style.links}>
                <a
                  href={singleProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  GitHub
                </a>
                <a
                  href={singleProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  GitPage
                </a>
              </div>
              <div className={style.descr}>{singleProject.descr}</div>
            </div>
            <div className={style.column_right}>
              <div className={style.img}>
                <img src={test} alt="1" />
              </div>
              <div className={style.img}>
                <img src={test} alt="1" />
              </div>
              <div className={style.img}>
                <img src={test} alt="1" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
