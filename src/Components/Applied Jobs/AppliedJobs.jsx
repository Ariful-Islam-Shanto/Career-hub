import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Applied from "./Applied";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLocalSData = JSON.parse(localStorage.getItem("job"));
    if (getLocalSData) {
      setAppliedJobs(getLocalSData);
      setDisplay(getLocalSData);
    } else {
      setError("No data found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setAppliedJobs([]);
    setError("No data found");
  };

  const handleFilter = (e) => {

    const filter = e.target.value;

    if(filter === 'all') {
        setDisplay(appliedJobs);
    }
    else if(filter === 'remote') {
        const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplay(remote);
        console.log(remote);
    }
    else if(filter === 'onsite') {
        const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplay(onsite);
        console.log(onsite);
    }
  }

  return (
    <div className="py-6 max-w-4xl mx-auto">
     
      <div className="py-24">
      <div className="flex justify-end mb-6 ">
        <select onChange={handleFilter} className="select select-bordered w-1/5 bg-[#e8e7ea] ">
          <option disabled selected>
            Filter By
          </option>
          <option value='all' > All</option>
          <option value='remote' > Remote</option>
          <option value='onsite' >Onsite</option>
        </select>
      </div>
        {error ? (
          <div className="text-center">No data</div>
        ) : (
          <div className="flex flex-col gap-6  max-w-4xl mx-auto">
            {display.map((job) => (
              <Applied key={job.id} job={job}></Applied>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleRemove}
            className="bg-gradient-to-tr mt-6 text-white font-medium from-blue-400 to-purple-400 text-lg px-5 py-2  rounded-md"
          >
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
