'use client';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import DarkMode from '../../app/darkmode';
import { Link } from 'react-scroll';
import Logo from '../Svg/Logo';
import { motion, useAnimation, useInView } from 'framer-motion';
import Box from '../Svg/box';
export const NavbarItems = [
  {
    navitem: 'Home',
    path: '/',
  },
  {
    navitem: 'About',
    path: 'about',
  },
  {
    navitem: 'Skill',
    path: 'skill',
  },
  {
    navitem: 'Project',
    path: 'project',
  },
  {
    navitem: 'Contact',
    path: 'contact',
  },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

export default function Navbar() {
  const [navClick, setNavclick] = useState(false);
  const [color, setColor] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [animation, isInView]);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  // const handleScroll = (e) => {
  //   // first prevent the default behavior
  //   e.preventDefault();

  //   // get the href and remove everything before the hash (#)
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, '');
  //   var element = document.getElementById(targetId);
  //   var headerOffset = 100;
  //   var elementPosition = element.getBoundingClientRect().top;
  //   var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: 'smooth',
  //   });
  //   // get the element by id and use scrollIntoView
  //   // const elem = document.getElementById(targetId);
  //   // elem?.scrollIntoView({
  //   //   behavior: 'smooth',
  //   // });
  // };

  return (
    <motion.div
      ref={ref}
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      className={`fixed w-full flex flex-col  px-setting transition duration-300 z-40 shadow py-2 md:py-0   ${color ? 'bg-lightColors/90 dark:bg-darkColors/80 dark:text-white border-b   ' : 'bg-transparent '}`}
    >
      <div className="flex items-center justify-between w-full 2xl:w-3/4 m-auto h-12 md:h-16">
        <div className="w-6 h-6 lg:w-8 lg:h-8 ">
          <Logo animation={animation} />
        </div>
        <div className="lg:gap-4 flex items-center gap-2 ">
          {NavbarItems.map((item, index) => (
            <div key={index} className="hidden lg:flex">
              <Link to={item.path} spy={true} activeClass="active" smooth={true} offset={-100} className="cursor-pointer">
                {item.navitem}
              </Link>
            </div>
          ))}
          <DarkMode />
          <div className="relative z-20 flex items-center justify-center gap-2 lg:hidden ">
            <div className="" onClick={() => setNavclick(!navClick)}>
              {navClick ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
            </div>
          </div>
        </div>
      </div>

      <motion.div className="h-[30vh] mt-14 md:mt-24 w-2/5 z-0  bg-lightColors dark:bg-darkColors shadow absolute overflow-hidden right-4 md:right-20 rounded-md " animate={navClick ? 'open' : 'closed'} variants={variants}>
        <div className="relative flex flex-col items-center justify-center gap-4 z-10 h-full">
          {NavbarItems.map((item, index) => (
            <Link to={item.path} spy={true} activeClass="active" key={index} smooth={true} offset={-100} className="cursor-pointer">
              {item.navitem}
            </Link>
          ))}
        </div>
        <div className="absolute inset-0 opacity-5 z-0">
          <Box width={200} height={300} />
        </div>
      </motion.div>
    </motion.div>
  );
}
