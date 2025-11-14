import { Truck, Headphones, ShieldCheck } from "lucide-react";
import FeatureCard from "./FeaturesCard";
 
function FeaturesStrip() {
  const features = [
    {
     
      icon: <Truck color="white" size={32} />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140"
    },
    {
      icon: <Headphones color="white" size={32} />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support"
    },
    {
      icon: <ShieldCheck color="white" size={32} />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days"
    }
  ];
 
  return (
    <section className="w-full flex justify-center items-center gap-24 py-10">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </section>
  )
}
 
export default FeaturesStrip;