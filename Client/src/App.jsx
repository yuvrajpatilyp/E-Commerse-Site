import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./Account/My Account";
import PageNavigator from "./Reusable/PageNavigator";
import TopHeader from "./Reusable/TopHeader";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/PageNavigator" element={<PageNavigator />} />
        <Route path="/TopHeader" element={<TopHeader />} />
      </Routes> 
    </div>
  );
}
