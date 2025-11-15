
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Woman's Fashion",
    key: "womens",
    subcategories: ["Dresses", "Tops", "Shoes", "Accessories"],
  },
  {
    name: "Men's Fashion",
    key: "mens",
    subcategories: ["Shirts", "Pants", "Shoes", "Watches"],
  },
  {
    name: "Electronics",
    key: "electronics",
    subcategories: ["Mobiles", "Laptops", "Cameras", "Headphones"],
  },
  {
    name: "Home & Lifestyle",
    key: "home",
    subcategories: ["Furniture", "Lighting", "Decor"],
  },
  { name: "Medicine", key: "medicine", subcategories: [] },
  { name: "Sports & Outdoor", key: "sports", subcategories: ["Gym", "Cricket", "Football"] },
  { name: "Baby’s & Toys", key: "baby", subcategories: ["Toys", "Clothes", "Games"] },
  { name: "Groceries & Pets", key: "groceries", subcategories: ["Pet Food", "Groceries"] },
  { name: "Health & Beauty", key: "beauty", subcategories: ["Makeup", "Skincare", "Fragrance"] },
];

const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="bg-white w-64 ms-20 mt-5 border-r border-gray-200 hidden lg:block">
      <ul className="flex flex-col text-gray-800">
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

            {openCategory === index && category.subcategories.length > 0 && (
              <ul className="absolute top-0 left-full bg-white border shadow-md min-w-[180px]">
                {category.subcategories.map((sub, subIndex) => {
                  const route = `/${category.key}/${sub.toLowerCase()}`;
                  return (
                    <li key={subIndex}>
                      <Link
                        to={route}
                        className="px-4 py-2 block hover:bg-gray-100 whitespace-nowrap"
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;