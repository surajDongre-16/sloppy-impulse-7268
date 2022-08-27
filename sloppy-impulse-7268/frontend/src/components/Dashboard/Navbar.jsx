import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

const Navbar = ({setPath,x}) => {

  return (
    <Box>
      <Box bg="#3b8302" h="auto" border={"1px solid #3b8302"}>
        <Container maxW={"75rem"}>
          <NavTop x={x} />
          <NavBottom onClick={(val) => setPath(val)} />
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
