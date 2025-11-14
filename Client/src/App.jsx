import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import TopHeader from './Reusable/TopHeader'
import NavigationBar from './Reusable/NavigationBar'
import Footer from './Reusable/Footer'
import Sidebar from './home/Sidebar'
import Flashsales from './home/Flashsales'
import Browsebycategory from './home/Browsebycategory'
import BestsellingProduct from './home/BestsellingProduct'
import Categories from './home/Categories'
import ExploreProducts from './home/ExploreProducts'
import Featured from './home/Featured'
import FeaturesStrip from './home/FeaturedStrip'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* <TopHeader/>

      <NavigationBar isLoggedIn={isLoggedIn} /> */}

     
      <Sidebar/>
      <Flashsales/>
      <Browsebycategory/>
      <BestsellingProduct/>
      <Categories/>
      <ExploreProducts/>
      <Featured/>
      <FeaturesStrip/>
      <Footer />
    </div>
  );
}

export default App
 {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

      
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes> */}