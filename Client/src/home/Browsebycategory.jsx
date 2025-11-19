
import React, { useState, useRef } from "react";
import Card from "../Reusable/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Flashsales() {
  const [cart, setCart] = useState([]);
  const swiperRef = useRef(null); 

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to cart:", product);
  };

  const products = [
    {
      image: "src/assets/nose pin.webp",
      title: "The Nose Pin",
      discount: "20% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/ring3.webp",
      title: "The Rings",
      discount: "12% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/kada.webp",
      title: "Gold kada ",
      discount: "10% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/bracelet.webp",
      title: "Braclets",
      discount: "10% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/Pendant.webp",
      title: "The Pendent",
      discount: "30% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/goldcoin.webp",
      title: "The Gold Coin",
      discount: "20% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/mangalsutra.webp",
      title: "The Mangalsutra",
      discount: "10% OF ON MAKING CHARGES",
    },
    {
      image: "src/assets/Bangles5.webp",
      title: "The Bangles",
      discount: "10% OF ON MAKING CHARGES",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-12 py-10 mt-10">

        {/* Heading */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Shop By Categories</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-5">

          <div className="flex items-center gap-10">
            <h2 className="text-3xl font-bold">Find Your Perfect Match</h2>
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

        {/* Product Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <Card {...p} onAddToCart={addToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Flashsales;
