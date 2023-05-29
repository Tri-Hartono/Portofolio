import React from 'react';
import CardAbout from '../../../components/card/cardabout';

const DataWork = [
  {
    title: 'Admin & Data Entry',
    company: 'DRYM CORP',
    desc: 'Fully responsible for data management at DRYM, handling all product sales transactions, managing company data using MS.Excel and Spreadsheets on GoogleDrive',
    year: 'May 2020 - July 2021',
  },
  {
    title: 'Project Staff',
    company: 'IIEF',
    desc: 'Responsible during the project by preparing the needs, both tools and designs',
    year: 'September 2016 - March 2021',
  },
];
export default function Experience() {
  return (
    <div className="space-y-2   w-full ">
      <h2 className=" flex flex-col leading-4">
        Work <span>Experience</span>
      </h2>

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        {DataWork.map((item) => (
          <CardAbout title={item.title} desc={item.desc} company={item.company} year={item.year} key={item.title} />
        ))}
      </div>
    </div>
  );
}
