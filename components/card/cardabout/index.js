import React from 'react';

export default function CardAbout({ title, year, company, desc }) {
  return (
    <div className="py-2">
      <div className="space-y-4  px-4 py-2 rounded-md relative shadow">
        <div className="flex justify-between items-center">
          <h2>{title}</h2>
          <h3>{year}</h3>
        </div>
        <h3>{company}</h3>
        <div className="px-4 relative flex items-center">
          <p>{desc}</p>
          <div className="absolute left-0 w-[2px] rounded-md h-full bg-darkColors dark:bg-lightColors"></div>
        </div>
      </div>
    </div>
  );
}
