import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import CategorySidebar from "../Categorydropdown/CategorySidebar";

function Sidebar() {
  const slides = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      title: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      img: "/src/assets/iphone.jpg",
      bg: "bg-gradient-to-r from-gray-900 to-black",
    },
    {
      id: 2,
      logo: "src/assets/samsung_logo.png",
      title: "Galaxy S23 Ultra",
      offer: "Save 15% on Flagship Phones",
      img: "src/assets/samsung-galaxy-s23.png",
      bg: "bg-gradient-to-r from-gray-900 to-blue-900",
    },
    {
      id: 3,
      logo: "src/assets/onepluslogo.jpg",
      title: "OnePlus 12",
      offer: "Get ₹5000 Exchange Bonus",
      img: "src/assets/oneplus12.png",
      bg: "bg-gradient-to-r from-gray-900 to-red-900",
    },
    {
      id: 4,
      logo: "src/assets/google-logo.webp",
      title: "Google Pixel 10 Pro XI",
      offer: "Flat 10% off + Free Buds",
      img: "src/assets/pixel10.png",
      bg: "bg-gradient-to-r from-gray-900 to-orange-900",
    },
  ];

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-4 sm:px-6 md:px-10 mt-6">

     <CategorySidebar/>

  {/* RIGHT SLIDER */}
  <div className="md:col-span-3 w-full">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-10 py-6 text-white ${slide.bg}`}
          >
            {/* TEXT AREA */}
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <img
                  src={slide.logo}
                  alt="brand"
                  className="w-7 h-7 invert opacity-80"
                />
                <span className="text-lg md:text-xl font-medium">{slide.title}</span>
              </div>

              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                {slide.offer}
              </h1>

              <button className="flex items-center gap-2 border-b border-white pb-1 hover:gap-3 transition-all duration-300 text-sm md:text-base mt-4">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>

            {/* IMAGE AREA */}
            <div className="flex justify-center md:justify-end items-center h-full mt-5 md:mt-0">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-48 sm:w-60 md:w-[380px] lg:w-[440px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </>
  );
}

export default Sidebar;
