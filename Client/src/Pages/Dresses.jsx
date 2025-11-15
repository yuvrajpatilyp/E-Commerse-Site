import React from 'react'
import Card from '../Reusable/Card'
import Dress1 from '../assets/Dresses/Women  Pink Calf Length Dress.jpg'
import Dress2 from '../assets/Dresses/women fit and flare.jpg'
import Dress3 from '../assets/Dresses/Women fit and flare pink.jpg'
import Dress4 from '../assets/Dresses/Women Flare GreenDress.jpg'
import Dress5 from '../assets/Dresses/women Maroon dress.jpg'
import Dress6 from '../assets/Dresses/women Maxi Beige .jpg'
import Dress7 from '../assets/Dresses/women maxi multicolor.jpg'
import Dress8 from '../assets/Dresses/women muticolor black dress.jpg'

function Dresses() {
  return (
    <div className='ms-12 p-6'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center '>
        <Card  
      image={Dress1}
       title="Women Pink Calf Length Dress"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />

       <Card  
      image={Dress2}
       title="Women fit and flare"
       newprice="$50"
       oldprice="$100"
       discount="50%"
      />

       <Card  
      image={Dress3}
       title="Women fit and flare pink"
       newprice="$30"
       oldprice="$50"
       discount="40%"
      />


       <Card  
      image={Dress4}
       title="Women Flare GreenDress"
       newprice="$50"
       oldprice="$90"
       discount="44%"
      />
    </div>
        


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center mt-8 '>

         <Card  
      image={Dress5}
       title="Women Maroon dress"
       newprice="$70"
       oldprice="$120"
       discount="41%"
      />

       <Card  
      image={Dress6}
       title="Women Maxi Beige"
       newprice="$119"
       oldprice="$199"
       discount="40%"
      />

       <Card  
      image={Dress7}
       title="Women maxi multicolor"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />

       <Card  
      image={Dress8}
       title="Women muticolor black dress"
       newprice="$70"
       oldprice="$100"
       discount="30%"
      />
      </div>
    </div>
  )
}

export default Dresses
