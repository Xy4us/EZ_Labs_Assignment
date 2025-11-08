import { Variants } from "framer-motion";

export const circularMotion: Variants = {
  hidden: { rotate: 360 },
  visible: {
    rotate: 0,
    transition: {
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      duration: 12,
    },
  },
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 70, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
}
