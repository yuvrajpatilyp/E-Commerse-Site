import React from 'react'
import Card from '../Reusable/Card'
import womenshoes1 from '../assets/Womenshoes/Casual Women Sneakers.jpg'
import womenshoes2 from '../assets/Womenshoes/Women  juti sandal.jpg'
import womenshoes3 from '../assets/Womenshoes/Women Casual sandal.jpg'
import womenshoes4 from '../assets/Womenshoes/Women clogs sandal.jpg'
import womenshoes5 from '../assets/Womenshoes/Women Flats cream Sandal.jpg'
import womenshoes6 from '../assets/Womenshoes/Women Flats Sandal.jpg'
import womenshoes7 from '../assets/Womenshoes/Women heels sandal.jpg'
import womenshoes8 from '../assets/Womenshoes/Women sneakers.jpg'

function Shoes() {
  return (
    <div className='ms-12 p-6 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Card  
      image={womenshoes1}
       title="Casual Women Sneakers"
       newprice="$60"
       oldprice="$120"
       discount="50%"
      />

       <Card  
      image={womenshoes2}
       title="Women juti sandal"
       newprice="$120"
       oldprice="$160"
       discount="40%" 
       />

       <Card  
      image={womenshoes3}
       title="Women Casual sandal"
       newprice="$80"
       oldprice="$100"
       discount="20%"
      />


       <Card  
      image={womenshoes4}
       title="Women clogs sandal"
       newprice="$160"
       oldprice="$200"
       discount="20%"
      />
    </div>
        


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>

         <Card  
      image={womenshoes5}
       title="Women Flats cream Sandal"
       newprice="$70"
       oldprice="$100"
       discount="30%"
      />

       <Card  
      image={womenshoes6}
       title="Women Flats Sandal"
       newprice="$75"
       oldprice="$150"
       discount="50%"
      />

       <Card  
      image={womenshoes7}
       title="Women heels sandal"
       newprice="$100"
       oldprice="$200"
       discount="50%"
      />

       <Card  
      image={womenshoes8}
       title="Women sneakers"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />
      </div>
    </div>
  )
}

export default Shoes
