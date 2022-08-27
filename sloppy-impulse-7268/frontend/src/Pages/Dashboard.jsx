import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Dashboard/Footer';
import MiddleSection from '../components/Dashboard/MiddleSection';
import Navbar from '../components/Dashboard/Navbar'
import AnalysisPage from './Analysis Page/AnalysisPage';
import FoodMain from './Foodpage/FoodMain';
import PlanWeight from './PlanPage/PlanWeight';
import Community from './Subpages/Community';
import Exercise from './Subpages/Exercise';
import Setting from './Subpages/Setting';
// import AnalysisPage from "./Analysis Page/AnalysisPage"

const Dashboard = () => {
    const [trick, setTrick] = useState(false);

  const [path, setPath] = useState("/dashboard");
  const [totalCal, setTotalCal] = useState();
  const [calSum, setCalSum] = useState();
  const [totC, setC] = useState();
  const [totF, setF] = useState();
  const [totP, setP] = useState();
  const x = calSum?.reduce((a, b) => a + b, 0);
  const getAllCalories = async () => {
    // http://localhost:8080/food/allcalories

    await fetch("http://localhost:8080/food/allcalories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const carbs = [];
        const fat = [];
        const prot = [];
        const sum = [];
        const diner = res.allcolories.filter(
          (option) => option._id === "dinner"
        );
        const breakfast = res.allcolories.filter(
          (option) => option._id === "breakfast"
        );
        const lunch = res.allcolories.filter(
          (option) => option._id === "lunch"
        );
        const snacks = res.allcolories.filter(
          (option) => option._id === "snacks"
        );
        breakfast?.map((item) => sum.push(item.totalCalo));
        lunch?.map((item) => sum.push(item.totalCalo));
        diner?.map((item) => sum.push(item.totalCalo));
        snacks?.map((item) => sum.push(item.totalCalo));
        setCalSum(sum);

        breakfast?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        lunch?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        diner?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        snacks?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        setC(carbs);
        setF(fat);
        setP(prot);

        setTotalCal(res.allcolories);
        // console.log(s1);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllCalories();
  }, [trick]);
  return (
    <Box bg="#f0f0f0">
      <Navbar setPath={setPath} x={x} />
      {path === "/dashboard" ? (
        <MiddleSection calSum={calSum} totC={totC} totF={totF} totP={totP} />
      ) : (
        ""
      )}
      {path === "/dashboard/plan" ? <PlanWeight /> : ""}
      {path === "/dashboard/food" ? <FoodMain setTrick={setTrick} trick={trick} /> : ""}
      {path === "/dashboard/exercise" ? <Exercise /> : ""}
      {path === "/dashboard/analysis" ? <AnalysisPage /> : ""}
      {path === "/dashboard/community" ? <Community /> : ""}
      {path === "/dashboard/settings" ? <Setting /> : ""}
      <Footer />
    </Box>
  );
}

export default Dashboard