import React from 'react'
import Navbar from './Categorydropdown/Navbar'
import TopHeader from './Categorydropdown/TopHeader'
import CategorySidebar from './Categorydropdown/CategorySidebar'
import Herosection from './Herosection'
import Flashsection from './Flashsection'
import Categorysection from './Categorydropdown/Categorysection'
import Bestsellingproducts from './Bestsellingproducts'


function App() {
  return (
    <div>
  <TopHeader/>    
   <Navbar />
   <Herosection />
   
   <Flashsection />
   <Categorysection />
   <Bestsellingproducts />
    </div>
  )
}

export default App
