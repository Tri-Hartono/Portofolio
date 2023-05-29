import React from 'react';

export default function ButtonProps({ name, icon, type }) {
  return (
    <div className="">
      <button type={type} className="flex items-center gap-2 ">
        {name}
        <div>{icon}</div>
      </button>
    </div>
  );
}
