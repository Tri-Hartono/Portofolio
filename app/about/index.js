'use client';
import React, { useEffect, useRef } from 'react';
import Experience from './experience';
import Education from './education';
import { useAnimation, useInView } from 'framer-motion';
import Tittle from '../../components/title';
import MotionLeft from '../../components/motion/motionleft';
import MotionRight from '../../components/motion/motionright';
import Box from '../../components/Svg/box';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [animation, isInView]);

  return (
    <div ref={ref} id="about" className="relative">
      <Tittle titleSatu="About" titleDua="Me" />
      <div className="w-auto p-2 flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
        <MotionLeft animation={animation}>
          <Education />
        </MotionLeft>
        <MotionRight animation={animation}>
          <Experience />
        </MotionRight>
      </div>
      <div className="absolute z-0 -bottom-1/4 opacity-5  -left-1/4 w-full   ">
        <div className="w-full md:w-3/4 -top-4 right-0 rounded-3xl z-10 rotate-6 h-full bg-lightColors dark:bg-darkColors absolute"></div>
        <Box width={800} height={500} />
      </div>
    </div>
  );
}
