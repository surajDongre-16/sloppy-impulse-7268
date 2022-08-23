import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>  
        <Route path="/dashboard" element={<Dashboard/>}  />
      </Routes>
    </div>
  );
};

export default MainRoutes;
