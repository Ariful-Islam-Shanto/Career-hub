import React from "react";

const Applied = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div>
     
      <div className="text-black border h-[260px] text-left bg-white rounded-md drop-shadow-sm shadow-sm p-8 space-y-4 flex items-center justify-between">
        <div className="flex gap-8">
          <div className="w-[200px] bg-[#F4F4F4] drop-shadow-sm  h-[200px] flex items-center justify-center">
            <img className=" w-[120px] h-[25px]" src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-xl text-black font-medium">{job_title}</h1>
            <p className="text-sm text-gray-800">{company_name}</p>
            <div className="flex gap-4 text-sm">
              <p className=" rounded-md px-5 py-2 border-2 text-purple-400 border-gradient-to-tr from-blue-400 to-purple-400 font-medium">
                {remote_or_onsite}
              </p>
              <p className="rounded-md px-5 py-2 border-2 text-purple-400 font-medium border-gradient-to-tr from-blue-400 to-purple-400 ">
                {job_type}
              </p>
            </div>
            <div className="flex gap-6 text-sm flex-grow">
              <p className="text-gray-800 flex gap-2 items-center">
                {location}
              </p>
              <p className="text-gray-800 flex gap-2 items-center">
                {" "}
                Salary:{salary}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-gradient-to-tr text-white font-medium from-blue-400 to-purple-400 text-lg px-5 py-2 rounded-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applied;
