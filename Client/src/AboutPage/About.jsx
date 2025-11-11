import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaSackDollar } from "react-icons/fa6";
import { TbTruckDelivery, TbUsers } from "react-icons/tb";
import { CurrencyDollar } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";




// Reusable Circle Icon
const CircleIcon = ({ icon }) => (
  <div className="flex justify-center items-center bg-gray-300 p-3 rounded-full">
    <div
      className="bg-black p-4 rounded-full text-white text-3xl transition-all duration-300
                 hover:bg-white hover:text-black hover:scale-110"
    >
      {React.createElement(icon)}
    </div>
  </div>
);


// Cards Data (each card includes an icon)
const cardsData = [
  { id: 1, icon: TbTruckDelivery, number: "10.5k", text: "Sallers active our site" },
  { id: 2, icon: CurrencyDollar, number: "33k", text: "Monthly Product Sale" },
  { id: 3, icon: TbUsers, number: "45.5k", text: "Customer active in our site" },
  { id: 4, icon: FaSackDollar, number: "25k", text: "Anual gross sale in our site" },
];

// Team Data
const teamData = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    image: "src/assets/Tom cruise.png",
    instagram: "https://instagram.com/tomcruise",
    twitter: "https://twitter.com/tomcruise",
    linkedin: "https://linkedin.com/in/tomcruise",
  },
  {
    name: "Emma Watson",
    title: "Chief Marketing Officer",
    image: "src/assets/Emma watson.png",
    instagram: "https://instagram.com/emmawatson",
    twitter: "https://twitter.com/emmawatson",
    linkedin: "https://linkedin.com/in/emmawatson",
  },
  {
    name: "Will Smith",
    title: "Chief Technology Officer",
    image: "src/assets/will smit.png",
    instagram: "https://instagram.com/willsmith",
    twitter: "https://twitter.com/willsmith",
    linkedin: "https://linkedin.com/in/willsmith",
  },
   {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    image: "src/assets/Tom cruise.png",
    instagram: "https://instagram.com/tomcruise",
    twitter: "https://twitter.com/tomcruise",
    linkedin: "https://linkedin.com/in/tomcruise",
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: "src/assets/Emma watson.png",
    instagram: "https://instagram.com/emmawatson",
    twitter: "https://twitter.com/emmawatson",
    linkedin: "https://linkedin.com/in/emmawatson",
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    image: "src/assets/will smit.png",
    instagram: "https://instagram.com/willsmith",
    twitter: "https://twitter.com/willsmith",
    linkedin: "https://linkedin.com/in/willsmith",
  },
  {
    name: "Emma Watson",
    title: "Chief Marketing Officer",
    image: "src/assets/Emma watson.png",
    instagram: "https://instagram.com/emmawatson",
    twitter: "https://twitter.com/emmawatson",
    linkedin: "https://linkedin.com/in/emmawatson",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 lg:px-16 py-10">
       

      {/*  About Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mb-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 ml-8">Our Story</h1>
          <p className="text-gray-700 leading-relaxed text-[15px] ml-8">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace
            with an active presence in Bangladesh. Supported by a wide range of tailored
            marketing, data, and service solutions, Exclusive has 10,500 sellers and 300
            brands, serving over 3 million customers across the region.
            <br /><br />
            Exclusive offers a diverse assortment in categories ranging from consumer
            electronics to fashion, with more than 1 million products.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="./src/assets/About page ad(side image).png"
            alt="About us"
            className="rounded-xl shadow-xl w-full max-w-[400px] md:max-w-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/*  Stats Cards Section  */}
      <section className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {cardsData.map(({ id, icon, number, text, link }) => (
            <Link
              key={id}
              to={link}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl
                         w-[230px] h-[230px] flex flex-col justify-center items-center text-center 
                         transition-all duration-300 hover:bg-red-400 hover:text-white group"
            >
              <div className="mb-4">
                <CircleIcon icon={icon} />
              </div>

              <div className="text-2xl font-bold">{number}</div>
              <div className="text-sm mt-1">{text}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto mb-15">
          <style>{`
            .swiper-pagination-bullet {
              background-color: rgb(209 213 219) !important;
              opacity: 1 !important;
            }
            .swiper-pagination-bullet-active {
              background-color: rgb(239 68 68) !important;
            }
          `}</style>

          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !bg-gray-300 !w-[10px] !h-[10px] !rounded-full mx-1 transition-all duration-300",
              bulletActiveClass:
                "!bg-red-500 !border-2 !border-gray-400",
            }}
            spaceBetween={25}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-15"
          >
            {teamData.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="w-[300px] h-[420px] md:w-[320px] mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 bg-white">
                  <div className="bg-gray-100 flex justify-center items-center h-[300px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[280px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{member.title}</p>
                    <div className="flex justify-center gap-6 text-xl">
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors duration-300">
                        <FaTwitter />
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                        <FaInstagram />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default About;
