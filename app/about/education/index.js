import React from 'react';
import CardAbout from '../../../components/card/cardabout';

export default function Education() {
  return (
    <div className="space-y-2 w-full lg:w-1/2">
      <h2 className="">Education</h2>
      <CardAbout title="Computer Science" desc="GPA Value : 3.37 / 4.00" year="2017 - 2021" company="Universitas Indraprasta PGRI" />
    </div>
  );
}
