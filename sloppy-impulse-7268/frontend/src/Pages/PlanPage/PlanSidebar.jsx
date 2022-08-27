import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Dashboard/Navbar';
import style from './plan.module.css'
export default function PlanSidebar() {
  const navigate = useNavigate();

  const [id, setId] = useState(1);
  const [cl, setCl] = useState(false)

  const buttons = [
    { id: 1, navg: "/dashboard/plan", img1: "https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png", heading: "Weight & Calories" },
    { id: 2, navg: "/plancarbs", img1: "https://s3.amazonaws.com/img.mynetdiary.com/plan/macros_plan.png", heading: "Carbs,Protein & Fat" },
    { id: 3, navg: "/planexericse", img1: "https://s3.amazonaws.com/img.mynetdiary.com/plan/exercise_plan.png", heading: "Exercise Plan" },
    { id: 4, navg: "/plannutrient", img1: "https://s3.amazonaws.com/img.mynetdiary.com/plan/nutr_plan.png", heading: "Nutrient Targets" },
    { id: 5, navg: "/plancycling", img1: "https://s3.amazonaws.com/img.mynetdiary.com/plan/cycling_plan.png", heading: "Cycling" }

  ];
  const imgcolor = (e) => {
    console.log("hoverrr")
    setCl(true)

  }
  const imgcolorOut = () => {
    setCl(false)

  }

  const handleBorder = (id) => {
    setId(id)
  }
  return (
    <>
      <Box w="25%" bg='rgb(240,240,240)'>
        {buttons.map((item) => (
          <Box
            className={` ${id === item.id ? style.lhbg : null}`}
            key={item.id}
            id={style.btnhover}
            onClick={() => handleBorder(item.id)}
          >
            <button
              onClick={() => {
                navigate(item.navg);
              }}
              // onMouseEnter={imgcolor}
              // onMouseOut={imgcolorOut}
              w="100%"
              className={style.sliderbtn}
              variant="ghost"
            >
              <img
                className={` ${id === item.id || cl ? style.img2 : null}`}
                src={item.img1}
                alt="img"
              />
              {item.heading}
            </button>
          </Box>
        ))}
      </Box>
    </>
  );
}
