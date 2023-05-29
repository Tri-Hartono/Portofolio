'use client';
import React, { useEffect, useRef } from 'react';
import Experience from './experience';
import Education from './education';
import { useAnimation, useInView, motion } from 'framer-motion';
import Tittle from '../../components/title';
import MotionLeft from '../../components/motion/motionleft';
import MotionRight from '../../components/motion/motionright';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [animation, isInView]);

  // const variantsEducation = {
  //   hidden: { x: -100 },
  //   visible: {
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //     },
  //   },
  // };
  // const variantsExperience = {
  //   hidden: { x: 100 },
  //   visible: {
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };
  return (
    <div ref={ref} id="about" className="">
      <Tittle titleSatu="About" titleDua="Me" />
      <div className="w-auto p-2 flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
        <MotionLeft animation={animation}>
          <Education />
        </MotionLeft>
        <MotionRight animation={animation}>
          <Experience />
        </MotionRight>
      </div>
    </div>
  );
}
