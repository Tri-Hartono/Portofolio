'use client';
import Image from 'next/image';
import { HandIcon } from '../../assets/images';
import { HiOutlineChevronDown, HiOutlineArrowCircleDown } from 'react-icons/hi';
import ButtonProps from '../../components/button';
import { motion } from 'framer-motion';
import Box from '../../components/Svg/box';
import { Link } from 'react-scroll';
import Circle from '../../components/Svg/circle';
import Blob from '../../components/Svg/Bloop';

export default function Header() {
  return (
    <motion.div animate={{ x: 0 }} initial={{ x: '-100%' }} transition={{ duration: 1 }} id="/" className="py-10 md:py-20 flex flex-col  justify-center relative ">
      <div className="md:w-[75%] space-y-4 relative z-20 ">
        <div className="flex items-center gap-2">
          <h3>Hi,</h3>
          <motion.div
            animate={{ rotate: [0, 30, 0, -30, 0] }} // Rotasi gambar tangan secara berulang
            transition={{ duration: 2, repeat: Infinity }}
            className="h-5 w-5"
          >
            <Image src={HandIcon} width="" height="" alt="icon hand" />
          </motion.div>

          <h3>My name is</h3>
        </div>
        <div className="text-5xl font-bold">Tri Hartono</div>
        <div className="text-5xl font-bold">I build things for the web.</div>

        <p>
          I am a frontend developer who has responsive web design skills and beautiful UI, I like to learn new things according to my field. For me the job is a responsibility that is carried out carefully and to the maximum extent
          possible, both personal and team work
        </p>
        <div className="py-4 w-fit relative ">
          <Link to="contact" spy={true} activeClass="active" smooth={true} offset={-100} className="cursor-pointer">
            <ButtonProps name="Hire Me" icon={<HiOutlineChevronDown />}></ButtonProps>
          </Link>
        </div>
      </div>
      <div className="absolute z-0 -top-1/4 opacity-10 h-4/5 -right-1/4 w-3/4 md:h-full ">
        <div className="w-1/2 -left-1/4 rounded-3xl z-10 -rotate-12 h-full bg-lightColors dark:bg-darkColors absolute"></div>
        <Box width={800} height="auto" />
      </div>
    </motion.div>
  );
}
