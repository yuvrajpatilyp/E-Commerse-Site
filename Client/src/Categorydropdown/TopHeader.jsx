import React from 'react'

function TopHeader() {
  return (
    <>
      <nav className='bg-black text-white h-9 justify-center md:flex gap-3.5 '>  
      <p className='ms-96'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% </p>
      <p className='underline font-bold text-white gap-2 cursor-pointer'>Shop Now</p>

      <div className='space-x-9 ms-60 text-white border-s-black'>
          <select className='bg-black' name="languages" id="" >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Kannada">Kannada</option>
        </select>
        </div>

      </nav>
     
    </>
  )
}

export default TopHeader
