import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import TopHeader from './Reusable/TopHeader'
import NavigationBar from './Reusable/NavigationBar'
import Footer from './Reusable/Footer'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TopHeader/>

      <NavigationBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

      
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
