import { Box } from "@chakra-ui/react";
import React from "react";
import Menus from "../components/Library/Menus";

const Library = () => {
  return (
    <Box border={"1px solid"} display="flex">
      <Box border="1px solid" h="auto" w="25rem">
        <Menus />
      </Box>
      <Box border="1px solid red" h="50rem" w="75rem"></Box>
    </Box>
  );
};

export default Library;
