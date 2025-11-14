 import { useEffect, useState } from "react";
function Categories() {
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
  <section className="w-[1000px]  max-w-full mx-auto mt-5">
  <article className="bg-gradient-to-r from-gray-900 to-black overflow-hidden text-white h-[400px] ">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mr-10">
     
      <div className="p-8 ml-5">
        <p className="text-sm text-green-400">Categories</p>
 
        <h2 className="text-5xl mt-4 font-sm-bold leading-tight">
          Enhance Your <br /> Music Experience
        </h2>
 
        <div className="flex flex-row gap-4 mt-8">
 
          <div className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-[11px] font-semibold">
            <span className="text-xl font-bold">{String(time.hours).padStart(2,"0")}</span>
            Hrs
          </div>
 
          <div className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-[11px] font-semibold">
            <span className="text-xl font-bold">{String(time.days).padStart(2,"0")}</span>
            Days
          </div>
 
          <div className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-[11px] font-semibold">
            <span className="text-xl font-bold">{String(time.minutes).padStart(2,"0")}</span>
            Min
          </div>
 
          <div className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-[11px] font-semibold">
            <span className="text-xl font-bold">{String(time.seconds).padStart(2,"0")}</span>
            Sec
          </div>
 
        </div>
        <button className="mt-10 bg-green-400 hover:bg-green-900 transition px-10 py-3 rounded font-semibold">
          Buy Now!
        </button>
      </div>
        <img
           src="src/assets/JBL_BOOMBOX.png"
           className="w-full md:w-[500px] mx-auto object-contain mr-100"
           alt="speaker"
        />
 
    </div>
  </article>
  </section>
  )
}
 
export default Categories