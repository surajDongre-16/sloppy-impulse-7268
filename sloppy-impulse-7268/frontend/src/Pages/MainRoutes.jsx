import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodMain from "./Foodpage/FoodMain";
import Homepage from "./Homepage";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/food" element={<FoodMain />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
