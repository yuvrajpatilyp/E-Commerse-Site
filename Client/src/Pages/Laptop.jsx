import React from 'react'
import Acer from '../assets/Laptop/AcerAspire 3 Intel.jpg'
import Apple from '../assets/Laptop/Apple Macbook Air M2.jpg'
import ASUS from '../assets/Laptop/ASUS Expertbookp1.jpg'
import Dell from '../assets/Laptop/DELL Inspiron 15.jpg'
import Dellplus from '../assets/Laptop/Dell14plus Laptop.jpg'
import Hp from '../assets/Laptop/Hpintelcore 13th Gen.jpg'
import Lenovo from '../assets/Laptop/Lenovo Chromebook Laptop.jpg'
import Samsung from '../assets/Laptop/Samsung Book4 13gen.jpg'
import Card from '../Reusable/Card'

function Laptop() {
    return (
    <div className='ms-12 p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Card
      image={Acer}
       title="Acer Aspire 3 Intel "
       newprice="$179"
       oldprice="$199"
       discount="10%"
      />

       <Card
      image={Apple}
       title="Apple MAcBook Air M2"
       newprice="$189"
       oldprice="$199"
       discount="5%"
      />

       <Card
      image={ASUS}
       title="ASUS Expert Book p1"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />


       <Card
      image={Dell}
       title="DELL Inspiron 15"
       newprice="$126"
       oldprice="$180"
       discount="30%"
      />
    </div>



      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>

         <Card
      image={Dellplus}
       title="Delkl 14 plus Laptop"
       newprice="$80"
       oldprice="$160"
       discount="50%"
      />

       <Card
      image={Hp}
       title="Hp intel core 13 gen i3"
       newprice="$102"
       oldprice="$170"
       discount="40%"
      />

       <Card
      image={Lenovo}
       title="Lenovo ChromeBook Laptop"
       newprice="$98"
       oldprice="$140"
       discount="30%"
      />

       <Card
      image={Samsung}
       title="Samsung Book 4 13 gen"
       newprice="$120"
       oldprice="$160"
       discount="40%"
      />
      </div>
    </div>
  )
 
}

export default Laptop
