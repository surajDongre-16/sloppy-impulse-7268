import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import Footer from '../components/Dashboard/Footer';
import MiddleSection from '../components/Dashboard/MiddleSection';
import Navbar from '../components/Dashboard/Navbar'
import FoodMain from './Foodpage/FoodMain';
import PlanWeight from './PlanPage/PlanWeight';
import Analysis from './Subpages/Analysis';
import Community from './Subpages/Community';
import Exercise from './Subpages/Exercise';
import Setting from './Subpages/Setting';


const Dashboard = () => {
  const [path,setPath]=useState("")
  console.log(path.navigateTo,"path")
  return (
    <Box bg="#f0f0f0">
      <Navbar setPath={setPath} />
      {path.navigateTo === "/dashboard" ? <MiddleSection /> : ""}
      {path.navigateTo === "/dashboard/plan" ? <PlanWeight /> : ""}
      {path.navigateTo === "/dashboard/food" ? <FoodMain /> : ""}
      {path.navigateTo === "/dashboard/exercise" ? <Exercise /> : ""}
      {path.navigateTo === "/dashboard/analysis" ? <Analysis /> : ""}
      {path.navigateTo === "/dashboard/community" ? <Community /> : ""}
      {path.navigateTo === "/dashboard/settings" ? <Setting /> : ""}
      <Footer />
    </Box>
  );
}

export default Dashboard