import React from 'react'
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


function Categorysection() {
  return (
     <div className="w-full bg-white py-8 px-6 rounded-2xl shadow-sm ">
      <div className="flex justify-between items-center mb-4">
        <div>
            <div className='w-6 h-10 bg-red-500 rounded-lg  ms-28 mt-22'>
          <p className="text-red-500 text-2xl font-semibold ms-8 mt-10 ">Categories</p>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 ms-28 mt-6">Browse By Category</h2>
        </div>

        <div className="flex space-x-2">
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition mt-34"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition mr-70 mt-34 "
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
<div className="flex ms-28  gap-8 py-2 mt-12">

        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Smartphone size={32} />
          <p className="mt-2 text-gray-700 font-medium">Phones</p>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Monitor size={32} />
          <p className="mt-2 text-gray-700 font-medium">Computers</p>
        </div>

        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Watch size={32} />
          <p className="mt-2 text-gray-700 font-medium">SmartWatch</p>
        </div>

        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Camera size={32} />
          <p className="mt-2 text-gray-700 font-medium">Camera</p>
        </div>

        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Headphones size={32} />
          <p className="mt-2 text-gray-700 font-medium">HeadPhones</p>
        </div>

        <div className="flex flex-col items-center justify-center w-40 h-32 border border-gray-200 rounded-xl hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Gamepad2 size={32} />
          <p className="mt-2 text-gray-700 font-medium">Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Categorysection
