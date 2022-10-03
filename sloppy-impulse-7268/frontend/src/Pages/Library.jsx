import { Box } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/Library/Cards";
import Menus from "../components/Library/Menus";
import Navbar from "./Navbar";

const Library = () => {
  return (
    <>
      <Navbar />
      <Box display="flex" mt='8rem' >
        <Box h="auto" w="25rem">
          <Menus />
        </Box>
        <Box h="auto" w="75rem">
          <Cards />
        </Box>
      </Box>
    </>
  );
};

export default Library;
