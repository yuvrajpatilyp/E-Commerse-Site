import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const NavigationBar = ({ isLoggedIn }) => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Exclusive</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">About</Link></li>

          {/* Show SignUp only if NOT logged in */}
          {!isLoggedIn && (
            <li>
              <Link to="/signup">Sign In</Link>
            </li>
          )}
        </ul>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-lg px-3 py-1"
            />
            <FiSearch className="absolute right-2 top-2 text-gray-500" />
          </div>

          {/* Show icons only after login */}
          {isLoggedIn && (
            <>
              <Link to="/wishlist" title="Wishlist">
                <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
              </Link>

              <Link to="/cart" title="Cart">
                <FiShoppingCart className="text-xl cursor-pointer hover:text-green-600" />
              </Link>

              <Link to="/profile" title="Profile">
                <FiUser className="text-xl cursor-pointer hover:text-blue-600" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
