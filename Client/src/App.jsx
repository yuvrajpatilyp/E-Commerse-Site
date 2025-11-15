import { Routes, Route } from "react-router-dom";

import Shirts from "./Pages/Shirts";
import Pants from "./Pages/Pants";
import Dresses from "./Pages/Dresses";
import Mensshoes from "./Pages/Mensshoes";
import WomenShoes from "./Pages/WomenShoes";
import CategorySidebar from "./Categorydropdown/CategorySidebar";
import Laptop from "./Pages/Laptop";
import Mobile from "./Pages/Mobile";

function App() {
  return (
    <>
      <CategorySidebar />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<h1></h1>} />

        {/* MEN ROUTES */}
        <Route path="/mens/shirts" element={<Shirts />} />
        <Route path="/mens/pants" element={<Pants />} />
        <Route path="/mens/shoes" element={<Mensshoes />} />

        {/* WOMEN ROUTES */}
        <Route path="/womens/dresses" element={<Dresses />} />
        <Route path="/womens/shoes" element={<WomenShoes />} />

        {/* ELECTRONICS ROUTES */}
        <Route path="/electronics/laptops" element={<Laptop />} />
        <Route path="/electronics/mobiles" element={<Mobile />} />
      </Routes>
    </>
  );
}

export default App;
