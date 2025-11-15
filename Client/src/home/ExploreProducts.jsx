import React from "react";
import Card from "../Reusable/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ExploreProducts() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-14 py-10">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
        <h2 className="text-xl font-semibold text-red-600">
          Our Products
        </h2>
      </div>

      {/* Title + Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
          Explore Our Products
        </h2>

        <div className="flex gap-3">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowLeft size={20} />
          </button>

          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8
      ">
        <Card image="./src/assets/Breed dry dog food.png" title="Breed Dry Dog Food" newprice="$960" />
        <Card image="./src/assets/Canon EOS DSLR Camera.png" title="CANON EOS DSLR Camera" newprice="$100" />
        <Card image="./src/assets/ASUS FHD Laptop.png" title="ASUS FHD Gaming Laptop" newprice="$360" />
        <Card image="./src/assets/Curology product set.png" title="Curology Product Set" newprice="$700" />
        <Card image="./src/assets/Kids Electric car.png" title="Kids Electric Car" newprice="$960" />
        <Card image="./src/assets/jr zoom soccer.png" title="Jr Zoom Soccer Cleats" newprice="$100" />
        <Card image="./src/assets/GP11 Shooter USB Gamepad.png" title="GP11 Shooter USB Gamepad" newprice="$360" />
        <Card image="./src/assets/Quilited satin jacket.png" title="Quilited Satin Jacket" newprice="$700" />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="mt-10 bg-red-600 text-white px-10 py-3 rounded-md hover:bg-red-700">
          View All Products
        </button>
      </div>

    </div>
  );
}

export default ExploreProducts;
