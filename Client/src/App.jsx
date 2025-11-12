<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./Account/My Account";
import PageNavigator from "./Reusable/PageNavigator";

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/PageNavigator" element={<PageNavigator />} />
      </Routes> 
=======
import React from 'react'
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
>>>>>>> b5e8c0479d07aa63ba3d8e51bd608ad3faadecdf
    </div>
  );
}
