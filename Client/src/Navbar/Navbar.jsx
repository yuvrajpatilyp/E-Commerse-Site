import React from 'react'
import { Search, ShoppingBasketIcon } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { FiSearch } from 'react-icons/fi'
function Navbar() {
  return (
    <>
      <div className='pt-8'>
       <p className='text-3xl font-bold inline-block ml-30' >Exclusive</p>
      
      {/*list */}
     <li className='inline-block ml-42 text-lg hover:red-300'>
         <ul className='inline-block ml-6 hover:underline'>  Home</ul>
         <ul className='inline-block ml-14 hover:underline'> Contact</ul>
         <ul className='inline-block ml-14 hover:underline'> About</ul>
         <ul className='inline-block ml-14 hover:underline'> sign up</ul>
     </li>
    
    <div>
      <input
                   type="text"
                   placeholder="Search..."
                   className="bg-gray-100 rounded-lg px-3 py-1"
                 />
                 <FiSearch className="absolute right-2 top-2 text-gray-500" />
               </div>

       {/*button for search*/}
        <button className='bg-gray-100 h-13 w-20'> <Search size={18} className="  text-gray-500 inline-block" /></button>
         
         {/*icon lucide-react*/}
         <div className='inline-block'>
            <Heart className='inline-block ml-7 '/> <ShoppingCart className='inline-block ml-3' />
         </div>
     </div>
     <hr className='mt-5'/> 
     
    </>
  )
}
export default Navbar