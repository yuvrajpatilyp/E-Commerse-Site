import React from 'react'

function Featured() {
  return (
    <section className="p-6 max-w-8xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-6 ml-32">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-7 bg-red-600 rounded"></div>
          <h2 className="text-sm font-semibold text-red-600 ">Featured</h2>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center ml-30 mx-auto">

        {/* BIG BANNER – Necklace */}
        <div className="relative bg-black h-[550px] w-[530px] flex items-center justify-center rounded">
          <img
            src="src\assets\necklace3.webp"  
            alt="Necklace"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-8 left-8 text-white max-w-xs">
            <h3 className="text-2xl font-bold">Royal Necklace Set</h3>
            <p className="text-1xl mt-2">
              Premium handcrafted diamond necklace with stunning detailing.
            </p>

            <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side Collection */}
        <div className="flex flex-col gap-4 w-[660px] ml-20">

          {/* Bridal Collection */}
          <div className="relative bg-black h-[285px] rounded">
            <img
              src="src\assets\necklace4.jpg" 
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 text-white max-w-[170px]">
              <h3 className="text-2xl font-bold whitespace-nowrap">
                Bridal Collections
              </h3>
              <p className="text-1xl mt-1">
                Exclusive bridal sets for every special moment.
              </p>
              <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Rings + Bracelet */}
          <div className="grid grid-cols-2 gap-4">

            {/* Gold Ring */}
            <div className="relative bg-black h-[250px] flex items-center justify-center rounded">
              <img
                src="src\assets\bangle7.webp"  
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6 text-white max-w-[120px]">
                <h3 className="text-lg font-bold">Gold Bangle</h3>
                <p className="text-1xl mt-1 whitespace-nowrap">
                  Elegant premium gold designs.
                </p>
                <button className="mt-2 text-white text-1xl font-medium underline hover:text-red-400 transition">
                  Shop Now
                </button>
              </div>
            </div>

            {/* diamond Bracelet */}
            <div className="relative bg-black h-[250px] flex items-center justify-center rounded">
              <img
                src="src\assets\diamondbracelet.webp"  
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6 text-white max-w-[120px]">
                <h3 className="text-lg font-bold">Bracelets</h3>
                <p className="text-1xl mt-1 whitespace-nowrap">
                  Latest trendy bracelet designs.
                </p>
                <button className="mt-2 text-white text-1xl font-medium underline hover:text-red-400 transition">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Featured;
