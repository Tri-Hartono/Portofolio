'use client';
import React, { useEffect, useRef } from 'react';
import Experience from './experience';
import Education from './education';
import { useAnimation, useInView, motion } from 'framer-motion';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [animation, isInView]);

  const variantsEducation = {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
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
    <div ref={ref} id="about" className="">
      <h1 className="flex flex-col leading-4 py-4">
        About <span>Me</span>
      </h1>
      <div className="w-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
        <motion.div className="w-full" animate={animation} initial="hidden" variants={variantsEducation}>
          <Education />
        </motion.div>
        <motion.div className="w-full" animate={animation} initial="hidden" variants={variantsExperience}>
          <Experience />
        </motion.div>
      </div>
    </div>
  );
}
