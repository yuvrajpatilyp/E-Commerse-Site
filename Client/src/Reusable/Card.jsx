import React from "react";
import { Heart, Eye } from "lucide-react";

const Card = ({ title, newprice, oldprice, image, discount }) => {
  return (
    <div className="flex flex-col  w-64 relative">
      <div className="bg-gray-100 p-6 w-full h-60 shadow-md  relative overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center">
        
        {/*  discount add it will only appers only when discount prop is passed fro that we used && */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}
          </div>
        )}

        
        <img src={image} alt={title} className="object-contain h-40" />


        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200">
            <Heart size={16} className="text-gray-700" />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200">
            <Eye size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

     {/* title and price  */}
      <h2 className="text-lg font-semibold mt-3 ">{title}</h2>

      <div className="flex space-x-3">
        <h1 className="text-red-500 font-semibold">{newprice}</h1>
        <h1 className="text-gray-400 line-through">{oldprice}</h1>
      </div>
    </div>
  );
};

export default Card;