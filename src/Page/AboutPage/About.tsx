import { Markup } from '../../components/Markup/Markup';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import {
  AnimationContainerLong,
  AnimationScale,
} from '../../Animation/Animation';
import './About.scss';

export const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
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
                companies on outstaff <br />* After that, I started regularly
                studying react, redux-toolkit, typescript, various libraries and
                animations, and improving my skills
                <motion.span variants={AnimationScale}>
                  &lt;h2&gt; Hard skills &lt;/h2&gt;
                </motion.span>
                HTML, CSS, BEM, SCSS ,Cross-browser layout, Adaptive layout,
                JavaScript , TypeScript, React, Redux-toolkit, React-Router,
                Framer-motion, Hook-form, i18next, Rest Api, Gulp, Vite, GitHub,
                Git, Figma, npm, yarn and other library
                <motion.span variants={AnimationScale}>
                  &lt;h2&gt; Soft skills &lt;/h2&gt;
                </motion.span>
                Organization and planning of working hours,analytical thinking,
                ability to learn and develop,communication skills, teamwork,
                stress-resistant
                <br /> */
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
