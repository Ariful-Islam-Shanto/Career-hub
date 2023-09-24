import React from "react";
import PropType from "prop-types";
import {FaMapMarkerAlt, FaCommentDollar} from 'react-icons/fa'
import { Link } from "react-router-dom";
 
const Job = ({ job }) => {
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
    <div className="text-black text-left bg-white rounded-md drop-shadow-sm shadow-sm p-8 space-y-4 flex flex-col">
      <img className=" w-[180px] h-[35px]" src={logo} alt="logo" />
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
        <p className="text-gray-800 flex gap-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
        <p className="text-gray-800 flex gap-2 items-center"><FaCommentDollar></FaCommentDollar> Salary:{salary}</p>
      </div>
      <div>
      <Link to={`/jobDetails/${id}`}><button className="bg-gradient-to-tr text-white font-medium from-blue-400 to-purple-400 text-lg px-5 py-2 rounded-md">
        View Details
      </button></Link>
      </div>
    </div>
  );
};

Job.propType = {
  Job: PropType.object,
};

export default Job;
