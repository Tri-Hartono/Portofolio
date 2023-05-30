import React from 'react';

export default function Education() {
  return (
    <div className="space-y-2 w-full ">
      <h2 className=" ">Education</h2>
      <div className="py-2">
        <div className="space-y-4  px-4 py-2 rounded-md relative shadow   ">
          <div className="flex justify-between items-center">
            <h2>Computer Science</h2>
            <h3>2017 - 2021</h3>
          </div>
          <h3>Universitas Indraprasta PGRI</h3>
          <div className="px-4 relative flex items-center">
            <ul className="list-disc">
              <li>Bachelor's degree focused in Informatics / Computer Science from Universitas Indraprasta PGRI (UNINDRA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
