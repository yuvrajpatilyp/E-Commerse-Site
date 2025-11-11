import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const categories = [
  {
    name: "Woman's Fashion",
    subcategories: ["Dresses", "Tops", "Shoes", "Accessories"],
  },
  {
    name: "Men's Fashion",
    subcategories: ["Shirts", "Pants", "Shoes", "Watches"],
  },
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Cameras", "Headphones"],
  },
  {
    name: "Home & Lifestyle",
    subcategories: ["Furniture", "Lighting", "Decor"],
  },
  { name: "Medicine", subcategories: [] },
  { name: "Sports & Outdoor", subcategories: ["Gym", "Cricket", "Football"] },
  { name: "Baby’s & Toys", subcategories: ["Toys", "Clothes", "Games"] },
  { name: "Groceries & Pets", subcategories: ["Pet Food", "Groceries"] },
  { name: "Health & Beauty", subcategories: ["Makeup", "Skincare", "Fragrance"] },
];

const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="container  mt-2 bg-white w-64 border-r border-gray-200 hidden lg:block">
      <ul className="  flex flex-col text-gray-800">
        {categories.map((category, index) => (
          <li
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenCategory(index)}
            onMouseLeave={() => setOpenCategory(null)}
          >
            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100">
              <span>{category.name}</span>
              {category.subcategories.length > 0 && <FiChevronRight />}
            </div>

            {/* //Dropdown Category */}
            {openCategory === index && category.subcategories.length > 0 && (
              <ul className="absolute top-0 left-full bg-white border shadow-md min-w-[180px]">
                {category.subcategories.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
