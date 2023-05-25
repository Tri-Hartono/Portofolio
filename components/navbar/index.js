'use client';
import React, { useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import DarkMode from '../../app/darkmode';
import { Link } from 'react-scroll';
import Logo from '../Svg/Logo';
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
    navitem: 'Project',
    path: 'project',
  },
  {
    navitem: 'Contact',
    path: 'contact',
  },
];
export default function Navbar() {
  const [navClick, setNavclick] = useState(false);
  const [color, setColor] = useState(false);

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
    <div className={`fixed w-full flex flex-col  px-setting transition duration-300 z-30 shadow  ${color ? 'bg-lightColors/80 dark:bg-darkColors/80 dark:text-white border-b   ' : 'bg-transparent '}`}>
      <div className="flex items-center justify-between w-full 2xl:w-3/4 m-auto h-12 md:h-16">
        <div className="w-6 h-6 lg:w-8 lg:h-8 ">
          <Logo />
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

      <div
        className={`lg:hidden absolute h-[40vh] mt-14 md:mt-24 w-1/2 z-0 gap-4 flex flex-col items-center justify-center bg-lightColors dark:bg-darkColors shadow right-0 transition duration-300 translate-x-0 rounded-md ${
          navClick ? 'translate-x-0  right-4 md:right-20 ' : 'translate-x-full  '
        }`}
      >
        {NavbarItems.map((item, index) => (
          <Link to={item.path} spy={true} activeClass="active" key={index} smooth={true} offset={-100} className="cursor-pointer">
            {item.navitem}
          </Link>
        ))}
      </div>
    </div>
  );
}
