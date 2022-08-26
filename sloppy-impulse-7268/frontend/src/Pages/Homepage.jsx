import { Box } from "@chakra-ui/react";
import React from "react";
import Firstcomponent from "../components/Homepage/01_first";
import SecondComponent from "../components/Homepage/02_second";
import ThirdComponent from "../components/Homepage/03_third";
import FourthComponent from "../components/Homepage/04_fourth";
import FifthComponents from "../components/Homepage/05_fifth";
import SixthComponents from "../components/Homepage/06_sixth";
import SeventhComponent from "../components/Homepage/07_seventhComponent";
import EighthComponent from "../components/Homepage/08_Eighth";
import Footer from "../components/Homepage/footer";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Firstcomponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponents />
      <SixthComponents />
      <SeventhComponent />
      <EighthComponent />
      <Footer />
    </Box>
  );
};

export default Homepage;
