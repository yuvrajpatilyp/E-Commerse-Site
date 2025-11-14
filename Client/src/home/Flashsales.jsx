import React, { useState, useEffect } from "react";
import Card from "../Reusable/Card";

function Flashsales() {
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
    <>
      <div className="px-4 md:px-12 py-10 mt-10">

        {/* Heading */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">Today’s</h2>
        </div>

        {/* Flash Sales + Timer */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-5">

          <h2 className="text-3xl font-bold w-full md:w-auto text-center md:text-left">
            Flash Sales
          </h2>

          {/* Timer */}
          <div className="flex gap-3 mr-90">
            {[
              ["Hrs", time.hours],
              ["Days", time.days],
              ["Min", time.minutes],
              ["Sec", time.seconds],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="w-16 h-16 flex flex-col items-center justify-center"
              >
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-xl font-bold">
                  {String(value).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              ←
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              →
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            image="./src/assets/HAVIT HV-G92 Gamepad.png"
            newprice="$120"
            oldprice="231"
            title="HAVIT HV-G92 Gamepad"
            discount="12%"
          />
          <Card
            image="./src/assets/AK-900 Wired Keyboard.png"
            newprice="$156"
            oldprice="231"
            title="AK-900 Wired Keyboard"
            discount="12%"
          />
          <Card
            image="src/assets/IPS LCD monitor.png"
            newprice="$156"
            oldprice="231"
            title="IPS LCD Gaming Monitor"
            discount="12%"
          />
          <Card
            image="src/assets/S-Series Chair.png"
            newprice="$156"
            oldprice="231"
            title="S-Series Gaming Chair"
            discount="12%"
          />
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center my-10">
        <button className="px-8 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          View All Products
        </button>
      </div>
    </>
  );
}

export default Flashsales;
