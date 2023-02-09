import {
  AnimationPage,
  PageTranstition,
  AnimationProjectContainer,
  AnimationProjectCardLeft,
  AnimationProjectCardRight,
} from '../../Animation/Animation';
import { MProjectCard } from '../../components/ProjectCard/ProjectCard';
import { PROJECTS } from '../../data';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import './Projects.scss';

export const Projects = () => {
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
            {PROJECTS.map((item, index) => (
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
