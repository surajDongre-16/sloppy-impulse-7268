import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Dashboard/Footer';
import MiddleSection from '../components/Dashboard/MiddleSection';
import Navbar from '../components/Dashboard/Navbar'


const Dashboard = () => {
  const [current,setCurrent]=useState()
  const navigate=useNavigate()
  const handlePage=(page)=>{
    setCurrent(page)
  }
  // useEffect(() => {
  //   navigate(current.navigateTo)
  // }, [current,navigate])
  
  console.log(current,"curr")
  return (
    <Box bg="#f0f0f0">
      <Navbar handlePage={handlePage} />
      <MiddleSection />
      <Footer />
    </Box>
  );
}

export default Dashboard