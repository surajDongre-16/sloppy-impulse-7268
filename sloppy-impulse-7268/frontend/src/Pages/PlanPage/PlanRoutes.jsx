import React from 'react'
import { Route, Routes } from "react-router-dom";
import PlanSidebar from './PlanSidebar';
import PlanWeight from './PlanWeight';
function PlanRoutes() {
    return (
        <div>
            <Routes>

                <Route path="/planhome" element={<PlanSidebar />} />
                <Route path="/planweight" element={<PlanWeight />} />

                {/* <Route path="/" element={<Homepage />}/>   */}
                {/* <Route path="/dashboard" element={<Dashboard/>}  /> */}

            </Routes>

        </div>
    )
}

export default PlanRoutes
