import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { useEffect } from 'react';
import { fetchProjects, STATUSES } from '../../Redux/ProjectsSlice';
import { Loader } from '../../components/UI/Loader/Loader';
import { ErrorMessage } from '../../components/UI/ErrorMessage/ErrorMessage';

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
  const { projects, status } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <Loader />;
  }

  if (status === STATUSES.ERROR) {
    return <ErrorMessage />;
  }

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
          <motion.div className="projects__wrapper" variants={AnimationProjectContainer} initial="hidden" animate="show">
            {projects.map((item, index) => (
              <MProjectCard
                variants={index % 2 === 0 ? AnimationProjectCardLeft : AnimationProjectCardRight}
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
