import { useAppDispatch, useAppSelector } from '../../hook/reduxHook';
import { useEffect } from 'react';
import { fetchProjects } from '../../Redux/ProjectsSlice';

import {
  AnimationPage,
  PageTranstition,
  AnimationProjectContainer,
  AnimationProjectCardLeft,
  AnimationProjectCardRight,
} from '../../Animation/Animation';
import { motion } from 'framer-motion';

import { MProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Layout } from '../../Layout/Layout';
import './Projects.scss';

export const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Layout>
      <motion.section
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className="projects"
      >
        <div className="container">
          <motion.div
            className="projects__wrapper"
            variants={AnimationProjectContainer}
            initial="hidden"
            animate="show"
          >
            {projects.map((item, index) => (
              <MProjectCard
                variants={
                  index % 2 === 0
                    ? AnimationProjectCardLeft
                    : AnimationProjectCardRight
                }
                custom={index}
                key={item.id}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};
