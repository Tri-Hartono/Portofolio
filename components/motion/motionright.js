import React, { useEffect } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

export default function MotionRight({ children, animation }) {
  const variantsExperience = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div className="w-full" animate={animation} initial="hidden" variants={variantsExperience}>
      {children}
    </motion.div>
  );
}
