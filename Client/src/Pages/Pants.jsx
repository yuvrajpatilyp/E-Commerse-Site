import React from 'react'
import Card from '../Reusable/Card'
import Pant1 from '../assets/pants/Mens dark blue pant.jpg'
import Pant2 from '../assets/pants/Mens dark grey.jpg'
import Pant3 from '../assets/pants/Mens loose fit pant.jpg'
import Pant4 from '../assets/pants/Mens regular fit beige.jpg'
import Pant5 from '../assets/pants/Mens slim fit black.jpg'
import Pant6 from '../assets/pants/Mens slim fit grey.jpg'
import Pant7 from '../assets/pants/Mens slim fit pant.jpg'
import Pant8 from '../assets/pants/Mens white cotton.jpg'

function Pants() {
  return (
    <div className='ms-12 p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Card  
      image={Pant1}
       title="Mens dark blue pant"
       newprice="$179"
       oldprice="$199"
       discount="10%"
      />

       <Card  
      image={Pant2}
       title="Mens dark grey pant"
       newprice="$189"
       oldprice="$199"
       discount="5%"
      />

       <Card  
      image={Pant3}
       title="Mens loose fit pant"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />


       <Card  
      image={Pant4}
       title="Mens regular fit beige pant"
       newprice="$126"
       oldprice="$180"
       discount="30%"
      />
    </div>
        


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>

         <Card  
      image={Pant5}
       title="Mens slim fit black pant"
       newprice="$80"
       oldprice="$160"
       discount="50%"
      />

       <Card  
      image={Pant6}
       title="Mens slim fit grey pant"
       newprice="$102"
       oldprice="$170"
       discount="40%"
      />

       <Card  
      image={Pant7}
       title="Mens slim fit pant"
       newprice="$98"
       oldprice="$140"
       discount="30%"
      />

       <Card  
      image={Pant8}
       title="Mens white cotton pant"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />
      </div>
    </div>
  )
}

export default Pants
