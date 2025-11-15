import React from "react";
import Sidebar from "../home/Sidebar";
import Flashsales from "../home/Flashsales";
import Browsebycategory from "../home/Browsebycategory";
import BestsellingProduct from "../home/BestsellingProduct";
import Categories from "../home/Categories";
import ExploreProducts from "../home/ExploreProducts";
import Featured from "../home/Featured";
import FeaturesStrip from "../home/FeaturedStrip";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Flashsales />
      <Browsebycategory />
      <BestsellingProduct />
      <Categories />
      <ExploreProducts />
      <Featured />
      <FeaturesStrip />
    </>
  );
}
