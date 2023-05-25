import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CardDesign({ title, image }) {
  return (
    <div className="">
      <div className="rounded-md relative  overflow-hidden shadow-lg group">
        {/* style={{ boxShadow: `0px 10px 10px ${props.color}` }} */}
        <div className="w-[360px]   relative">
          <Image className="w-full h-full" alt={title} src={image} width="" height="" />
        </div>
        <div className="absolute translate-y-full p-2 h-10 bottom-0 w-full dark:bg-darkColors/50 bg-lightColors/50 dark:text-lightColors text-center group-hover:translate-y-0 transition duration-300 ease-in-out delay-150">
          <h2 className="">{title}</h2>
        </div>
      </div>
    </div>
  );
}
