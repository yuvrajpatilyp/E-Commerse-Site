// import React from "react";
// import NavigationBar from './Reusable/NavigationBar'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./Signup"; 

// export default function App() {
//   return (
//     <NavigationBar/>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }



import React from "react";
import NavigationBar from "./Reusable/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
