import { Box } from "@chakra-ui/react";
import React from "react";
import Firstcomponent from "../components/Homepage/01_first";
import SecondComponent from "../components/Homepage/02_second";
import ThirdComponent from "../components/Homepage/03_third";
import FourthComponent from "../components/Homepage/04_fourth";
import FifthComponents from "../components/Homepage/05_fifth";
import SixthComponents from "../components/Homepage/06_sixth";

const Homepage = () => {
  return (
    <Box>
      <Firstcomponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponents />
      <SixthComponents />
    </Box>
  );
};

export default Homepage;
