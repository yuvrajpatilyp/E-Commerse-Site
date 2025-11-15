import React from "react";
 
function FeatureCard({Icon: Icon, title, description }) {

  return (
<div className="flex flex-col items-center justify-center text-center space-y-2">
<div className="bg-black rounded-full p-4">
<Icon className="text-white" size={24} />
</div>
<h3 className="text-lg font-semibold">{title}</h3>
<p className="text-gray-500 text-sm">{description}</p>
</div>

  );

}
 
export default FeatureCard;

 