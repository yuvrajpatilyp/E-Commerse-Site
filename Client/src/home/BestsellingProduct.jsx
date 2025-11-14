import React from 'react'

import Card from '../Reusable/Card'
 
function BestsellingProduct() {
  return (
    <>
     <div className="px-35 py-10 mt-14">
        <div className="flex items-center gap-2 mb-1 ">
          <div className="w-4 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">this month</h2>
        </div>
   
         <div className="flex items-center justify-between mb-4 mr-10 ">
           <h2 className="text-3xl font-bold">Best Selling Products</h2>
           <div>
            <button className='h-10 w-30 bg-red-600 hover:bg-red-900  text-white text-base'>View all </button>
           </div>
           </div>
         
 
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
 
           <Card
           image='src/assets/The North coat.png'
           title='The north coat'
           newprice='234'
           oldprice='345'
           discount='12%'/>
 
            <Card
           image='src/assets/Gucci duffle bag.png'
           title='The north coat'
           newprice='234'
           oldprice='345'
           discount='12%'/>
 
            <Card
           image='src/assets/RGB liquid cooler.png'
           title='The north coat'
           newprice='234'
           oldprice='345'
           discount='12%'/>
 
           <Card
           image='src/assets/Small Book self.png'
           title='The north coat'
           newprice='234'
           oldprice='345'
           discount='12%'/>
 
           </div>
           </div>
 
           
   
    </>
  )
}
 
export default BestsellingProduct