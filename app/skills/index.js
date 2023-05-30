'use client';
import { StacksData, ToolsData } from '../../assets/data';
import Tittle from '../../components/title';
import CardSkills from '../../components/card/cardskills';
import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import MotionLeft from '../../components/motion/motionleft';
import MotionRight from '../../components/motion/motionright';
import Box from '../../components/Svg/box';
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [isInView, animation]);
  return (
    <div id="skill" ref={ref} className="relative">
      <div className="absolute z-0  opacity-10 h-4/5 -right-1/4 w-3/4 md:h-full ">
        <div className="w-1/2 -left-1/4 rounded-3xl z-10 -rotate-12 h-full bg-lightColors dark:bg-darkColors absolute"></div>
        <Box width={800} height="auto" />
      </div>
      <MotionLeft animation={animation}>
        <Tittle titleSatu="Tech" titleDua="Stack" />
        <div className="py-4 md:py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-4">
          {Object.keys(StacksData).map((item) => (
            <CardSkills key={StacksData[item].name} src={StacksData[item].src} name={StacksData[item].name} desc={StacksData[item].desc} />
          ))}
        </div>
      </MotionLeft>

      <MotionRight animation={animation}>
        <Tittle titleSatu="Tools" titleDua="Used" />
        <div className="py-4 md:py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-4">
          {Object.keys(ToolsData).map((item) => (
            <CardSkills key={ToolsData[item].name} src={ToolsData[item].src} name={ToolsData[item].name} desc={ToolsData[item].desc} />
          ))}
        </div>
      </MotionRight>
    </div>
  );
}
