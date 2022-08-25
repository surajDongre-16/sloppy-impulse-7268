import React from 'react'
import { Route, Routes } from "react-router-dom";
import PlanCarbs from './PlanCarbs';
import PlanExericse from './PlanExericse';
import PlanNutrient from './PlanNutrient';
import PlanSidebar from './PlanSidebar';
import PlanWeight from './PlanWeight';
function PlanRoutes() {
    return (
        <div>
            <Routes>

                <Route path="/planhome" element={<PlanSidebar />} />
                <Route path="/planweight" element={<PlanWeight />} />

                <Route path="plancarbs" element={<PlanCarbs />} />
                <Route path="/planexericse" element={<PlanExericse />} />
                <Route path="/plannutrient" element={<PlanNutrient />} />

            </Routes>

        </div>
    )
}

export default PlanRoutes
