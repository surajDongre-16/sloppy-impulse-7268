import React from 'react'
import { Route, Routes } from "react-router-dom";
import PlanSidebar from './PlanSidebar';
function PlanRoutes() {
    return (
        <div>
            <Routes>

                <Route path="/planhome" element={<PlanSidebar />} />
                {/* <Route path="/food" element={<FoodMain />} /> */}

                {/* <Route path="/" element={<Homepage />}/>   */}
                {/* <Route path="/dashboard" element={<Dashboard/>}  /> */}

            </Routes>

        </div>
    )
}

export default PlanRoutes
