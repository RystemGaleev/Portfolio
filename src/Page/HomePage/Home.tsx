import { Layout } from '../../Layout/Layout';
import { TagSphere } from 'react-tag-sphere';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { useState } from 'react';

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
      <main className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__block">
              <div className="subtitle">
                Hello! <span>I am</span>
              </div>
              <h1 className="main__block-title">Rustem </h1>
              <p className="main__block-text">Front - end developer</p>
              <div className="main__block-descr">
                This is my portfolio , where you can view my projects , learn
                about me and my technology stack
              </div>
              <div className="main__block-button">
                <UiButton onClick={toggleStack} variant="primary" size="lg">
                  {skills ? 'Hide stack' : 'View stack'}
                </UiButton>
              </div>
            </div>
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
                <div className="main__skills-sphere"></div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
