'use client';
import Image from 'next/image';
import React from 'react';
import { HandIcon } from '../../assets/images';
import { HiArrowSmDown } from 'react-icons/hi';
import ButtonProps from '../../components/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Box from '../../components/Svg/box';
export default function Header() {
  return (
    <motion.div animate={{ x: 0 }} initial={{ x: '-100%' }} transition={{ duration: 1 }} id="/" className="pt-20  flex items-center relative ">
      <div className="md:w-[75%] space-y-4 relative z-20 ">
        <div className="flex items-center gap-2">
          <h3>Hi,</h3>
          <div className="h-5 w-5">
            <Image src={HandIcon} width="" height="" alt="icon hand" />
          </div>
          <h3>My name is</h3>
        </div>
        <div className="text-5xl font-bold">Tri Hartono</div>
        <div className="text-5xl font-bold">I build things for the web.</div>

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
      <div className="absolute z-0 -top-1/4 opacity-5  -right-1/4 w-3/4 ">
        <div className="w-1/2 -left-1/4 rounded-3xl z-10 -rotate-12 h-full bg-lightColors dark:bg-darkColors absolute"></div>
        <Box width={800} height={500} />
      </div>
    </motion.div>
  );
}
