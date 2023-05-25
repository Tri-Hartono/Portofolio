'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiLocationMarker, HiOutlineX, HiOutlinePaperAirplane } from 'react-icons/hi';
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si';
import Image from 'next/image';
import { Thanks } from '../../assets/images';
import ButtonProps from '../../components/button';

const SosialLink = [
  {
    item: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100064153174194',
    icon: SiFacebook,
  },
  {
    item: 'Instagram',
    url: 'https://www.instagram.com/hrtn29/',
    icon: SiInstagram,
  },
  {
    item: 'Github',
    url: 'https://github.com/Tri-Hartono',
    icon: SiGithub,
  },
  {
    item: 'Email',
    url: 'mailto:Trihartono293@gmail.com',
    icon: HiOutlineMail,
  },
  {
    item: 'Location',
    url: 'https://goo.gl/maps/fCTnamkeqPQxB6AC6',
    icon: HiLocationMarker,
  },
];
export default function Contact() {
  const [sendClick, setSendClick] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3i9jgll', 'template_64dnleq', form.current, 'vg6bebfafXXNoSP1S').then(
      (result) => {
        console.log(result.text);
        setSendClick(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className=" flex flex-col-reverse md:flex-row gap-8 items-start pt-10" id="contact">
      <div className={sendClick ? 'fixed inset-0 z-30 bg-darkColors/50 dark:bg-lightColors/50 flex items-center justify-center' : 'hidden'} onClick={() => setSendClick(false)}>
        <div className="w-[80%] h-[60%] md:w-[50%] md:h-[80%] flex flex-col  items-center justify-center   bg-lightColors text-darkColors rounded-md shadow relative ">
          <div className="absolute -top-2 -right-2 p-2 text-lightColors bg-darkColors rounded-full" onClick={() => setSendClick(false)}>
            <HiOutlineX />
          </div>
          <Image src={Thanks} width="400" height="400" alt="Image Thanks" />
          <h1>For Send Me Email</h1>
        </div>
      </div>
      <div className="w-1/2 space-y-4">
        <h1 className="flex flex-col items-start leading-6">
          Contact <span>Me</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
          <div className="space-y-2">
            {SosialLink.map((item, index) => (
              <Link className="flex gap-4 items-center" href={item.url} key={index}>
                <div>{<item.icon />}</div>
                <h3>{item.item}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2  space-y-4  ">
        <h1 className="flex flex-col leading-6">
          Get in <span>Touch</span>
        </h1>
        <form className="w-full flex flex-col gap-4 justify-center md:px-4" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-input">
              <label>Name</label>
              <input type="text" name="user_name" className="" placeholder="Your Name" required />
            </div>
            <div className="form-input">
              <label>Email</label>
              <input type="email" name="user_email" className="" placeholder="Your email@gmail.com" required />
            </div>
          </div>
          <div className="form-input">
            <label className="">Subject</label>
            <input type="subject" name="subject" className="" placeholder="Your Subject" required></input>
          </div>
          <div className="form-input">
            <label className="">Message</label>
            <textarea name="message" className="" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="flex gap-2 items-center w-fit bg-darkColors rounded-lg px-6 py-2 border-2 border-slate-200 text-white ">
            Send
            <HiOutlinePaperAirplane />
          </button>
        </form>
      </div>
    </div>
  );
}
