import React from "react";
import PropTypes from 'prop-types';

const Category = ({ category }) => {
  const { category_name, logo, availability, id } = category;
  return (
    <div className="p-8 bg-white rounded-md drop-shadow-md">
      <div className="w-[70px] h-[70px] bg-purple-100 rounded-md p-4">
        <img src={logo} className="" alt="" />
      </div>
      <div>
        <h1 className="text-lg text-black font-bold">{category_name}</h1>
        <h1 className="text-md text-gray-600">{availability}</h1>
      </div>
    </div>
  );
};


export default Category;
