<<<<<<< HEAD
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopHeader from "./Reusable/TopHeader";
import NavigationBar from "./Reusable/NavigationBar";
import Footer from "./Reusable/Footer";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
// Import your subcategory components directly
>>>>>>> 6fee794e4cea9318bced5809689a4574bb58c125

import Home from "./home/Home";
import Shirts from "./Pages/Shirts";
import Pants from "./Pages/Pants";
import Mensshoes from "./Pages/Mensshoes";

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
      </Routes>

<<<<<<< HEAD
      <Footer />
    </div>
=======
<Routes>
 
        {/* MEN ROUTES */}
<Route path="/mens/shirts" element={<Shirts />} />
<Route path="/mens/pants" element={<Pants />} />
 <Route path="/mens/shoes" element={<Mensshoes />} />
        {/* WOMEN ROUTES */}
<Route path="/womens/dresses" element={<Dresses />} />
<Route path="/womens/shoes" element={<WomenShoes />} />
        
</Routes>

</>
>>>>>>> 6fee794e4cea9318bced5809689a4574bb58c125
  );
}

export default App;

 {/* <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

      
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}