import { useEffect, useState } from "react";

function Categories() {
  const [time, setTime] = useState({
    hours: 12,
    days: 5,
    minutes: 59,
    seconds: 29,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
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
    <section className="w-full px-4 md:px-10 lg:px-16 mt-10">
      <article className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-8">

          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col">
            <p className="text-sm text-green-400">Categories</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-semibold leading-tight">
              Enhance Your <br /> Music Experience
            </h2>

            {/* TIMER */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                ["Hrs", time.hours],
                ["Days", time.days],
                ["Min", time.minutes],
                ["Sec", time.seconds],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-[10px] font-semibold"
                >
                  <span className="text-xl font-bold">
                    {String(value).padStart(2, "0")}
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <button className="mt-10 bg-green-400 hover:bg-green-500 transition px-8 py-3 rounded font-semibold w-max">
              Buy Now!
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="src/assets/JBL_BOOMBOX.png"
              className="w-64 sm:w-80 md:w-[380px] lg:w-[450px] object-contain"
              alt="speaker"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Categories;
