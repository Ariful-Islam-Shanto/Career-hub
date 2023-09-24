import React from "react";
import image from "../../../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="flex max-w-4xl mx-auto gap-16 py-24 pb-12">
      <div className="flex-1 flex flex-col  space-y-6  justify-center">
        <h1 className="text-6xl text-black font-bold">
          One Step <br />
          Closer To Your <br />{" "}
          <span className="bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
            Dream Job
          </span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div>
          <button className="px-5 py-2 bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] text-lg rounded-md text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
          <img className="scale-125" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
