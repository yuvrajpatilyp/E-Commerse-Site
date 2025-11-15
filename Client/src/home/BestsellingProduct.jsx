import React from "react";
import Card from "../Reusable/Card";

function BestsellingProduct() {
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
          <h2 className="text-3xl font-bold">Best Selling Products</h2>

          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
            View All
          </button>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <Card
            image="src/assets/The North coat.png"
            title="The North Coat"
            newprice="234"
            oldprice="345"
            discount="12%"
          />

          <Card
            image="src/assets/Gucci duffle bag.png"
            title="Gucci Duffle Bag"
            newprice="234"
            oldprice="345"
            discount="12%"
          />

          <Card
            image="src/assets/RGB liquid cooler.png"
            title="RGB Liquid Cooler"
            newprice="234"
            oldprice="345"
            discount="12%"
          />

          <Card
            image="src/assets/Small Book self.png"
            title="Small Bookshelf"
            newprice="234"
            oldprice="345"
            discount="12%"
          />

        </div>
      </div>
    </>
  );
}

export default BestsellingProduct;
