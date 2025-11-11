import React from "react";
import NavigationBar from './Reusable/NavigationBar'

import Login from './Login/Login';


export default function App() {
  return (
    <div className="min-h-screen">
      <NavigationBar/>
      <Login />
    </div>
  );
}
