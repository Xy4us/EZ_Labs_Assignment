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
