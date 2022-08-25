import React from "react";
import { Route, Routes } from "react-router-dom";

import FoodMain from "./Foodpage/FoodMain";

import Dashboard from "./Dashboard";

import Homepage from "./Homepage";

import PlanSidebar from "./PlanPage/PlanSidebar";
import PlanWeight from "./PlanPage/PlanWeight";
import PlanCarbs from "./PlanPage/PlanCarbs";
import PlanExericse from "./PlanPage/PlanExericse";
import PlanNutrient from "./PlanPage/PlanNutrient";
import PlanCycling from "./PlanPage/PlanCycling";


const MainRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Homepage />} />

        {/* food */}
        <Route path="/food" element={<FoodMain />} />

        {/* Plan Routes */}
        <Route path="/planhome" element={<PlanSidebar />} />
        <Route path="/planweight" element={<PlanWeight />} />
        <Route path="/plancarbs" element={<PlanCarbs />} />
        <Route path="/planexericse" element={<PlanExericse />} />
        <Route path="/plannutrient" element={<PlanNutrient />} />
        <Route path="/plancycling" element={<PlanCycling />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
};

export default MainRoutes;
