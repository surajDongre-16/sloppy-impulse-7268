import React from "react";
import { Route, Routes } from "react-router-dom";

import FoodMain from "./Foodpage/FoodMain";

import Dashboard from "./Dashboard";

import Homepage from "./Homepage";
import Plan from "./Subpages/Plan";
import Food from "./Subpages/Food";
import Exercise from "./Subpages/Exercise";
import Analysis from "./Subpages/Analysis";
import Community from "./Subpages/Community";
import Setting from "./Subpages/Setting";

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
        <Route path="/planweight" element={<PlanWeight />} />
        <Route path="/plancarbs" element={<PlanCarbs />} />
        <Route path="/planexericse" element={<PlanExericse />} />
        <Route path="/plannutrient" element={<PlanNutrient />} />
        <Route path="/plancycling" element={<PlanCycling />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />


        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/plan" element={<Plan />} />
        <Route path="/dashboard/food" element={<FoodMain />} />
        <Route path="/dashboard/exercise" element={<Exercise />} />
        <Route path="/dashboard/analysis" element={<Analysis />} />
        <Route path="/dashboard/community" element={<Community />} />
        <Route path="/dashboard/settings" element={<Setting />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
