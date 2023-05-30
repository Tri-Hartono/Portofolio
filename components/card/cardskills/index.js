'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function CardSkills({ src, name, desc }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="flex cursor-pointer items-center gap-2 rounded shadow  bg-lightColors/80 dark:bg-darkColors/80 px-2 py-4  md:gap-3 lg:px-4 relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex w-5 h-5 lg:h-10 lg:w-10 items-center justify-center p-0 ">
        <Image src={src} alt={name} width="auto" height="auto" />
      </div>
      <div className="flex items-center  ">
        <h3 className={`transition-all duration-300 ${hover ? '-translate-y-2 md:-translate-y-3 ' : 'translate-y-0 '}`}>{name}</h3>
        <p className={`${hover ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-0'} absolute mt-6  transition-all duration-300 text-xs`}>{desc}</p>
      </div>
    </div>
  );
}
