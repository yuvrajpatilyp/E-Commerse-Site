import React from "react";

const Card = ({ title, newprice, oldprice, image }) => {
  return (
    <div className="flex flex-col w-64">

      <div className="bg-gray-100 p-10 w-full h-60 shadow-md transform transition-transform duration-300 hover:scale-105 flex items-center justify-center rounded-lg">
        <img src={image} alt={title} className="object-contain h-40" />
      </div>

      <h2 className="text-lg font-semibold mt-3 ">{title}</h2>

      <div className="flex space-x-4">
        <h1 className="text-red-500 font-semibold">{newprice}</h1>
        <h1 className="text-gray-400 line-through">{oldprice}</h1>
      </div>
    </div>
  );
};

export default Card;