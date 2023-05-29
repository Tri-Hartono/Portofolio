import React from 'react';

export default function Tittle({ titleDua, titleSatu }) {
  return (
    <div>
      <h1 className="flex flex-col leading-4 py-4 ">
        {titleSatu} <span>{titleDua}</span>
      </h1>
    </div>
  );
}
