import React from 'react';

export default function ButtonProps({ name, icon }) {
  return (
    <div className="py-4">
      <button className="flex items-center gap-2">
        {name}
        <div>{icon}</div>
      </button>
    </div>
  );
}
