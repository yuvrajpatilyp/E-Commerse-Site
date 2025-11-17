import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopHeader from "./Reusable/TopHeader";
import NavigationBar from "./Reusable/NavigationBar";
import Footer from "./Reusable/Footer";

import Home from "./home/Home";
import Shirts from "./Pages/Shirts";
import Pants from "./Pages/Pants";
import Mensshoes from "./Pages/Mensshoes";
import WomenShoes from './Pages/WomenShoes';
import Dresses from './Pages/Dresses';
import Laptops from './Pages/Laptop';
import Mobile from './Pages/Mobile'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <TopHeader />
      <NavigationBar isLoggedIn={isLoggedIn} />

      {/* ROUTES HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens/shirts" element={<Shirts />} />
        <Route path="/mens/pants" element={<Pants />} />
        <Route path="/mens/shoes" element={<Mensshoes />} />
        <Route path="/womens/dresses" element={<Dresses />} />
        <Route path="/womens/shoes" element={<WomenShoes />} />
        <Route path="/electronics/laptops" element={<Laptops />} />
        <Route path="/electronics/mobiles" element={<Mobile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

 {/* <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

      
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}