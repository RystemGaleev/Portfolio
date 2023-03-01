import { useTranslation } from 'react-i18next';
import { Markup } from '../../components/Markup/Markup';
import { MFolder } from '../../components/Folder/Folder';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';

import {
  AnimationContainerLong,
  AnimationContainerFast,
  AnimationScale,
  AnimationScaleLeftX,
  AnimationPage,
  PageTranstition,
} from '../../Animation/Animation';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaFolderOpen, FaReact } from 'react-icons/fa';
import { SiPrettier, SiGit, SiNodedotjs, SiVite, SiReact } from 'react-icons/si';
import './About.scss';

const folderList = [
  {
    icon: <FaFolderOpen size={22} className="icon-folder " />,
    label: 'home',
    arrow: true,
  },
  {
    icon: <FaFolderOpen size={22} color="var(--accent-color)" />,
    label: 'about',
    rotate: true,
    file: <FaReact />,
    filteTitle: 'About.tsx',
    arrow: true,
  },
  { icon: <FaFolderOpen size={22} />, label: 'projects', arrow: true },
  { icon: <SiPrettier size={22} />, label: '.prettierrc', arrow: false },
  { icon: <SiNodedotjs size={22} />, label: 'package.json', arrow: false },
  { icon: <SiGit size={22} />, label: '.gitignore ', arrow: false },
  { icon: <SiVite size={22} />, label: ' vite.config.ts', arrow: false },
];

export const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <motion.section
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className="about"
      >
        <div className="container">
          <div className="about__wrapper">
            <div className="about__column-left">
              <h2 className="about__title">
                <MdOutlineKeyboardArrowDown size={24} />
                src &gt; pages &gt; about
              </h2>
              <motion.div variants={AnimationContainerFast} initial="hidden" animate="show" className="about__folders">
                {folderList.map((item, index) => (
                  <MFolder variants={AnimationScaleLeftX} custom={index} key={item.label} {...item} />
                ))}
              </motion.div>
            </div>
            <div className="about__column-right">
              <div className="about__header">
                <div className="about__header-title">
                  <SiReact size={22} />
                  About.tsx
                </div>
              </div>

              <div className="about__block-descr">
                <Markup />
                <div className="about__column">
                  <motion.div className="about__column-descr" variants={AnimationContainerLong} initial="hidden" animate="show">
                    /* <br />
                    <motion.span variants={AnimationScale}>&lt;h2&gt; About me &lt;/h2&gt;</motion.span>
                    {t('about.aboutDescription')}
                    <motion.span variants={AnimationScale}>&lt;h2&gt; Hard skills &lt;/h2&gt;</motion.span>
                    HTML, CSS, BEM, SCSS ,Cross-browser layout, Adaptive layout, JavaScript , TypeScript, React, Redux-toolkit,
                    React-Router, Framer-motion, Hook-form, i18next, Rest Api, Gulp, Vite, GitHub, Git, Figma, npm, yarn and other
                    library
                    <motion.span variants={AnimationScale}>&lt;h2&gt; Soft skills &lt;/h2&gt;</motion.span>
                    {t('about.softSkills')}
                    <br /> */
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
