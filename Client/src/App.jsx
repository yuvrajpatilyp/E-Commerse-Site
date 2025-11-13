import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './AboutPage/About';
import Contact from './ContactPage/Contact';
import NavigationBar from './Reusable/NavigationBar';
import Footer from './Reusable/Footer';
import PageNavigator from './Reusable/PageNavigator';
import Login from './Login';

function App() {
  //  Global login state — shared by all pages
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Navbar updates based on login */}
      <NavigationBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pageNavigator" element={<PageNavigator />} />

        {/* Pass setIsLoggedIn to Login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
