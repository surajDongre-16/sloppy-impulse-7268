import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import Footer from '../components/Dashboard/Footer';
import MiddleSection from '../components/Dashboard/MiddleSection';
import Navbar from '../components/Dashboard/Navbar'
import FoodMain from './Foodpage/FoodMain';
import PlanWeight from './PlanPage/PlanWeight';
import Community from './Subpages/Community';
import Exercise from './Subpages/Exercise';
import Setting from './Subpages/Setting';
import AnalysisPage from "./Analysis Page/AnalysisPage"

const Dashboard = () => {
  const [path, setPath] = useState("/dashboard");
  // console.log(path,"path")
  return (
    <Box bg="#f0f0f0">
      <Navbar setPath={setPath} />
      {path === "/dashboard" ? <MiddleSection /> : ""}
      {path === "/dashboard/plan" ? <PlanWeight /> : ""}
      {path === "/dashboard/food" ? <FoodMain /> : ""}
      {path === "/dashboard/exercise" ? <Exercise /> : ""}
      {path === "/dashboard/analysis" ? <AnalysisPage /> : ""}
      {path === "/dashboard/community" ? <Community /> : ""}
      {path === "/dashboard/settings" ? <Setting /> : ""}
      <Footer />
    </Box>
  );
}

export default Dashboard