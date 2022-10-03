import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
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
        <Route path="/plancarbs" element={<PlanCarbs />} />
        <Route path="/planexericse" element={<PlanExericse />} />
        <Route path="/plannutrient" element={<PlanNutrient />} />
        <Route path="/plancycling" element={<PlanCycling />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
