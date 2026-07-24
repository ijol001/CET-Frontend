import type { Variants, Transition } from "motion/react";

export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      // delayChildren: 0.05,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
  mass: 0.8,
};
