import React from 'react'
import Flashsales from './Categorydropdown/Flashsales'
import controller from './assets/HAVIT HV-G92 Gamepad.png'
import keyboard from  './assets/AK-900 Wired Keyboard.png'
import lcd from './assets/IPS LCD monitor.png'
import chair from './assets/S-Series Chair.png'
import { useState,useEffect } from 'react'

function Flashsection() {

  const [time, setTime] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (

<>
   <div class=" ">
    <div class="w-6 h-10 bg-red-500 rounded-lg  ms-33 mt-22">
      <h3 className=' text-red-500 text-2xl font-semibold ms-8'>Today's</h3>
    </div>
    <div className='flex '>
     <h1 className='text-3xl font-semibold ms-33 mt-8 '>Flash Sales</h1>
     <div className='mt-10 text-2xl ms-22 font-semibold'>
     {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
     </div>
    </div>
   
    <div className='ms-32 h-60  mx-9 space-x-7 flex'>
      <Flashsales  img={controller} title="HAVIT HV-G92 Gamepad" new="$120" old="$160 " />
      <Flashsales img={keyboard} title="Ak-900 Wired Keyboard" new="$960" old="$1160"/>
      <Flashsales img={lcd} title="IPS LCD Gaming Monitor" new="$370" old="$400"/>
      <Flashsales  img={chair} title="S-Series Comfort Chair" new="$375" old="$400" />
      
    </div>
    <div className='flex justify-center items-center mt-6'>
        <button type className='bg-red-500 h-8 px-4 text-amber-50 font-light mt-34 rounded-lg shadow-2xl cursor-pointer '>View All Products</button>
      </div>
      </div>
    </>
  )
}

export default Flashsection
