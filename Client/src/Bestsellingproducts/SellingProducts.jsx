import React from 'react'
import { Heart } from 'lucide-react'
import { Eye } from 'lucide-react'

function SellingProducts({img,price,title}) {
  return (
    <>
        <div className="w-60 mt-10 " >
        
             {/* IMAGE BOX */}
             <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
               <img src={img} className="w-40 h-60 object-contain mx-auto"/>
              
               <div className="absolute top-3 right-3 flex flex-col gap-2">
                 <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
                   <Heart size={16}/>
                 </button>
                 <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
                   <Eye size={16}/>
                 </button>
               </div>
               <button className="absolute bottom-0 w-full bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition">
                 Add To Cart
               </button>
             </div>
        
             <h3 className="text-sm font-semibold mt-3">{title}</h3>
             <div className="flex gap-2 items-center text-sm">
               <span className="text-red-500 font-bold">{price}</span>
                {/* <RatingStars /> */}
             </div>
           </div>
    </>


  )
}

export default SellingProducts