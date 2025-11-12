import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./Account/My Account";
import PageNavigator from "./Reusable/PageNavigator";

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/PageNavigator" element={<PageNavigator />} />
      </Routes> 
    </div>
  );
}
