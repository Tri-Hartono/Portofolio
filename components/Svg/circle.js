import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Circle = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.transition = 'none';
    pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
    pathRef.current.style.strokeDashoffset = pathLength;
    pathRef.current.getBoundingClientRect();
    pathRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out infinite';
    pathRef.current.style.strokeDashoffset = '0';
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" fill="none">
      <g transform="scale(3)">
        <path
          ref={pathRef}
          strokeWidth={4}
          strokeDasharray="0 1"
          className="dark:fill-blue-300 fill-blueColors"
          d="M50.65 33.215 25.848 8.413c-.724.066-1.448.197-2.171.395l26.645 26.644c.131-.79.263-1.513.328-2.236ZM44.27 14.794a22.126 22.126 0 0 0-7.04-4.736L49.072 21.9c-1.184-2.698-2.763-5.066-4.803-7.105ZM12.559 46.439a22.125 22.125 0 0 0 7.039 4.737L7.756 39.334c1.184 2.697 2.763 5.066 4.803 7.105ZM41.638 48.676 10.322 17.36c-.329.46-.724.987-1.053 1.514l30.79 30.789a6.403 6.403 0 0 0 1.579-.987ZM33.15 52.492 6.507 25.847l-.395 2.171L30.98 52.886a12.56 12.56 0 0 0 2.17-.394ZM47.493 42.294l-30.79-30.79c-.526.33-1.053.659-1.513 1.053l31.316 31.316.987-1.579Z"
        />
        {/* <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        strokeWidth={4}
        strokeDasharray="0 1"
        className="dark:fill-blueColors fill-blue-300"
        d="M45.19 25.452 20.388.65c-.724.065-1.448.197-2.171.394L44.795 27.69c.132-.724.264-1.447.395-2.237ZM38.743 7.097a22.126 22.126 0 0 0-7.04-4.737l11.842 11.842c-1.118-2.697-2.763-5.065-4.802-7.105ZM7.098 38.742a22.125 22.125 0 0 0 7.04 4.737L2.294 31.637c1.119 2.697 2.764 5.065 4.803 7.105ZM36.111 40.979 4.795 9.663c-.329.46-.723.987-1.052 1.513l30.79 30.79a6.405 6.405 0 0 0 1.578-.987ZM27.69 44.794 1.045 18.15l-.394 2.17 24.802 24.803c.724-.066 1.513-.131 2.237-.329ZM42.032 34.597l-30.79-30.79c-.526.33-1.052.659-1.513 1.053l31.316 31.316c.33-.526.658-1.053.987-1.579Z"
      /> */}
      </g>
    </svg>
  );
};

export default Circle;
