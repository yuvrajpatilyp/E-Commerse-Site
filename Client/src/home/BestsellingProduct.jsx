
import Card from "../Reusable/Card";
import React, { useState, } from "react";
function BestsellingProduct() {
   const [cart, setCart] = useState([]);
     
      const addToCart = (product) => {
          setCart((prev) => [...prev, product]);
          console.log("Added to cart:", product);
      };
  return (
    <>
      <div className="px-4 md:px-12 py-10 mt-10">

        {/* Red Side Bar + Text */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-10 bg-red-600 rounded-sm"></div>
          <h2 className="text-xl font-semibold text-red-600">This Month</h2>
        </div>

        {/* Heading + Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Best Bangles Offer</h2>

          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
            View All
          </button>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <Card
            image="src/assets/Banglesset.webp"
            title="Elegant antique gold ruby traditional bangle set"
            newprice="3,340.00"
            oldprice="6,000.00"
            discount="sale"
            onAddToCart={addToCart}
          />

          <Card
            image="src\assets\Banglesset2.webp"
            title="Stunning antique gold traditional bangle set"
            newprice=" 5,610.00"
            oldprice="10,830.00"
            discount="sale"
            onAddToCart={addToCart}
          />

          <Card
            image="src\assets\Banglesset3.webp"
            title="Stunning intricate antique stone bangle set (set of 6 )"
            newprice="6,310.00"
            oldprice="9,930.00"
            discount="sale"
            onAddToCart={addToCart}
          />

          <Card
            image="src\assets\Banglesset4.webp"
            title="Stunning antique gold ruby traditional bangle set"
            newprice="5,340.00"
            oldprice="7,590.00"
            discount="sale"
            onAddToCart={addToCart}
          />

        </div>
      </div>
    </>
  );
}

export default BestsellingProduct;
