import React from "react";

import { Truck, Headphones, ShieldCheck } from "lucide-react";

import FeatureCard from "./FeaturesCard";
 
function FeaturesStrip() {

  return (
<section className="flex flex-wrap justify-center gap-24  py-12 bg-white">
<FeatureCard

        Icon={Truck}

        title="FREE AND FAST DELIVERY"

        description="Free delivery for all orders over $140"

      />
 
      <FeatureCard

        Icon={Headphones}

        title="24/7 CUSTOMER SERVICE"

        description="Friendly 24/7 customer support"

      />
 
      <FeatureCard

        Icon={ShieldCheck}

        title="MONEY BACK GUARANTEE"

        description="We reurn money within 30 days"

      />
</section>

  );

}
 
export default FeaturesStrip;

 