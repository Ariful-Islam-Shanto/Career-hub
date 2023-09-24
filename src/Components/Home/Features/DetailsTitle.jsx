import React from "react";
import Image from '../../../../assets/images/bg1.png'

const DetailsTitle = () => {
  return (
    <div className={`relative `}>
        <h1 className=" absolute top-[40%] left-[40%] text-center text-6xl text-black font-bold">Job Details</h1>
      <div id="animate" className="w-full  bg-white flex flex-col gap-4 justify-end space-y-10 h-[400px]">
        <div className="bg-gradient-to-tr  filter blur-md text-white font-medium from-blue-300 to-purple-300 -rotate-[35deg]  -translate-x-40 h-20 w-2/6 rounded-tr-full rounded-br-full"></div>
        <div className="bg-gradient-to-tr filter blur-md mix-blend-multiply text-white font-medium from-blue-300 to-purple-300 -translate-x-40 -rotate-[35deg] h-16 w-2/6 rounded-tr-full rounded-br-full"></div>
        <div className="bg-gradient-to-tr filter blur-md text-white font-medium from-blue-300 to-purple-300 -translate-x-40 -rotate-[35deg] h-10 w-2/6 rounded-tr-full rounded-br-full"></div>
      </div>

    </div>
  );
};

export default DetailsTitle;
