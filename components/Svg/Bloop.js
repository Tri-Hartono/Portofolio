import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        repeat: Infinity, // Atau angka besar lainnya untuk mendekati efek "repeat infinity"
        repeatType: 'loop',
        repeatDelay: 2,
      },
    };
  },
};

export default function Blob() {
  return (
    <motion.svg width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible">
      <motion.path
        variants={draw}
        strokeWidth={4}
        stroke="#ff0055"
        strokeDasharray="0 1"
        fill="none"
        d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
      />
    </motion.svg>
  );
}
