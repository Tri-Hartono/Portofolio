import * as React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ animation }) => {
  const svgAnimate = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  const svgAnimateTwo = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={25} height={29} fill="none">
      <motion.path
        animate={animation}
        initial="hidden"
        variants={svgAnimate}
        className="fill-blueColors"
        d="M10.681 4.683H24.79v23.591s-3.01-7.84-4.683-8.898c-1.56-.987-4.8-.644-4.8-.644s7.844-9.366 4.8-9.366H10.68V4.683ZM.789 4.683h4.566v4.683H.789zM19.989 0h4.683v3.629h-4.683z"
      />
      <motion.path animate={animation} initial="hidden" variants={svgAnimateTwo} className="fill-blueColors" d="M5.354 0h4.683v21.366c0 2.576 7.786 6.907 7.786 6.907H5.355V0Z" />
    </motion.svg>
  );
};

export default Logo;
