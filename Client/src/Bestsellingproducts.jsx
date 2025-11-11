import React from 'react'
import Bestselling from './Categorydropdown/Bestselling'
import shirt from './assets/The North coat.png'
import bag from './assets/Gucci duffle bag.png'
import cooler from './assets/RGB liquid cooler.png'
import table from './assets/Small Book self.png'

 

function Bestsellingproducts() {
  return (
      <> 
          <div className='flex'>
          <div class=" w-6 h-10 bg-red-500 rounded-lg  ms-33 mt-22  "></div> 
            <h3 className=' text-red-500 text-2xl font-semibold ms-4 mt-22'>This Month</h3>
             </div>
             <div className='flex relative'>
              <h1 className='text-3xl ms-33 mt-6 font-semibold '>Best Selling Product</h1>
               <button className='bg-red-500 h-14 w-32 text-amber-50  rounded-sm  mt-2 font-semibold cursor-pointer absolute right-[276px]'>View All</button>
               </div>
              

           
       

          <div className='flex ms-32 h-60 mx-9 space-x-8'>
              <Bestselling img={shirt} title="The north coat" new="$260" old="$360" />
              <Bestselling img={bag} title="Gucci duffle bag" new="$960" old="$1160" />
              <Bestselling img={cooler} title="RGB liquid CPU Cooler" new="$160" old="$170" />
              <Bestselling img={table} title="Small BookSelf" new="$360" />

          </div>
      </>
  )
}


export default Bestsellingproducts
