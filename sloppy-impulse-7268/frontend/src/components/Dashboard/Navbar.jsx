import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

const Navbar = () => {
  return (
    <Box>
      <Box bg="#3b8302" h="125px">
        <Container maxW={"75rem"} border="1px solid white">
          <NavTop />
          <NavBottom />
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
