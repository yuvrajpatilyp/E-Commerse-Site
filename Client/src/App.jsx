import { BrowserRouter, Routes, Route } from "react-router-dom";
 
// Import your subcategory components directly

import Shirts from "./Pages/Shirts";
import Pants from "./Pages/Pants";
import Dresses from "./Pages/Dresses";
import Mensshoes from "./Pages/Mensshoes";
import WomenShoes from "./Pages/WomenShoes"
import CategorySidebar from "./Categorydropdown/CategorySidebar";


 
function App() {
  return (
    <>

 <CategorySidebar />

<Routes>
 
        {/* MEN ROUTES */}
<Route path="/mens/shirts" element={<Shirts />} />
<Route path="/mens/pants" element={<Pants />} />
 <Route path="/mens/shoes" element={<Mensshoes />} />
        {/* WOMEN ROUTES */}
<Route path="/womens/dresses" element={<Dresses />} />
<Route path="/womens/shoes" element={<WomenShoes />} />
        
</Routes>

</>
  );
}
 
export default App;