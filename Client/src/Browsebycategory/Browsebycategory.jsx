import React from 'react'
import { Camera, Laptop, Watch, Headphones,Smartphone,Gamepad2 } from "lucide-react";

function Browsebycategory() {
  return (
    <>
    {/* categories*/}

      <div className="px-35 py-10 mt-25">
        <div className="flex items-center gap-2 mb-1 ">
        <div className="w-4 h-10 bg-red-600 rounded-sm"></div>
        <h2 className="text-xl font-semibold text-red-600"> Categories </h2>
      </div>

        {/* broese by category */}  

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-3xl font-bold">Browse By Category</h2>
        <div className="flex gap-2"></div>

        {/* right and left arrow*/}

        <div className="flex gap-2 mr-20">
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            ←
           </button>
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            →
           </button></div>
      </div>
        
        {/* images */}

      <div className='mt-15  cursor-pointer '>
          <div className=' rounded-sm h-35 w-35 m-6 hover:bg-[#DB4444]  inline-block hover:text-white  justify-items-center outline-2 content-center '>
            <Smartphone size={45}/>
            <p>phones</p>
          </div>

          <div className=' rounded-sm h-35 w-35 m-6 hover:bg-[#DB4444]  inline-block hover:text-white  justify-items-center outline-2 content-center '>
            <Laptop size={45} />
            <p>Computers</p>
          </div>

          <div className=' rounded-sm h-35 w-35  m-6 hover:bg-[#DB4444] outline-2 hover:text-white  inline-block   justify-items-center  content-center'>
             <Watch size={45}/>
             <p>SmartWatch</p>
          </div>

          <div className=' rounded-sm h-35 w-35  m-6  text-black hover:bg-[#DB4444] hover:text-white outline-2  justify-items-center  content-center  inline-block '>
               <Camera size={45}/>
              <p>camera</p>
          </div>

          <div className=' rounded-sm h-35 w-35  m-6  hover:bg-[#DB4444]  hover:text-white justify-items-center outline-2 content-center   inline-block '>
              <Headphones size={45}/>
              <p>HeadPhones</p>
          </div>

          <div className= ' rounded-sm h-35 w-35 m-6   hover:bg-[#DB4444] hover:text-white hover:color- white  justify-items-center outline-2 content-center  inline-block '>
               <Gamepad2 size={45}/>
              <p>Gaming</p>
          </div>

          </div>
      </div>
    </>
  )
}

export default Browsebycategory