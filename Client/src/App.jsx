import React from 'react'
import { Route, Routes } from 'react-router'
import TopHeader from './Reusable/TopHeader'
import NavigationBar from './Reusable/NavigationBar'
import Home from './Home/Home'
import Footer from './Reusable/Footer'
import CategorySidebar from "./Home/CategorySidebar";
import GoldBangles from "./Pages/GoldBangles";
import GoldEarrings from "./Pages/GoldEarrings"
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

// import Shirts from "./Pages/Shirts";
// import Pants from "./Pages/Pants";
// import Dresses from "./Pages/Dresses";
// import Mensshoes from "./Pages/Mensshoes";
// import WomenShoes from "./Pages/WomenShoes";
// import Laptop from "./Pages/Laptop";
// import Mobile from "./Pages/Mobile";

function App() {
  return (
    <>

    <TopHeader/>
    <NavigationBar/>
    
      <div className="w-full">
      

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home/>} />

        { /* GOLD */ }

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
          <Footer/>
      </div>

    </>
  )
}

export default App