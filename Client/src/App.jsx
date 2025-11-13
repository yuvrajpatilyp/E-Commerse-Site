// // import React, { useState } from 'react'
// import { Routes,Route } from 'react-router-dom'
// import TopHeader from './Reusable/TopHeader'
// import NavigationBar from './Reusable/NavigationBar'
// import Footer from './Reusable/Footer'
// import WishListProducts from './WishList/Products';
// import WishListProducts1 from './WishList/Products1';
// import ProductDetail from './ProductDeatils/ProductDetail';
// import RelatedProduct from './ProductDeatils/RelatedProduct'; 



// function App() {
//     // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       <TopHeader/>
// {/* 
//       <NavigationBar isLoggedIn={isLoggedIn} /> */}

//       {/* <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/pageNavigator" element={<PageNavigator />} />

      
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//       </Routes> */}

//         <WishListProducts /> {/* First wishlist product section */}
//       <WishListProducts1 /> {/* Second wishlist product section */}
//       <ProductDetail /> {/* Product detail section */}
//       <RelatedProduct /> 


//       <Footer />
//     </div>
//   );
// }

// export default App




import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopHeader from './Reusable/TopHeader';
import NavigationBar from './Reusable/NavigationBar';
import Footer from './Reusable/Footer';
import WishListProducts from './WishList/Products';
import WishListProducts1 from './WishList/Products1';
import ProductDetail from './ProductDeatils/ProductDetail';
import RelatedProduct from './ProductDeatils/RelatedProduct';

function App() {
 const [isLoggedIn, _setIsLoggedIn] = useState(false);


  return (
    <div>
      <TopHeader />
      <NavigationBar isLoggedIn={isLoggedIn} />

      <WishListProducts />
      <WishListProducts1 />
      <ProductDetail />
      <RelatedProduct />

      <Footer />
    </div>
  );
}

export default App;
