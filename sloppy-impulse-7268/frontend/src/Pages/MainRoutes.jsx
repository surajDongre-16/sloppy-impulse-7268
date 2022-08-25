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


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />

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
