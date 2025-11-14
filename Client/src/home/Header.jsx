import React from 'react'
 
function Header() {
  return (
    <>
    {/* Header part*/}
    <div className='bg-[#000000] h-15  w-full text-white justify-items-center inline-block'>
 
      <p className=' capitalize font-sans text-gray-300 text-lg  pt-4 ml-60'>
         Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
 
           {/* shop now section*/}
              <a  className='text-white ml-3 underline font-semibold' href='#'>ShopNow</a>  
 
            {/* Drop down list*/}
               <select className='text-white inline-block ml-50 '>
                 <option  className='bg-[#000000]'value="English">English</option>  
                 <option  className='bg-[#000000]' value="hindi">Hindi</option>
               </select>  
      </p>
 
     </div>  
    </>
  )
}
 
export default Header