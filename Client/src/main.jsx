
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header.jsx'
import NavigationBar from './Reusable/NavigationBar.jsx'
import Sidebar from './Sidebar&Iphone/Sidebar.jsx'
import Flashsales from './Flashsales&products/Flashsales.jsx'
import Browsebycategory from './Browsebycategory/Browsebycategory.jsx'
import BestsellingProduct from './Bestsellingproducts/BestsellingProduct.jsx'
import Categories from './HomePage/Categories.jsx'
import ExploreProducts from './HomePage/ExploreProducts.jsx'
import FeaturesStrip from './HomePage/FeaturesStrip.jsx'
import Footer from './Reusable/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <NavigationBar/>
    <Sidebar/>
    <Flashsales/>
    <Browsebycategory/>
    <BestsellingProduct/>
    <Categories/>
    <ExploreProducts/>
    <FeaturesStrip/>
    <Footer/>
    
    
  </>
)
