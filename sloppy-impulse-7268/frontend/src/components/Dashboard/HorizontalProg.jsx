import { Flex, Box, Text, Progress } from "@chakra-ui/react";
import React from "react";

const HorizontalProg = ({ carbs, protein, fat, totC, totP, totF, ml ,w}) => {
  return (
    <>
      <Box w={w?"40rem":"10.5rem"} ml={ml ? "1rem" : "0"} >
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text color="gray">Carbs</Text>
          <Text>{Math.floor((carbs / 230) * 100)}% cals</Text>
        </Flex>
        <Progress
          colorScheme="green"
          size="sm"
          value={totC?.length > 0 ? Math.floor((carbs / 230) * 100) : 0}
        />
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text>{carbs > 0 ? carbs : 0}g</Text>
          <Text>left {totC?.length > 0 ? 230 - carbs : 230}g</Text>
        </Flex>
      </Box>
      <Box w="10.5rem" ml="1rem">
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text color="gray">Protien</Text>
          <Text>{Math.floor((protein / 100) * 100)}% cals</Text>
        </Flex>
        <Progress
          colorScheme="green"
          size="sm"
          value={totP?.length > 0 ? Math.floor((protein / 100) * 100) : 0}
        />
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text>{protein > 0 ? protein : 0}g</Text>
          <Text>left {totP?.length > 0 ? 100 - protein : 100}g</Text>
        </Flex>
      </Box>
      <Box w="10.5rem" ml="1rem">
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text color="gray">Fat</Text>
          <Text>{Math.floor((fat / 76) * 100)}% cals</Text>
        </Flex>
        <Progress
          colorScheme="green"
          size="sm"
          value={totF?.length > 0 ? Math.floor((fat / 76) * 100) : 0}
        />
        <Flex justifyContent={"space-between"} fontSize="0.9rem">
          <Text>{fat > 0 ? fat : 0}g</Text>
          <Text>left {totF?.length > 0 ? 76 - fat : 76}g</Text>
        </Flex>
      </Box>
    </>
  );
};

export default HorizontalProg;
