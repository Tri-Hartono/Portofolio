export default function Experience() {
  return (
    <div className="space-y-2   w-full ">
      <h2 className=" flex flex-col leading-4">
        Work <span>Experience</span>
      </h2>

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="py-2">
          <div className="space-y-4  px-4 py-2 rounded-md relative shadow  ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Admin & Data Entry</h3>
              <h3>May 2021 - July 2022</h3>
            </div>
            <h3>DRYM CORP</h3>
            <div className="px-4 relative flex items-center">
              <ul className="list-disc">
                <li>Fully responsible for data management at DRYM.</li>
                <li>Handling all product sales transactions.</li>
                <li>managing company data using MS.Excel and Spreadsheets on GoogleDrive.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="space-y-4  px-4 py-2 rounded-md relative  shadow ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Project Staff</h3>
              <h3>September 2016 - March 2017</h3>
            </div>
            <h3>IIEF - Indonesia International Education Foundation</h3>
            <div className="px-4 relative flex items-center">
              <ul className="list-disc">
                <li>Responsible during the project by preparing the needs.</li>
                <li>assist in the implementation of the peradi test.</li>
                <li>make travel documents for each vehicle involved in or in and out of a project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
