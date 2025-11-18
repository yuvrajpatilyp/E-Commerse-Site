
import React, { useState } from "react";
import Card from "../Reusable/Card";
import NavigationBar from "../Reusable/NavigationBar";
import Footer from "../Reusable/Footer"
import Menshoes1 from '../assets/MenShoes/adidas.jpg'
import Menshoes2 from '../assets/MenShoes/FTR Xtraflow Running.jpg'
import MenShoes3 from '../assets/MenShoes/Genyy sneaker pro.jpg'
import Menshoes4 from '../assets/MenShoes/pumashoes.jpg'
import Menshoes5 from '../assets/MenShoes/Redtape.jpg'
import Menshoes6 from '../assets/MenShoes/Runningshoes.jpg'
import Menshoes7 from '../assets/MenShoes/Sterlinn Running Shoes.jpg'
import Menshoes8 from '../assets/MenShoes/Woodlang running shoes.jpg'

function Mensshoes() {
  const [cart, setCart] = useState([]);
   
  
      const addToCart = (product) => {
          setCart((prev) => [...prev, product]);
          console.log("Added to cart:", product);
      };
      
  return (
    <>
  
    <div className=" ms-12 p-6">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-8">
        <Card
          image={Menshoes1}
          title="Adidas"
          newprice="$120"
          oldprice="$160"
          discount="40%"
          onAddToCart={addToCart}
        />
        <Card
          image={Menshoes2}
          title="FTR Xtraflow Running shoes"
          newprice="$80"
          oldprice="$160"
          discount="50%"
          onAddToCart={addToCart}
        />
        <Card
          image={MenShoes3}
          title="Genyy sneaker pro"
          newprice="$30"
          oldprice="$107"
          discount="70%"
          onAddToCart={addToCart}
        />
        <Card
          image={Menshoes4}
          title="Pumashoes"
          newprice="$60"
          oldprice="$100"
          discount="40%"
          onAddToCart={addToCart}
        />
        <Card
          image={Menshoes5}
          title="Redtape shoes"
          newprice="$140"
          oldprice="$200"
          discount="30%"
          onAddToCart={addToCart}
        />
        <Card
          image={Menshoes6}
          title="Runningshoes"
          newprice="$50"
          oldprice="$100"
          discount="50%"
          onAddToCart={addToCart}
        />
        <Card
          image={Menshoes7}
          title="Sterlinn Running Shoes"
          newprice="$80"
          oldprice="$100"
          discount="20%"
          onAddToCart={addToCart}

        />
        <Card
          image={Menshoes8}
          title="Woodlang running shoes"
          newprice="$60"
          oldprice="$100"
          discount="40%"
          onAddToCart={addToCart}
        />
      </div>
    </div>
    </>
  );
}

export default Mensshoes;
