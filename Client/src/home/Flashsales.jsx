import React, { useState, useEffect, useRef } from "react";
import Card from "../Reusable/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Flashsales() {
  // Cart state — products added to cart stored here
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);     
    console.log("Added to cart:", product);
  };

  // Timer state for Flash Sale
  const [time, setTime] = useState({
    days: 5,
    hours: 12,
    minutes: 59,
    seconds: 29,
  });

  // We use useRef to control swiper - next/prev buttons
  const swiperRef = useRef(null);

  //  Timer countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        // seconds countdown
        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;

          // minutes countdown
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;

            // hours countdown
            if (hours > 0) hours -= 1;
            else {
              hours = 23;

              // days countdown
              if (days > 0) days -= 1;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Clear timer on component unmount
    return () => clearInterval(interval);
  }, []);

  // Product list
  const products = [
    {
      image: "src/assets/earring1.webp",
      title: "Gold earrings",
      newprice: "$3,120",
      oldprice: "$6,160",
      discount: "sale",
    },
    {
      image: "src/assets/earring2.webp",
      title: "Stone-studded peacock earring",
      newprice: "$4,056",
      oldprice: "8,231",
      discount: "sale",
    },
    {
      image: "src/assets/earring3.webp",
      title: "Gold dangel",
      newprice: "$4,056",
      oldprice: "7,000",
      discount: "sale",
    },
    {
      image: "src/assets/earring4.webp",
      title: "Gold earring",
      newprice: "$5,600",
      oldprice: "7,000",
      discount: "sale",
    },
    {
      image: "src/assets/IMG-20251117-WA0011.jpg",
      title: "Gold floral earring",
      newprice: "$6,000",
      oldprice: "$8,000",
      discount: "sale",
    },
    {
      image: "src/assets/IMG-20251117-WA0012.jpg",
      title: "gold basket earring",
      newprice: "$5,000",
      oldprice: "$7,000",
      discount: "sale",
    },
    {
      image: "src/assets/IMG-20251117-WA0013.jpg",
      title: "jhumri-22k",
      newprice: "$4,000",
      oldprice: "$7,000",
      discount: "sale",
    },
    {
      image: "src/assets/IMG-20251117-WA0014.jpg",
      title: "Gold jhumka hoop earrings",
      newprice: "5,000.00",
      oldprice: "$8,000.00",
      discount: "sale",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-12 py-10 mt-10">

        {/* Left red bar / Today’s text */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Today’s</h2>
        </div>

        {/* Flash Sales heading / timer / arrow buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-5">

          {/* Title / Timer */}
          <div className="flex items-center gap-10">
            <h2 className="text-3xl font-bold">Flash Sales</h2>

            {/* Timer */}
            <div className="flex gap-6">
              {[
                ["Days", time.days],
                ["Hrs", time.hours],
                ["Min", time.minutes],
                ["Sec", time.seconds],
              ].map(([label, value], idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{label}</span>
                  <span className="text-2xl font-bold">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Arrow Buttons */}
          <div className="flex gap-2">
            {/* Previous Slide Button */}
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Next Slide Button */}
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

        {/* Product Carousel */}
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
              {/* Card component for each product */}
              <Card {...p} onAddToCart={addToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Flashsales;
