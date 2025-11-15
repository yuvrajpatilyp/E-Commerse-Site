
import React from 'react'
import './index.css'
import Header from './Header/Header.jsx'
import NavigationBar from './Reusable/NavigationBar.jsx'
import Sidebar from './Sidebar&Iphone/Sidebar.jsx'
import Flashsales from './Flashsales&products/Flashsales.jsx'
import Browsebycategory from './Browsebycategory/Browsebycategory.jsx'
import BestsellingProduct from './Bestsellingproducts/BestsellingProduct.jsx'







function App() {
  return (
    <div>

    <Header/>
    <NavigationBar/>
 
    <Sidebar/>
    <Flashsales/>
    <Browsebycategory/>
    <BestsellingProduct/>
   
    
    </div>
  )
}

export default App
