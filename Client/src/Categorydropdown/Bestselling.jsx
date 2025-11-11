import React from 'react'

function Bestselling(props) {
  return (
    <div>
       <>
   
      <div className='mt-16   '>
        <div className='bg-gray-100 w-64 h-60 p-10'>
      <img src={props.img}  />
      </div>
        <h1>{props.title}</h1>

    <div className='flex space-x-4'>
        <h1 className='text-red-500'>{props.new}</h1>
        <h1 className='text-gray-400 line line-through'>{props.old}</h1>
    </div>  
         
       
    </div>

    </>
    </div>
  )
}

export default Bestselling
// shadow-md transform transition-transform duration-300 hover:scale-105