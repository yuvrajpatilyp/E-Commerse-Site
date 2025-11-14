import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";


export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Signup/>} />
      </Routes>

    </>
  );
}
