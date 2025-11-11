import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './AboutPage/About';
import Contact from './ContactPage/Contact';



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
         
         
      </Routes>
    </div>
  );
}

export default App;
