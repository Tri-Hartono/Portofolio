import React from 'react';
import Image from 'next/image';
import { HiOutlinePencilAlt, HiOutlineExternalLink } from 'react-icons/hi';
import ButtonProps from '../../button';
import { SiGithub } from 'react-icons/si';

export default function CardSlicing(props) {
  return (
    <div className="py-4">
      <div className=" space-y-4  rounded-md relative  overflow-hidden shadow-lg  ">
        <div className="w-[320px]   relative shadow">
          <Image alt={props.title} src={props.image} width="" height="" />
        </div>
        <div className="space-y-1 relative px-2">
          <div className="absolute w-[2px] h-[90%] right-0 rounded-xl" style={{ backgroundColor: props.color }}></div>
          <h2>{props.title}</h2>
          <div className="py-2 font-bold flex gap-2 items-center">
            <HiOutlinePencilAlt />
            {props.build}
          </div>
          <p>{props.desc}</p>

          <div className="flex gap-4 py-6 ">
            <a href={`${props.link}`} target="_blank">
              <ButtonProps name="demo" icon={<HiOutlineExternalLink />} />
            </a>
            <a href={`${props.github}`} target="_blank">
              <ButtonProps name="github" icon={<SiGithub />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
