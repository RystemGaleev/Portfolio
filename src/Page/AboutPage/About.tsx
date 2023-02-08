import { Markup } from '../../components/Markup/Markup';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import {
  AnimationContainerLong,
  AnimationContainer,
  AnimationScale,
  AnimationScaleLeftX,
} from '../../Animation/Animation';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaFolderOpen, FaReact } from 'react-icons/fa';
import { SiPrettier, SiGit, SiNodedotjs, SiVite } from 'react-icons/si';
import './About.scss';

export const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__column-left">
              <h2 className="about__title">
                <MdOutlineKeyboardArrowDown size={24} />
                src &gt; pages &gt; about
              </h2>
              <motion.div
                variants={AnimationContainer}
                initial="hidden"
                animate="show"
                className="about__folders"
              >
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder"
                >
                  <MdOutlineKeyboardArrowDown
                    className="icon-arrow rotate"
                    size={24}
                  />
                  <FaFolderOpen size={22} className="icon-folder " />
                  home
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder-active"
                >
                  <motion.div
                    variants={AnimationScaleLeftX}
                    className="about__folder"
                  >
                    <MdOutlineKeyboardArrowDown
                      className="icon-arrow"
                      size={24}
                    />
                    <FaFolderOpen size={22} className="icon-folder " />
                    about
                  </motion.div>
                  <div className="about__folder-text">
                    <FaReact size={20} />
                    About.tsx
                  </div>
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder"
                >
                  <MdOutlineKeyboardArrowDown
                    className="icon-arrow rotate"
                    size={24}
                  />
                  <FaFolderOpen size={22} className="icon-folder " />
                  stack
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder"
                >
                  <MdOutlineKeyboardArrowDown
                    className="icon-arrow rotate"
                    size={24}
                  />
                  <FaFolderOpen size={22} className="icon-folder " />
                  projects
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder left"
                >
                  <SiPrettier size={20} className="icon-folder " />
                  .prettierrc
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder left"
                >
                  <SiGit size={20} className="icon-folder " />
                  .gitignore
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder left"
                >
                  <SiNodedotjs size={20} className="icon-folder " />
                  package.json
                </motion.div>
                <motion.div
                  variants={AnimationScaleLeftX}
                  className="about__folder left"
                >
                  <SiVite size={20} className="icon-folder " />
                  vite.config.ts
                </motion.div>
              </motion.div>
            </div>
            <div className="about__column-right">
              <div className="about__header"></div>

              <div className="about__block-descr">
                <Markup />
                <div className="about__column">
                  <motion.div
                    className="about__column-descr"
                    variants={AnimationContainerLong}
                    initial="hidden"
                    animate="show"
                  >
                    /* <br />
                    <motion.span variants={AnimationScale}>
                      &lt;h2&gt; About me &lt;/h2&gt;
                    </motion.span>
                    * My name is Rustem. I am from the Republic of Tatarstan -
                    Russia, the city of Kazan <br />
                    * Mastered html css js well and continued to work as a
                    freelancer, after which he began collaborating with several
                    companies on outstaff <br />* After that, I started
                    regularly studying react, redux-toolkit, typescript, various
                    libraries and animations, and improving my skills
                    <motion.span variants={AnimationScale}>
                      &lt;h2&gt; Hard skills &lt;/h2&gt;
                    </motion.span>
                    HTML, CSS, BEM, SCSS ,Cross-browser layout, Adaptive layout,
                    JavaScript , TypeScript, React, Redux-toolkit, React-Router,
                    Framer-motion, Hook-form, i18next, Rest Api, Gulp, Vite,
                    GitHub, Git, Figma, npm, yarn and other library
                    <motion.span variants={AnimationScale}>
                      &lt;h2&gt; Soft skills &lt;/h2&gt;
                    </motion.span>
                    Organization and planning of working hours, analytical
                    thinking, ability to learn and develop, communication
                    skills, teamwork, stress-resistant
                    <br /> */
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
