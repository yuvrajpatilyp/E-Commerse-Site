import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const products = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: "./src/assets/Gucci duffle bag.png",
    discount: "-35%",
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 160,
    image: "./src/assets/RGB liquid cooler.png",
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "./src/assets/GP11 Shooter USB Gamepad.png",
  },
  {
    id: 4,
    name: "SQuilted Satin Jacket",
    price: 150,
    image: "./src/assets/Quilited satin jacket.png",
  },
];

function BestSellingProducts() {
  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 overflow-x-auto">
      {/* Wishlist Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold w-28 h-[26px]">WishList (4)</h2>
        <button className="w-[223px] h-14 border border-gray-400 rounded hover:bg-gray-100 transition text-sm font-medium">
          Move All To Bag
        </button>
      </div>

      {/* Product Cards */}
      <div className="flex gap-6 flex-nowrap">
        {products.map((p, index) => (
          <div
            key={p.id}
            className="w-[250px] bg-white rounded shadow group shrink-0"
          >
            {/* Product Image Section */}
            <div className="relative bg-gray-100 flex justify-center items-center p-4">
              {/* Discount badge for first product only */}
              {index === 0 && p.discount && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {p.discount}
                </span>
              )}

              <img
                src={p.image}
                alt={p.name}
                className="w-40 h-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <RiDeleteBin6Line size={18} />
                </button>
              </div>

              <button className="absolute bottom-0 left-0 right-0 py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>
            </div>

            {/* Product Info Section */}
            <div className="p-4">
              <h3 className="text-base font-medium truncate">{p.name}</h3>
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="font-semibold text-red-600">${p.price}</span>
                {p.originalPrice && (
                  <span className="line-through text-gray-400">
                    ${p.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductsWithFlash() {
  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Products Section */}
      <BestSellingProducts />

      <section className="w-full h-[100px] flex items-center justify-between mt-4">
        <div className="flex items-center gap-2"> 
          <span className="w-3 h-8 bg-[#DB4444] rounded"></span>
          <h2 className="text-black-600 font-semibold text-base">Just For You</h2>
        </div>

        <button className="border border-gray-400 text-black px-5 py-2 rounded hover:bg-gray-100 transition">
          See All
        </button>
      </section>
    </div>
  );
}
