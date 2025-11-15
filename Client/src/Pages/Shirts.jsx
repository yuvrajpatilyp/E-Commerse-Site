import React from 'react'
import Card from '../Reusable/Card'
import shirt1 from '../assets/Shirts/Mens casual blackwear.jpg'
import shirt2 from '../assets/Shirts/Mens casual white.jpg'
import shirt3 from '../assets/Shirts/Mens checks shirt.jpg'
import shirt4 from '../assets/Shirts/Mens regular fit blue.jpg'
import shirt5 from '../assets/Shirts/Mens regular fit green.jpg'
import shirt6 from '../assets/Shirts/Mens regular fit red.jpg'
import shirt7 from '../assets/Shirts/Mens regular fit solid gray.jpg'
import shirt8 from '../assets/Shirts/Mens slim fit brownwear.jpg'

function Shirts() {
  return (
    <div className='ms-12 p-6'>
      <div className= 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Card  
      image={shirt1}
       title="Mens casual blackwear"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />

       <Card  
      image={shirt2}
       title="Mens casual white"
       newprice="$149"
       oldprice="$199"
       discount="25%"
      />

       <Card  
      image={shirt3}
       title="Mens checks shirt"
       newprice="$99"
       oldprice="$179"
       discount="45%"
      />


       <Card  
      image={shirt4}
       title="Mens regular fit blue"
       newprice="$129"
       oldprice="$159"
       discount="19%"
      />
    </div>
        


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>

         <Card  
      image={shirt5}
       title="Mens regular fit green"
       newprice="$59"
       oldprice="$99"
       discount="40%"
      />

       <Card  
      image={shirt6}
       title="Mens regular fit red"
       newprice="$79"
       oldprice="$149"
       discount="47%"
      />

       <Card  
      image={shirt7}
       title="Mens regular fit solid gray"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />

       <Card  
      image={shirt8}
       title="Mens slim fit brownwear"
       newprice="$160"
       oldprice="$200"
       discount="20%"
      />
      </div>
    </div>
  )
}

export default Shirts
