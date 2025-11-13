import React from "react";
import { Link } from "react-router-dom";

const PageNavigator = ({ page }) => {
  return (
    <div className="text-sm mb-6">
      <Link to="/" className="text-gray-500 hover:text-red-500">
        Home
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900 font-semibold">{page}</span>
    </div>
  );
};

export default PageNavigator;