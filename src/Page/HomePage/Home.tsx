import { useState } from 'react';
import useMediaQuery from '../../hook/useMediaQuery';
import { useTranslation } from 'react-i18next';

import { TagSphere } from 'react-tag-sphere';
import { MButton } from '../../components/UI/UiButton/UiButton';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import {
  AnimationRightX,
  AnimationLeftX,
  AnimationContainer,
  PageTranstition,
  AnimationPage,
  AnimationRotate,
} from '../../Animation/Animation';
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
  const matches = useMediaQuery('(max-width: 577px)');
  const { t } = useTranslation();

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
            <motion.div className="main__block" variants={AnimationContainer} initial="hidden" animate="show">
              <motion.div variants={AnimationLeftX} className="main__subtitle">
                {t('main.subtitle')}
              </motion.div>
              <motion.h1 variants={AnimationRightX} className="main__block-title">
                {t('main.name')}
              </motion.h1>

              <motion.p variants={AnimationRotate} className="main__block-text">
                Front end developer
              </motion.p>
              <motion.div variants={AnimationRightX} className="main__block-descr">
                {t('main.description')}
              </motion.div>
              <div className="main__block-button">
                <MButton onClick={toggleStack} variant="primary" size="lg">
                  {skills ? t('main.btnHide') : t('main.btnShow')}
                </MButton>
              </div>
            </motion.div>
            {skills && (
              <div className="main__skills">
                <TagSphere
                  className="main__skills-tag"
                  fullHeight={true}
                  fullWidth={true}
                  tags={tags}
                  radius={matches ? 200 : 280}
                />
              </div>
            )}
          </div>
        </div>
      </motion.main>
    </Layout>
  );
};
