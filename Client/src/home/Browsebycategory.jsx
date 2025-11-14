import React from "react";
import {
  Camera,
  Laptop,
  Watch,
  Headphones,
  Smartphone,
  Gamepad2,
} from "lucide-react";

function Browsebycategory() {
  return (
    <>
      {/* Main Container */}
      <div className="px-4 md:px-12 py-10 mt-10">

        {/* Red Bar + "Categories" */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Categories</h2>
        </div>

        {/* Heading + Arrows */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Browse By Category
          </h2>

          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              ←
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              →
            </button>
          </div>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {/* Category Box */}
          {[
            { icon: Smartphone, label: "Phones" },
            { icon: Laptop, label: "Computers" },
            { icon: Watch, label: "SmartWatch" },
            { icon: Camera, label: "Camera" },
            { icon: Headphones, label: "Headphones" },
            { icon: Gamepad2, label: "Gaming" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border rounded-md py-6 hover:bg-red-600 hover:text-white transition cursor-pointer"
            >
              <item.icon size={40} />
              <p className="mt-2 text-sm font-medium">{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Browsebycategory;
