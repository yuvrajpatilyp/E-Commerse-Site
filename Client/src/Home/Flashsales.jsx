import React from 'react'
import Card from '../Reusable/Card'
import { useState,useEffect } from 'react';

function Flashsales() {
    const [time, setTime] = useState({
    hours: 12,
    days: 5,
    minutes: 59,
    seconds: 29
  });
 
  useEffect(() => {
    const interval = setInterval(() => {
 
      setTime(prev => {
        let { hours, days, minutes, seconds } = prev;
 
        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }
 
        return { hours, days, minutes, seconds };
      });
 
    }, 1000);
 
    return () => clearInterval(interval);
  }, []);
  return (
    <>
   
      {/* Heading */}
       <div className="px-35 py-10 mt-14">
        <div className="flex items-center gap-2 mb-1 ">
          <div className="w-4 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Today’s</h2>
        </div>
           
           
 
         <div className="flex items-center justify-between mb-4">
           <h2 className="text-3xl font-bold">Flash Sales</h2>

          <div className="flex flex-row mr-100 mb-2">
 
          <div className="w-14 h-14  bg-white text-black flex flex-col items-center justify-center text-[20px] font-semibold">
              Hrs
            <span className="text-2xl font-bold">{String(time.hours).padStart(2,"0")}</span>
           
          </div>
          <div className="w-14 h-14  bg-white text-black flex flex-col items-center justify-center text-[20px] font-semibold">
             Days
            <span className="text-2xl font-bold">{String(time.days).padStart(2,"0")}</span>
           
          </div>
 
          <div className="w-14 h-14  bg-white text-black flex flex-col items-center justify-center text-[20px] font-semibold">
              Min
            <span className="text-2xl font-bold">{String(time.minutes).padStart(2,"0")}</span>
          
          </div>
 
          <div className="w-14 h-14  bg-white text-black flex flex-col items-center justify-center text-[20px] font-semibold">
             Sec
            <span className="text-2xl font-bold">{String(time.seconds).padStart(2,"0")}</span>
           
          </div>
 
        </div>
          <div className="flex gap-2">
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            ←
           </button>
           <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            →
           </button>
          </div>
         
        </div>
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
 
      <Card
      image='./src/assets/HAVIT HV-G92 Gamepad.png'
      newprice='$120'
      oldprice='231'
      title="HAVIT HV-G92 Gamepad "
      discount='12%'
      />

      <Card
      image='./src/assets/AK-900 Wired Keyboard.png'
      newprice='$156'
      oldprice='231'
      title="AK-900 Wired Keyboard "
      discount='12%'
      />
      <Card
      image='src/assets/IPS LCD monitor.png'
      newprice='$156'
      oldprice='231'
      title="IPS LCD Gaming Monitor "
      discount='12%'
      />

      <Card
      image='src/assets/S-Series Chair.png'
       newprice='$156'
      oldprice='231'
      title="IPS LCD Gaming Monitor "
      discount='12%'
      />
    
        </div>
      </div>

      <div className='ml-170 h-10 w-50 bg-red-600  text-center  text-white  hover:bg-red-900 '>
        <button className='mt-2'>View All Products</button>
      </div>

    </>
  )
}

export default Flashsales