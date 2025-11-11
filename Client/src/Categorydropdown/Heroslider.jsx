// import React from "react";
// import Slider from "react-slick";
// import { FiArrowRight } from "react-icons/fi";

// const Heroslider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const slides = [
//     {
//       id: 1,
//       title: "iPhone 14 Series",
//       subtitle: "Up to 10% off Voucher",
//       image: "/assets/Frame 560.png",
//     },
//     {
//       id: 2,
//       title: "MacBook Air M2",
//       subtitle: "Save up to 15% today",
//       image: "/assets/Frame 560.png",
//     },
//     {
//       id: 3,
//       title: "Apple Watch Series 9",
//       subtitle: "Style meets technology",
//       image: "/assets/Frame 560.png",
//     },
//   ];

//   return (
//     <div className="w-full rounded-lg overflow-hidden">
//       <Slider {...settings}>
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="relative bg-black text-white flex items-center justify-between px-6 py-8 md:px-12"
//           >
//             {/* {/* Left Text Section /} */}
//             <div>
//               <h2 className="text-sm text-gray-300">{slide.title}</h2>
//               <h1 className="text-2xl md:text-3xl font-bold mt-1">{slide.subtitle}</h1>
//               <button className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
//                 Shop Now
//                 <FiArrowRight />
//               </button>
//             </div>

//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-[250px] md:w-[350px] object-contain"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Heroslider;