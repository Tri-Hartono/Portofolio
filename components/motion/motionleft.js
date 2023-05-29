import React, { useEffect } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

export default function MotionLeft({ children, animation }) {
  const variantsEducation = {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div className="w-full" animate={animation} initial="hidden" variants={variantsEducation}>
      {children}
    </motion.div>
  );
}
