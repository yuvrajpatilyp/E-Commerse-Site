import React from "react";
import { FiTruck, FiRotateCcw, FiMinus, FiPlus, FiHeart } from "react-icons/fi";

export default function ProductDetails() {
  const thumbs = [
    { src: "src/assets/Havic HV left side.png", alt: "Left Side" },
    { src: "src/assets/Havic HV  front face.png", alt: "Front Face" },
    { src: "src/assets/Havic HV side face.png", alt: "Side Face" },
    { src: "src/assets/Havic HV  tiltted.png", alt: "Tilted" },
  ];

  return (
    <section className="w-[1170px] h-[701px] mx-auto px-8 py-8 font-sans text-gray-800">
      {/* ---------- Breadcrumb ---------- */}
      <nav className="text-gray-500 text-sm mb-6">
        Account / Gaming /{" "}
        <span className="font-semibold text-black">Havic HV G-92 Gamepad</span>
      </nav>

      {/* ---------- Main Layout ---------- */}
      <div className="flex gap-12 h-[calc(701px-80px)]">
        {/* ---------- Left Section (Images) ---------- */}
        <div className="flex gap-6">
          {/* Thumbnails — light bg only */}
          <div className="flex flex-col justify-between h-[550px] gap-3">
            {thumbs.map((img, i) => (
              <div
                key={i}
                className="w-32 h-30 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image — clean, no bg */}
          <div className="w-[510px] h-[570px] flex items-center justify-center">
            <img
              src="src/assets/havic HV g-92 gamepad.png"
              alt="Main Gamepad"
              className="max-h-80 object-contain"
            />
          </div>
        </div>

        {/* ---------- Right Section (Product Info) ---------- */}
        <div className="flex-1 max-w-[480px] pt-2">
          {/* Product Title */}
          <h1 className="text-2xl font-bold mb-3 leading-tight">
            Havic HV G-92 Gamepad
          </h1>

          {/* Rating / Reviews / Stock */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.56-.955L10 0l2.95 5.955 6.56.955-4.755 4.635 1.123 6.546z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.56-.955L10 0l2.95 5.955 6.56.955-4.755 4.635 1.123 6.546z" />
              </svg>
            </div>

            <span className="text-xs text-gray-600">(150 Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-green-500 text-xs font-medium">In Stock</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold mb-5">$192.00</p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            PlayStation 5 Controller Skin — high quality vinyl with air-channel
            adhesive for easy, bubble-free installation and dirt-free removal.
            No heat or glue needed.
          </p>

          <hr className="border-gray-300 mb-6" />

          {/* Colour Options */}
          <div className="flex items-center gap-4 mb-5">
            <p className="font-medium text-gray-700 text-sm min-w-[60px]">
              Colours:
            </p>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-800 cursor-pointer" />
              <span className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-4 mb-6">
            <p className="font-medium text-gray-700 text-sm min-w-[60px]">
              Size:
            </p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`w-9 h-9 border rounded-md text-sm font-medium transition-colors ${
                    size === "M"
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity / Buy / Wishlist */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="p-2 hover:bg-red-500 transition-colors">
                <FiMinus size={14} />
              </button>
              <span className="px-4 font-semibold min-w-10 text-center text-sm">
                2
              </span>
              <button className="p-2 hover:bg-red-500 transition-colors">
                <FiPlus size={14} />
              </button>
            </div>

            <button className="bg-red-500 text-white px-10 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors flex-1 text-sm">
              Buy Now
            </button>

            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <FiHeart size={18} className="text-gray-600" />
            </button>
          </div>

          {/* ---------- Delivery / Return Info ---------- */}
          <div className="border border-gray-300 rounded-md divide-y divide-gray-300">
            {/* Free Delivery */}
            <div className="flex items-start gap-4 p-4">
              <FiTruck className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Free Delivery</p>
                <p className="text-xs text-gray-600">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex items-start gap-4 p-4">
              <FiRotateCcw className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Return Delivery</p>
                <p className="text-xs text-gray-600">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}