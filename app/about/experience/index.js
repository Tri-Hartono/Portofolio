import React from 'react';
import CardAbout from '../../../components/card/cardabout';

const DataWork = [
  {
    title: 'Admin & Data Entry',
    company: 'DRYM CORP',
    desc: 'Fully responsible for data management at DRYM, handling all product sales transactions, managing company data using MS.Excel and Spreadsheets on GoogleDrive',
    year: 'Mei 2020 - Juli 2021',
  },
  {
    title: 'Admin & Data Entry',
    company: 'IIEF',
    desc: 'Fully responsible for data management at DRYM, handling all product sales transactions, managing company data using MS.Excel and Spreadsheets on GoogleDrive',
    year: 'Mei 2020 - Juli 2021',
  },
];
export default function Experience({ title }) {
  return (
    <div className="space-y-2   w-full ">
      <h2 className="flex flex-col leading-4">
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
