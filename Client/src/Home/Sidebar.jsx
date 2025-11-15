import React from 'react'
 import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

function Sidebar() {

  const slides = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      title: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      img: "src/assets/apple14.png",
      bg: "bg-gradient-to-r from-gray-900 to-black",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Samsung_Logo.svg",
      title: "Galaxy S23 Ultra",
      offer: "Save 15% on Flagship Phones",
      img: "src/assets/s23.jpg",
      bg: "bg-gradient-to-r from-gray-900 to-blue-900",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/OnePlus_logo.svg",
      title: "OnePlus 12",
      offer: "Get ₹5000 Exchange Bonus",
      img: "src/assets/oneplus.jpg",
      bg: "bg-gradient-to-r from-gray-900 to-red-900",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Google_%22G%22_Logo.svg",
      title: "Google Pixel 8 Pro",
      offer: "Flat 10% off + Free Buds",
      img: "src/assets/pixel.png",
      bg: "bg-gradient-to-r from-gray-900 to-green-900",
    },
  ];
 
  return (
  <>


      

  
    
     <div className="absolute right-[160px]   top-1/2 transform -translate-y-1/2 w-[900px] h-[380px] overflow-hidden shadow-lg z-30">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`flex items-center justify-between w-full h-full px-10 py-6 text-white ${slide.bg}`}
            >
             
              <div className="space-y-2 max-w-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <img
                    src={slide.logo}
                    alt="brand"
                    className="w-5 h-5  invert"
                  />
                  <span className="text-sm">{slide.title}</span>
                </div>
 
                <h1 className="text-2xl font-semibold leading-tight">
                  {slide.offer}
                </h1>
 
                <button className="flex items-center gap-1 border-b border-white pb-1 hover:gap-2 transition-all duration-300 text-sm">
                  Shop Now <ArrowRight size={14} />
                </button>
              </div>
 
               
              <div className="flex justify-end items-center h-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-[600px] h-[340px] object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  
    </>
  )
}

export default Sidebar