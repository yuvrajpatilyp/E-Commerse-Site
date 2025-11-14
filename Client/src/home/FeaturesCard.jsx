import React from "react";
 
function FeaturesCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-lg mt-3">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
 
export default FeaturesCard;