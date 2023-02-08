const AnimationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};
const AnimationContainerLong = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const AnimationLeftX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -300 },
};

const AnimationRightX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 300 },
};
const AnimationTopY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -300 },
};
const AnimationBottomY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 300 },
};
const AnimationOpacity = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AnimationScale = {
  show: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export {
  AnimationBottomY,
  AnimationTopY,
  AnimationRightX,
  AnimationLeftX,
  AnimationContainer,
  AnimationOpacity,
  AnimationContainerLong,
  AnimationScale,
};
