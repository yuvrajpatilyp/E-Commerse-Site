import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import CategorySidebar from "../Categorydropdown/CategorySidebar";

function Sidebar() {
  const slides = [
    // images
    {
      id: 1,
      title: "Rounded Diamond Necklace",
      offer: "Nightfall Sparkle 14KT Diamond Necklace ",
      img: "src/assets/diamond-Necklace.jpg",
      bg: "bg-gradient-to-r from-gray-800 to-black",
    },
    {
      id: 2,
      title: "Gold stone bangle set",
      offer: "Elegant antique gold ruby traditional bangle set",
      img: "src/assets/bangles.webp",
      bg: "bg-gradient-to-r from-gray-800 to-black",
    },
    {
      id: 3,
      title: "Festival Edit",
      offer: "Dazzling Halo Diamond Finger Ring",
      img: "src/assets/Diamondring.jpg",
      bg: "bg-gradient-to-r from-gray-800 to-black",
    },
    {
      id: 4,
      logo: "",
      title: "Gold Bar",
      offer: "100 gram 24 Karat Gold Biscuit",
      img: "src/assets/goldbiscuit.jpeg",
      bg: "bg-gradient-to-r from-gray-800 to-black",
    },
  ];

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-4 sm:px-6 md:px-10 mt-6">

     <CategorySidebar/>

  {/* Right slider */}
  <div className="md:col-span-3 w-full max-w-[90%] mx-auto">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      loop={true}
      className="w-full h-[260px] sm:h-[320px] md:h-[380px]  overflow-hidden shadow-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-10 py-6 text-white ${slide.bg}`}
          >
            {/* Text area */}
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg md:text-xl font-medium">{slide.title}</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-tight ">
                {slide.offer}
              </h1>

              <button className="flex items-center gap-2 border-b border-white pb-1 hover:gap-3 transition-all duration-300 text-sm md:text-base mt-4">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>

            {/* Image area */}
            <div className="">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-60 sm:w-70 md:w-[380px] lg:w-[440px] object-contain drop-shadow-xl"
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
