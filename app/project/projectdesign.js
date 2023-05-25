'use client';
import React, { useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { DesignData } from '../../assets/data';
import CardDesign from '../../components/card/cardproject/carddesign';
import { useAnimation, useInView, motion } from 'framer-motion';
export default function ProjectDesign() {
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
  }, [isInView]);

  const variants = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <div
      className="flex flex-col  justify-center
     relative w-full   gap-4 lg:gap-10"
    >
      <div className="flex justify-between">
        <h1>Design</h1>
        {/* <h2>More</h2> */}
      </div>
      {/* <div onClick={scrollLeft} className="absolute z-20 -left-2 p-2 mt-10 rounded-full bg-black/80 text-white">
        <HiChevronLeft className="h-6 w-full" />
      </div>
      <div onClick={scrollRight} className="absolute z-20 -right-4 p-2  mt-10 rounded-full bg-black/80 text-white">
        <HiChevronRight className="h-6 w-full" />
      </div> */}
      <div className="absolute -bottom-16 w-full flex items-center  space-x-4 justify-center ">
        <div onClick={scrollLeft} className="p-2 rounded-full bg-darkColors text-white">
          <HiChevronLeft className="h-6 w-full" />
        </div>
        <div onClick={scrollRight} className="p-2  rounded-full bg-darkColors text-white">
          <HiChevronRight className="h-6 w-full" />
        </div>
      </div>
      <div ref={contentRef} id="content" className=" flex overflow-x-auto w-full items-start  justify-start relative  scroll-smooth gap-6 md:gap-10 scrollbar-hide ">
        {DesignData.map((item) => (
          <motion.div animate={animation} initial="hidden" variants={variants}>
            <CardDesign key={item.title} title={item.title} image={item.image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
