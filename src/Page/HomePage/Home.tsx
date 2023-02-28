import { useState } from 'react';
import { TagSphere } from 'react-tag-sphere';
import { MButton } from '../../components/UI/UiButton/UiButton';
import { Layout } from '../../Layout/Layout';
import {
  AnimationRightX,
  AnimationLeftX,
  AnimationContainer,
  PageTranstition,
  AnimationPage,
  AnimationRotate,
} from '../../Animation/Animation';
import { motion } from 'framer-motion';

import './Home.scss';

const tags = [
  'HTML',
  'CSS',
  'BEM',
  'Cross-browser layout',
  'JavaScript',
  'TypeScript',
  'React',
  'React-Router',
  'Framer-motion',
  'SCSS',
  'Hook-form',
  'Redux-toolkit',
  'i18next',
  'Rest Api',
  'Gulp',
  'Vite',
  'GitHub',
  'Git',
  'Figma',
  'Adaptive layout',
];

export const Home = () => {
  const [skills, setSkills] = useState(false);

  const toggleStack = () => {
    setSkills((prev) => !prev);
  };
  return (
    <Layout>
      <motion.main
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className="main"
      >
        <div className="container">
          <div className="main__wrapper">
            <motion.div
              className="main__block"
              variants={AnimationContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={AnimationLeftX} className="subtitle">
                Hello! <span>I am</span>
              </motion.div>
              <motion.h1
                variants={AnimationRightX}
                className="main__block-title"
              >
                Rustem
              </motion.h1>
              <motion.p variants={AnimationRotate} className="main__block-text">
                Front - end developer
              </motion.p>
              <motion.div
                variants={AnimationRightX}
                className="main__block-descr"
              >
                This is my portfolio , where you can view my projects , learn
                about me and my technology stack
              </motion.div>
              <div className="main__block-button">
                <MButton onClick={toggleStack} variant="primary" size="lg">
                  {skills ? 'Hide stack' : 'View stack'}
                </MButton>
              </div>
            </motion.div>
            <div className="main__skills">
              {skills && skills ? (
                <TagSphere
                  style={{
                    color: 'var(--accent-color)',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: ' JetBrains Mono',
                  }}
                  fullHeight={true}
                  fullWidth={true}
                  tags={tags}
                />
              ) : (
                <div className="main__contacts"></div>
              )}
            </div>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
};
