import Card from "../Reusable/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

function ExploreProducts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to cart:", product);
  };

  //  Product List (Dynamic)
  const products = [
    {
      image: "src/assets/jhumka.webp",
      title: "Stunning antique gold kundan pearl drop jhumka earring",
      newprice: "$4,060.00",
    },
    {
      image: "src/assets/Chandbaliearring.webp",
      title: "Stunning antique gold multicolor stone fall chandbali earring",
      newprice: "$2,760.00",
    },
    {
      image: "src/assets/necklaceset.jpg",
      title: "maa lakshmi necklace set I Temple Jewellery",
      newprice: "$3,060.00",
    },
    {
      image: "src/assets/chokerset.jpg",
      title: "Amazing antique gold maa lakshmi traditional necklace choker set",
      newprice: "$7,000.00",
    },
    {
      image: "src/assets/ring.webp",
      title: "Beautiful kundan floral adjustable finger ring",
      newprice: "$9,060.00",
    },
    {
      image: "src/assets/ring2.webp",
      title: "Cute gold plated kundan finger ring for women",
      newprice: "$6,000.00",
    },
    {
      image: "src/assets/chain.jpg",
      title: "Elegant antique gold plated chain for women",
      newprice: "$7,060.00",
    },
    {
      image: "src/assets/chain2.webp",
      title: "Elegant snake gold plated chain",
      newprice: "$7,000.00",
    },
  ];

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

      {/* Dynamic Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            newprice={item.newprice}
            onAddToCart={() => addToCart(item)}
          />
        ))}
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
