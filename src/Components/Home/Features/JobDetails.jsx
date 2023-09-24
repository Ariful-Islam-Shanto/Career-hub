import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaCommentDollar } from "react-icons/fa";
import DetailsTitle from "./DetailsTitle";
import swal from 'sweetalert';

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const detailsData = data.find((data) => data.id === intId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    location,
    contact_information
  } = detailsData;

  const { phone,
    email,
    address} = contact_information;

    const handleAddJob = () => {
        const allLocalStorageData = [];

        const getLocalSData = JSON.parse(localStorage.getItem('job'));

        if(!getLocalSData) {
            allLocalStorageData.push(detailsData);
            localStorage.setItem('job', JSON.stringify(allLocalStorageData));
        }else{

            const isDataExistInLs = getLocalSData.find(data => data.id === intId);

            if(!isDataExistInLs) {
                allLocalStorageData.push(...getLocalSData, detailsData);
                localStorage.setItem('job', JSON.stringify(allLocalStorageData));
            }else{
              swal({
                title: "Already added?",
                text: "",
                icon: "warning",
                dangerMode: true,
              });
            }
        }
    }
  return (
    
    <div>
        <div className="max-w-screen">
            <DetailsTitle></DetailsTitle>
        </div>
      <div className="grid md:grid-cols-3 gap-3 max-w-4xl py-40 mx-auto">
        <div className=" col-span-2 gap-4 text-left space-y-8 ">
          <h1 className="text-sm   text-gray-600  ">
            <span className="text-black font-bold">Job description</span>
            {job_description}
          </h1>
          <h1 className="text-sm  text-gray-600">
            <span className="text-black font-bold">Job Responsibility :</span>
            {job_responsibility}
          </h1>
          <h1 className="text-sm  text-gray-600">
            <span className="text-black font-bold">
              Educational Requirements :
            </span>
            {educational_requirements}
          </h1>
          <h1 className="text-sm   text-gray-600">
            <span className="text-black font-bold">Experiences :</span>
            {experiences}
          </h1>
        </div>
        

        <div className="relative bg-gradient-to-tr from-[#e8eaf7] to-[#eae4fc] rounded-md drop-shadow-md p-4 space-y-6">
          <h1 className="text-md text-left text-gray-700 font-semibold">
            Job Details
          </h1>
          <div className=" gap-6 space-y-4">
            <p className="text-gray-800 flex gap-2 items-center">
              <FaMapMarkerAlt className="text-purple-300"></FaMapMarkerAlt> <span className="text-md text-left text-gray-700 font-semibold">Job title :</span>
              {location}
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <FaCommentDollar className="text-purple-300"></FaCommentDollar> <span className="text-md text-left text-gray-700 font-semibold">Salary :</span>{salary}
            </p>
          </div>
          <h1 className="text-md text-left text-black font-semibold">
            Contact information
          </h1>
          <div className="border border-purple-200"></div>

          <div className=" gap-6 space-y-4">
            <p className="text-gray-800 flex gap-2 items-center">
              <FaMapMarkerAlt className="text-purple-300"></FaMapMarkerAlt> <span className="text-md text-left text-gray-700 font-semibold">Phone :</span>
              {phone}
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <FaCommentDollar className="text-purple-300"></FaCommentDollar> <span className="text-md text-left text-gray-700 font-semibold">Email :</span>{email}
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
               <span className="text-md text-left text-gray-700 font-semibold">Address :</span>{address.slice(0, 20)}
            </p>
          </div>

          <button onClick={handleAddJob} className="bg-gradient-to-tr w-full absolute top-[100%] left-0 text-white font-medium from-blue-400 to-purple-400 text-lg px-5 py-2 rounded-md">
          Apply Now
      </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
