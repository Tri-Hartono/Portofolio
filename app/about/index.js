import React from 'react';
import Experience from './experience';
import Education from './education';

export default function AboutMe() {
  return (
    <div id="about" className="">
      <h1 className="flex flex-col leading-4 py-4">
        About <span>Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
        <Education />
        <Experience />
      </div>
    </div>
  );
}
