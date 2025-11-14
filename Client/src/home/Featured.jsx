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
        <h2 className="text-3xl font-bold">New Arrival</h2>
        </div>
      </div>
 
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center ml-30 mx-auto">
 
        {/* PlayStation 5 */}
        <div className="relative bg-black h-[550px] w-[530px] flex items-center justify-center rounded ">
          <img
            src="src\assets\playstationps5.png"
            alt="PS5"
            className="w-full h-full object-contain"
          />
 
          <div className="absolute bottom-8 left-8 text-white max-w-xs">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="text-sm mt-2">Black and White version of the PS5 coming out on sale.</p>
 
           <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 hover:underline cursor-pointer transition">
            Shop Now
           </button>
          </div>
        </div>
 
 
        {/* Right side coloum */}
        <div className="flex flex-col gap-4 w-[660px] ml-20">
 
          {/* Women’s Collection */}
          <div className="relative bg-black h-[285px] rounded">
            <img
              src="src\assets\attractive-woman.png"
              className="w-full h-full object-contain"
            />
 
            <div className="absolute bottom-6 left-6 text-white max-w-[170px]">
              <h3 className="text-2xl font-bold whitespace-nowrap">Women's Collections</h3>
              <p className="text-xs mt-1 ">Featured woman collections that give you another vibe.</p>
              <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 hover:underline cursor-pointer transition">
                Shop Now
              </button>
            </div>
          </div>
 
          {/*Speakers and Perfume */}
          <div className="grid grid-cols-2 gap-4 ">
 
            {/* Speakers */}
            <div className="relative bg-black h-[250px] flex items-center justify-center rounded">
              <img
                src="src\assets\speaker.png"
                className="w-[60%] object-contain"
              />
              <div className="absolute bottom-6 left-6 text-white max-w-[120px]">
                <h3 className="text-lg font-bold">Speakers</h3>
                <p className="text-xs mt-1 whitespace-nowrap">Amazon wireless speakers</p>
                <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 hover:underline cursor-pointer transition">
                  Shop Now
                </button>
              </div>
            </div>
 
            {/* Perfume */}
            <div className="relative bg-black h-[250px] flex items-center justify-center rounded">
               <img
                  src="src/assets/gucciperfume.png"
                  className="w-[70%] object-contain"
               />
               <div className="absolute bottom-6 left-6 text-white max-w-[120px]">
                   <h3 className="text-lg font-bold">Perfume</h3>
                   <p className="text-xs mt-1 whitespace-nowrap">GUCCI INTENSE OUD EDP</p>
                   <button className="mt-2 text-white text-xs font-medium underline hover:text-red-400 hover:underline cursor-pointer transition">
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
 
export default Featured