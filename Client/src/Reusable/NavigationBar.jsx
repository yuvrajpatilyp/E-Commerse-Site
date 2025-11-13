import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const NavigationBar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-3xl font-bold text-black">Exclusive</h1>

        <ul className="hidden md:flex  gap-8 text-gray-700  text-lg font-medium  cursor-pointer">
          <li className="hover:underline">Home</li>
          <li  className="hover:underline">Contact</li>
          <li  className="hover:underline">About</li>
          <li className="hover:underline">Sign Up</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-lg px-3 py-1"
            />
            <FiSearch className="absolute right-2 top-2 text-gray-500" />
          </div>
          <FiHeart className="text-xl" />
          <FiShoppingCart className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;