import React from "react";
import { IoIosEye } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const products = [
  { id: 1, name: "ASUS FHD Gaming Laptop", price: 960, originalPrice: 1160, rating: 5, reviews: 65, image: "./src/assets/ASUS FHD Laptop.png" },
  { id: 2, name: "IPS LCD Gaming Monitor", price: 1160, rating: 5, reviews: 65, image: "./src/assets/IPS LCD monitor.png" },
  { id: 3, name: "HAVIT HV-G92 Gamepad", price: 560, rating: 5, reviews: 65, image: "./src/assets/HAVIT HV-G92 Gamepad.png" },
  { id: 4, name: "AK-900 Wired Keyboard", price: 200, rating: 5, reviews: 65, image: "./src/assets/AK-900 Wired Keyboard.png" },
];

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <AiFillStar key={i} className="h-4 w-4" /> : <AiOutlineStar key={i} className="h-4 w-4" />
      )}
    </div>
    <span className="text-gray-500 text-sm">({reviews})</span>
  </div>
);

export default function BestSellingProducts() {
  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4">
      <div className="flex gap-6 flex-nowrap overflow-x-auto scroll-smooth no-scrollbar">
        {products.map((p, index) => (
          <div key={p.id} className="w-64 bg-white rounded shadow group shrink-0">
            <div className="relative bg-gray-100 flex justify-center items-center p-4 rounded-t-md">
              {index === 0 && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  35%
                </span>
              )}
              {index === 2 && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              <div className="absolute top-3 right-3">
                <IoIosEye
                  size={22}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                />
              </div>
              <img
                src={p.image}
                alt={p.name}
                className="w-40 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-0 left-0 right-0 py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-base font-medium text-black truncate mb-2">{p.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-600 font-medium">${p.price}</span>
                {p.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${p.originalPrice}</span>
                )}
              </div>
              <StarRating rating={p.rating} reviews={p.reviews} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
