import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from 'react'

const CircularProgressBar = ({x}) => {
  return (
    <Flex
      h="18rem"
      mt="1.5rem"
      w="20rem"
      alignItems={"center"}
      justifyContent="center"
    >
      <CircularProgress
        value={x > 0 ? Math.floor((x / 2173) * 100) : 0}
        thickness="10px"
        size="15rem"
        color="#8fe124"
      >
        <CircularProgressLabel mt={"-2rem"} color="#5cc028" fontSize={"1.5rem"}>
          {x > 0 ? x : 0}
        </CircularProgressLabel>
        <CircularProgressLabel fontSize={"1.2rem"} color="gray" mt="1rem">
          Left
        </CircularProgressLabel>
        {/* Using hardcoded magic numbers like 2173 (with no comments event) is not a good pattern.
        This usually leads to layouts which aren't correctly responsive. */}
        <CircularProgressLabel fontSize={"1.5rem"} color="gray" mt="4rem">
          {x > 0 ? 2173 - x : "2,173"}
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  );
}

export default CircularProgressBar