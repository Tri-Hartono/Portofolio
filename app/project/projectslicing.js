'use client';
import React, { useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CardSlicing } from '../../components/card';
import { SlicingData } from '../../assets/data';
import { useAnimation, useInView, motion } from 'framer-motion';
import MotionRight from '../../components/motion/motionright';
import Tittle from '../../components/title';
export default function ProjectSlicing() {
  const contentRef = useRef(null);
  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 300;
    }
  };

  const isInView = useInView(contentRef);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [animation, isInView]);

  return (
    <div
      className="flex flex-col  justify-center
     relative w-full  gap-4 lg:gap-10"
    >
      <div className="flex justify-between">
        <Tittle titleSatu="Slicing" titleDua="Design" />
        {/* <h2> More</h2> */}
      </div>
      <div onClick={scrollLeft} className="absolute z-20 -left-2 p-2 rounded-full bg-darkColors text-white">
        <HiChevronLeft className="h-6 w-full" />
      </div>
      <div onClick={scrollRight} className="absolute z-20 -right-4 p-2  rounded-full bg-darkColors text-white">
        <HiChevronRight className="h-6 w-full" />
      </div>
      <div ref={contentRef} id="content" className=" flex overflow-x-auto w-full items-start  justify-start relative  scroll-smooth gap-6 md:gap-10 scrollbar-hide ">
        {SlicingData.map((item, index) => (
          <MotionRight key={index} animation={animation}>
            <CardSlicing title={item.title} desc={item.desc.substring(0, 60) + '...'} build={item.build} image={item.image} github={item.github} color={item.color} link={item.link} />
          </MotionRight>
        ))}
      </div>
    </div>
  );
}
