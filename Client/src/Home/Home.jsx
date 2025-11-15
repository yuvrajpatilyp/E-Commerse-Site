import React from 'react'
import Sidebar from './Sidebar'
import CategorySidebar from './CategorySidebar'
import Flashsales from './Flashsales'
import TopHeader from '../Reusable/TopHeader'
import Browsebycategory from './Browsebycategory'
import BestsellingProduct from './BestsellingProduct'
import Categories from './Categories'
import ExploreProducts from './ExploreProducts'
import Featured from './Featured'
import FeaturedStrip from './FeaturesStrip'



function Home() {
  return (
    <>
   
    
    <Sidebar/>
    <CategorySidebar/>
    <Flashsales/>
    <Browsebycategory/>
    <BestsellingProduct/>
    <Categories/>
    <ExploreProducts/>
    <Featured/>
    <FeaturedStrip/>
    </>
  )
}

export default Home