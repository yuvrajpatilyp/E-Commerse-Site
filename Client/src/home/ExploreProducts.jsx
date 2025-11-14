import Card from '../Reusable/Card'
 
import React from 'react'
function ExploreProducts() {
  return (
    <div className="px-36 py-10">
 
      {/* Heading */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-7 bg-red-600 rounded"></div>
          <h2 className="text-gm font-semibold text-red-600">Our Products</h2>
        </div>
 
         <div className="flex items-center justify-between mb-4">
           <h2 className="text-3xl font-bold">Explore Our Products</h2>
          <div className="flex gap-2">
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            ←
           </button>
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            →
           </button>
          </div>
        </div>
 
      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
 
        <Card
          image="./src/assets/Breed dry dog food.png"
          title="Breed Dry Dog Food"
          newprice="$960"
        />
 
        <Card
          image="./src/assets/Canon EOS DSLR Camera.png"
          title="CANON EOS DSLR Camera"
          newprice="$100"
        />
 
        <Card
          image="./src/assets/ASUS FHD Laptop.png"
          title="ASUS FHD Gaming Laptop"
          newprice="$360"
        />
 
        <Card
          image="./src/assets/Curology product set.png"
          title="Curology Product Set"
          newprice="$700"
         
        />
         
        <Card
          image="./src/assets/Kids Electric car.png"
          title="Kids Electric Car"
          newprice="$960"
        />
 
        <Card
          image="./src/assets/jr zoom soccer.png"
          title="Jr Zoom Soccer Cleats"
          newprice="$100"
        />
 
        <Card
          image="./src/assets/GP11 Shooter USB Gamepad.png"
          title="GP11 Shooter USB Gamepad"
          newprice="$360"
        />
 
        <Card
          image="./src/assets/Quilited satin jacket.png"
          title="Quilited Satin Jacket"
          newprice="$700"
        />
      </div>
 
       <button className="mx-auto mt-3 bg-red-600 text-white text-sm px-8 py-3 rounded block hover:bg-red-900">
         View All Products
       </button>
    </div>
  )
}
 
export default ExploreProducts