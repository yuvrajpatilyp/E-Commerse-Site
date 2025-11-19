import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const items = [
  // images 
  {
    title: "Bridal Mangalsutra",
    img: "src/assets/mangalsutraring.jpg",
  },
  {
    title: "Bridal Pendants",
    img: "src/assets/pendant3.webp",
  },
  {
    title: "Bridal Earrings",
    img: "src/assets/jhumka2.webp",
  },
  {
    title: "Bridal Necklace",
    img: "src/assets/necklace.webp",
  },
  {
    title: "Bridal Bangles",
    img: "src/assets/bangle6.webp",
  },
];

export default function BridalPicks() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
    <div
      className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[85%] h-150 
        bg-[#F7EFD8] p-4 sm:p-6 rounded-3xl shadow-xl border border-yellow-200"
      
    >
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black mb-3">
        Bridal Picks Of The Season
      </h1>

      <div className="relative max-w-10xl mx-auto">

        {/* Left side-button */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-0 md:left-[-50px] top-1/2 -translate-y-1/2 
          bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Swiper slider start */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-100 h-110 object-cover"
                />
              </div>
               <h2 className="text-center text-2xl font-semibold py-2 text-black">
                  {item.title}
                </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right side-button*/}
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-0 md:right-[-50px] top-1/2 -translate-y-1/2 
          bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
    </div>
  );
}
