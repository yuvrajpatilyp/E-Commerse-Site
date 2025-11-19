import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";
import { FaStar } from "react-icons/fa";

const Card = ({title,newprice, oldprice,image,hoverImage,discount,onAddToCart,}) => {
  const [rating, setRating] = useState(0);

  const handleRating = (starIndex) => {
    setRating(starIndex);
  };

  const handleAddToCart = () => {
    onAddToCart({title,newprice,oldprice,image,discount,rating,qty: 1, });
  };

  return (
    <div className="flex flex-col w-64 relative group">

      {/* IMAGE BOX */}
      <div
        className="bg-gray-100 p-4 rounded-lg w-full aspect-square shadow-md
        relative overflow-hidden hover:shadow-lg transition duration-300
        hover:scale-105 flex items-center justify-center"
      >

        {/* DISCOUNT BADGE */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}
          </div>
        )}

        {/* ICONS */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200">
            <Heart size={16} />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200">
            <Eye size={16} />
          </button>
        </div>

        {/* - IMAGE SLIDE EFFECT -- */}

        {/* MAIN IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500
          group-hover:translate-x-[-100%]"
        />

        {/* HOVER IMAGE */}
        <img
          src={hoverImage}
          alt="hover"
          className="w-full h-full object-cover absolute top-0 left-0
          translate-x-full group-hover:translate-x-0 transition-all duration-500"
        />

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2
          text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add To Cart
        </button>
      </div>

      {/* TITLE */}
      <h2 className="text-lg text-center font-semibold mt-3">{title}</h2>

      {/* PRICE */}
      <div className="flex justify-center space-x-3 mt-1">
        <h1 className="text-red-500 font-semibold">{newprice}</h1>
        <h1 className="text-gray-400 line-through">{oldprice}</h1>
      </div>

      {/* RATING */}
      <div className="flex mt-2 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => handleRating(star)}
            className={`cursor-pointer text-lg transition ${
              rating >= star
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
