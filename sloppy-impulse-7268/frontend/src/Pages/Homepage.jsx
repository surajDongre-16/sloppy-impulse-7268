import { Box } from "@chakra-ui/react";
import React from "react";
import Firstcomponent from "../components/Homepage/first";
import SecondComponent from "../components/Homepage/second";
import ThirdComponent from "../components/Homepage/third";
import FourthComponent from "../components/Homepage/fourth";

const Homepage = () => {
  return (
    <Box>
      <Firstcomponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </Box>
  );
};

export default Homepage;
