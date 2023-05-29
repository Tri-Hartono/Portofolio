'use client';
import Image from 'next/image';
import React from 'react';
import { HandIcon } from '../../assets/images';
import { HiArrowSmDown } from 'react-icons/hi';
import ButtonProps from '../../components/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Header() {
  return (
    <motion.div animate={{ x: 0 }} initial={{ x: '-100%' }} transition={{ duration: 1 }} id="/" className=" pt-10 lg:pt-20 flex flex-col-reverse md:flex-row gap-10 relative ">
      <div className="md:w-[75%] space-y-4">
        <div className="flex items-center gap-2">
          <h3>Hi,</h3>
          <div className="h-5 w-5">
            <Image src={HandIcon} width="" height="" alt="icon hand" />
          </div>
          <h3>My name is</h3>
        </div>
        <div className="text-5xl font-bold">Tri Hartono</div>

        <p>
          I am a frontend developer who has responsive web design skills and beautiful UI, I like to learn new things according to my field. For me the job is a responsibility that is carried out carefully and to the maximum extent
          possible, both personal and team work
        </p>
        <div className="py-4 w-fit">
          <Link href="#contact" className="cursor-pointer">
            <ButtonProps name="Hire Me" icon={<HiArrowSmDown />}></ButtonProps>
          </Link>
        </div>
      </div>
      {/* <div className="relative w-full md:w-1/2 h-full flex items-start   overflow-hidden ">
        <Image className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden" src={Profile} width="" height="" alt="Profile" />
      </div> */}
      {/* <div className="absolute bottom-0 right-0 bg-red-500 w-20 h-10">
        <Wave width="100%" height="100%" />
      </div> */}
    </motion.div>
  );
}
