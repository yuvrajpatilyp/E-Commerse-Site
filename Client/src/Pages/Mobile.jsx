import React from 'react'

import pixel10 from '../assets/Mobiles/Googlepixel 10 indio.jpg'
import pixel10pro from '../assets/Mobiles/Googlepixel 10pro.jpg'
import pixel10profold from '../assets/Mobiles/Googlepixel 10profold.jpg'
import iphone17 from '../assets/Mobiles/Iphone17 White 256 gb.jpg'
import iphone17pro from '../assets/Mobiles/Iphone17pro DeepBlue 1tb.jpg'
import iphone17promax from '../assets/Mobiles/Iphone17promax 512gb.jpg'
import Samsungs24 from '../assets/Mobiles/SamsungS24.jpg'
import Samsungs25 from '../assets/Mobiles/SamsungS25.jpg'
import Card from '../Reusable/Card'

function Mobile() {
  return (
    <div>
      <div className='ms-12 p-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              <Card
            image={pixel10}
             title="Google pixel 10 indigo "
             newprice="$179"
             oldprice="$199"
             discount="10%"
            />
      
             <Card
            image={pixel10pro}
             title="Google pixel 10 pro "
             newprice="$189"
             oldprice="$199"
             discount="5%"
            />
      
             <Card
            image={pixel10profold}
             title="Google pixel 10 pro fold"
             newprice="$120"
             oldprice="$160"
             discount="40%"
            />
      
      
             <Card
            image={iphone17}
             title="Iphone 17 white 256gb"
             newprice="$126"
             oldprice="$180"
             discount="30%"
            />
          </div>
      
      
      
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
      
               <Card
            image={iphone17pro}
             title="Iphone 17 pro Deep Blue 1tb"
             newprice="$80"
             oldprice="$160"
             discount="50%"
            />
      
             <Card
            image={iphone17promax}
             title="Iphone 17 pro max Deep Blue 512 gb"
             newprice="$102"
             oldprice="$170"
             discount="40%"
            />
      
             <Card
            image={Samsungs24}
             title="Samsung S24 "
             newprice="$98"
             oldprice="$140"
             discount="30%"
            />
      
             <Card
            image={Samsungs25}
             title="Samsung S25"
             newprice="$120"
             oldprice="$160"
             discount="40%"
            />
            </div>
          </div>
    </div>
  )
}

export default Mobile
