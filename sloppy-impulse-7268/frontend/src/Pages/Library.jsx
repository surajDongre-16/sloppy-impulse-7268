import { Box } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/Library/Cards";
import Menus from "../components/Library/Menus";

const Library = () => {
  return (
    <Box display="flex">
      <Box h="auto" w="25rem">
        <Menus />
      </Box>
      <Box h="auto" w="75rem">
        <Cards/>
      </Box>
    </Box>
  );
};

export default Library;
