import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

const Navbar = ({setPath}) => {

  return (
    <Box>
      <Box bg="#3b8302" h="125px" border={"1px solid #3b8302"}>
        <Container maxW={"75rem"}>
          <NavTop />
          <NavBottom onClick={(val) => setPath(val)} />
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
