import { Box } from '@chakra-ui/react';
import React from 'react'
import Footer from '../components/Dashboard/Footer';
import MiddleSection from '../components/Dashboard/MiddleSection';
import Navbar from '../components/Dashboard/Navbar'


const Dashboard = () => {
  return (
    <Box bg="#f0f0f0">
      <Navbar />
      <MiddleSection />
      <Footer/>
    </Box>
  );
}

export default Dashboard