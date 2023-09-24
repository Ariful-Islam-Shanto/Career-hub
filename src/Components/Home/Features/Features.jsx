import React, { useEffect, useState } from "react";
import Job from "./Job";

const Features = () => {
  const [jobs, setJobs] = useState([]);
  const [seeAll, setSeeAll] = useState(false)

  const handleShowAllJobs = () => {
    setSeeAll(!seeAll);
  }

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="py-16 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-6xl text-center">Featured Jobs</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {!seeAll ? jobs.slice(0, 4).map((job) => (
          <Job key={job.id} job={job}></Job> 
        )) : jobs.map(job => <Job key={job.id} job={job}></Job>) }
      </div>
      <div className="flex justify-center">
      <button onClick={() => {
        handleShowAllJobs();
      }} className="bg-gradient-to-tr text-white font-medium from-blue-400 to-purple-400 text-lg px-5 py-2 rounded-md">
        {seeAll ? 'Show less' : 'Show All Jobs'}
      </button>
      </div>
    </div>
  );
};

export default Features;
