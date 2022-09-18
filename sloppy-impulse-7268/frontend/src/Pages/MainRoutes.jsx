import React from "react";
import { Route, Routes } from "react-router-dom";

// import FoodMain from "./Foodpage/FoodMain";

import Dashboard from "./Dashboard";

import Homepage from "./Homepage";

// import Plan from "./Subpages/Plan";

// Lots of unused imports in this file. Dead code is not good. Increases maintenance cost of code.

import Exercise from "./Subpages/Exercise";
import Analysis from "./Subpages/Analysis";
import Community from "./Subpages/Community";
import Setting from "./Subpages/Setting";


import PlanWeight from "./PlanPage/PlanWeight";

// import Plan from "./Subpages/Plan";
// import Food from "./Subpages/Food";
// import Exercise from "./Subpages/Exercise";
// import Analysis from "./Subpages/Analysis";
// import Community from "./Subpages/Community";
// import Setting from "./Subpages/Setting";

// import PlanSidebar from "./PlanPage/PlanSidebar";
// import PlanWeight from "./PlanPage/PlanWeight";

import PlanCarbs from "./PlanPage/PlanCarbs";
import PlanExericse from "./PlanPage/PlanExericse";
import PlanNutrient from "./PlanPage/PlanNutrient";
import PlanCycling from "./PlanPage/PlanCycling";
import Library from "./Library";
import Signup from "./Signup";
import LoginPage from "./LoginPage"
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/library' element={<Library />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<LoginPage />} />
        {/* <Route path="/dashboard/plan" element={<PlanWeight />} /> */}
        {/* <Route path="/dashboard/food" element={<FoodMain />} />
        <Route path="/dashboard/exercise" element={<Exercise />} />
        <Route path="/dashboard/analysis" element={<AnalysisPage />} />
        <Route path="/dashboard/community" element={<Community />} />
  <Route path="/dashboard/settings" element={<Setting />} /> */}
        {/* Plan Routes */}
        <Route path="/plancarbs" element={<PlanCarbs />} />
        <Route path="/planexericse" element={<PlanExericse />} />
        <Route path="/plannutrient" element={<PlanNutrient />} />
        <Route path="/plancycling" element={<PlanCycling />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
