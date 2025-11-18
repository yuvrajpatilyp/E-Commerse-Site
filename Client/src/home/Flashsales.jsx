import React, { useState, useEffect, useRef } from "react";
import Card from "../Reusable/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Flashsales() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to cart:", product);
  };

  const [time, setTime] = useState({
    days: 5,
    hours: 12,
    minutes: 59,
    seconds: 29,
  });

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

        {/* Heading */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Today’s</h2>
        </div>

        {/* Flash Sales + Timer + Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-5">

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


// import React, { useEffect, useState } from "react";
// import { FaStar, FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Flashsales() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   const [ratings, setRatings] = useState({});
//   const [likedProducts, setLikedProducts] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;

//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }

//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (n) => (n < 10 ? `0${n}` : n);

//   const products = [
//     {
//       id: 1,
//       name: "HAVIT HV-G92 Gamepad",
//       price: 120,
//       original: 200,
//       discount: "-40%",
//       image: "./src/assets/HAVIT-HV-G92-Gamepad.png",
//     },
//     {
//       id: 2,
//       name: "AK-900 Wired Keyboard",
//       price: 100,
//       original: 150,
//       discount: "-35%",
//       image: "./src/assets/AK-900-Wired-Keyboard.png",
//     },
//     {
//       id: 3,
//       name: "IPS LCD Gaming Monitor",
//       price: 370,
//       original: 400,
//       discount: "-30%",
//       image: "./src/assets/IPS-LCD-monitor.png",
//     },
//     {
//       id: 4,
//       name: "S-Series Comfort Chair",
//       price: 375,
//       original: 500,
//       discount: "-25%",
//       image: "src/assets/S-Series Chair.png",
//     },
//   ];

//   const handleRating = (productId, starIndex) => {
//     setRatings((prev) => ({
//       ...prev,
//       [productId]: starIndex,
//     }));
//   };

//   const toggleLike = (productId) => {
//     setLikedProducts((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push({ ...product, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="p-6 mt-20 bg-white">

//       {/* Header */}
//       <div className="flex flex-wrap justify-between items-center mb-6">
//         <div className="flex flex-wrap items-center gap-8">
//           <div className="flex items-center gap-3">
//             <div className="w-[5px] h-8 bg-orange-500 rounded-md"></div>
//             <h2 className="text-2xl font-bold">Flash Sales</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             {[
//               { label: "Days", value: timeLeft.days },
//               { label: "Hours", value: timeLeft.hours },
//               { label: "Minutes", value: timeLeft.minutes },
//               { label: "Seconds", value: timeLeft.seconds },
//             ].map((item, index, arr) => (
//               <div key={index} className="flex items-center">
//                 <div className="flex flex-col items-center">
//                   <span className="text-[13px] font-semibold text-black">
//                     {item.label}
//                   </span>
//                   <span className="text-[22px] font-bold text-black">
//                     {String(item.value).padStart(2, "0")}
//                   </span>
//                 </div>
//                 {index < arr.length - 1 && (
//                   <span className="text-red-500 text-2xl font-bold mx-2">
//                     :
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-4 mt-4 sm:mt-0">
//           <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
//             <span className="text-lg text-gray-700">←</span>
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
//             <span className="text-lg text-gray-700">→</span>
//           </button>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group p-4 shadow hover:shadow-lg transition relative overflow-hidden"
//           >
//             <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
//               {likedProducts[product.id] ? (
//                 <FaHeart
//                   onClick={() => toggleLike(product.id)}
//                   className="cursor-pointer text-red-500 text-lg transition"
//                 />
//               ) : (
//                 <FaRegHeart
//                   onClick={() => toggleLike(product.id)}
//                   className="cursor-pointer text-black text-lg transition"
//                 />
//               )}
//               <FaEye className="cursor-pointer text-gray-700 text-lg" />
//             </div>

//             <div className="relative flex flex-col items-center">
//               <span className="absolute top-2 left-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
//                 {product.discount}
//               </span>

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-contain mt-6"
//               />

//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 bg-black text-white py-2 text-sm w-full rounded opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
//               >
//                 Add To Cart
//               </button>
//             </div>

//             <h3 className="mt-2 text-sm font-semibold pt-4">
//               {product.name}
//             </h3>
//             <div className="text-red-600 font-bold">${product.price}</div>
//             <div className="text-gray-400 line-through text-sm">
//               ${product.original}
//             </div>

//             <div className="flex mt-2">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <FaStar
//                   key={star}
//                   onClick={() => handleRating(product.id, star)}
//                   className={`cursor-pointer text-lg transition ${
//                     (ratings[product.id] || 0) >= star
//                       ? "text-yellow-400"
//                       : "text-gray-300 hover:text-yellow-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 text-center">
//         <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
//           View All Products
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Flashsales;
