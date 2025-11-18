import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopHeader from "./Reusable/TopHeader";
import NavigationBar from "./Reusable/NavigationBar";
import Footer from "./Reusable/Footer";
import Home from "./home/Home";

import GoldBangles from "./Pages/GoldBangles";
import GoldEarrings from "./Pages/GoldEarrings";
import GoldNecklace from "./Pages/GoldNecklace";
import GoldRings from "./Pages/GoldRings";

import DiamondEarrings from "./Pages/DiamondEarrings";
import DiamondBangles from "./Pages/DiamondBangles";
import DiamondNecklace from "./Pages/DiamondNecklace";
import DiamondRings from "./Pages/DiamondRings";

import PlatinumBangles from "./Pages/PlatinumBangles";
import PlatinumEarrings from "./Pages/PlatinumEarrings";
import PlatinumNecklace from "./Pages/PlatinumNecklace";
import PlatinumRings from "./Pages/PlatinumRings";

import SilverBangles from "./Pages/SilverBangles";
import SilverRings from "./Pages/SilverRings";
import SilverEarrings from "./Pages/SilverEarrings";
import SilverNecklace from "./Pages/SilverNecklace";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <TopHeader />
      <NavigationBar isLoggedIn={isLoggedIn} />

      {/* ROUTES MUST WRAP ALL PAGES */}
      <div className="w-full overflow-x-hidden">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* GOLD */}
          <Route path="/gold/bangles" element={<GoldBangles />} />
          <Route path="/gold/earrings" element={<GoldEarrings />} />
          <Route path="/gold/necklace" element={<GoldNecklace />} />
          <Route path="/gold/rings" element={<GoldRings />} />

          {/* DIAMOND */}
          <Route path="/diamond/bangles" element={<DiamondBangles />} />
          <Route path="/diamond/earrings" element={<DiamondEarrings />} />
          <Route path="/diamond/necklace" element={<DiamondNecklace />} />
          <Route path="/diamond/rings" element={<DiamondRings />} />

          {/* PLATINUM */}
          <Route path="/platinum/bangles" element={<PlatinumBangles />} />
          <Route path="/platinum/earrings" element={<PlatinumEarrings />} />
          <Route path="/platinum/necklace" element={<PlatinumNecklace />} />
          <Route path="/platinum/rings" element={<PlatinumRings />} />

          {/* SILVER */}
          <Route path="/silver/bangles" element={<SilverBangles />} />
          <Route path="/silver/earrings" element={<SilverEarrings />} />
          <Route path="/silver/necklace" element={<SilverNecklace />} />
          <Route path="/silver/rings" element={<SilverRings />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;


 {/* <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

      
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}