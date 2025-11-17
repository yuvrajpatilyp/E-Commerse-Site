import React from 'react'


import { Route, Routes } from 'react-router'
import Shirts from './Pages/Shirts'
import Pants from './Pages/Pants'
import Dresses from './Pages/Dresses'
import Womemshoes from './Pages/WomenShoes'
import Mensshoes from './Pages/Mensshoes'
import TopHeader from './Reusable/TopHeader'
import NavigationBar from './Reusable/NavigationBar'
import Home from './Home/Home'
import Footer from './Reusable/Footer'
import Laptop from './Pages/Laptop'


function App() {
  return (
    <>
    <TopHeader/>
    <NavigationBar/>
    
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mens/shirts" element={<Shirts/>} />
       <Route path="/mens/pants" element={<Pants/>} />
        <Route path="/mens/shoes" element={<Mensshoes/>} />
         <Route path="/womens/dresses" element={<Dresses/>} />
          <Route path="/women/shoes" element={<Womemshoes/>} />
          <Route path="/electronics/laptop" element={<Laptop/>}/>
      
     </Routes>
     <Footer/>
    </>
  )
}

export default App