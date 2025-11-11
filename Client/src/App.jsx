import React from 'react'

import TopHeader from './Categorydropdown/TopHeader'
import Herosection from './Herosection'
import Flashsection from './Flashsection'
import Categorysection from './Categorydropdown/Categorysection'
import Bestsellingproducts from './Bestsellingproducts'
import NavigationBar from './Reusable/NavigationBar'



function App() {
  return (
    <div>
  <TopHeader/>    
  <NavigationBar />
   <Herosection />
   
   <Flashsection />
   <Categorysection />
   <Bestsellingproducts />
    
    </div>
  )
}

export default App
