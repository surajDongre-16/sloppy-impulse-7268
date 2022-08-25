import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import styles from "../../Styles/DashboardNav.module.css";

const Box7 = () => {
  return (
    <Box m="1.5rem auto" w="33rem">
      <Flex alignItems={'center'} >
        <Flex w="28rem" alignItems={"center"}>
          <Image
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/nutrition_target.png"
            alt="logo1"
            w="3rem"
            h="3rem"
          />
          <Text textAlign={"left"} color='gray' ml="1rem">
           Nutrients
          </Text>
        </Flex>
        <Box ml="2rem">
          <AiOutlineMore size="30px" />
        </Box>
      </Flex>
      <Flex className={styles.btnGrp} mt='5rem' >
        <Tooltip
          label="Click to hide this Advice"
          w="8rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            DAY REPORT
          </Button>
        </Tooltip>
        <Tooltip
          label="Click to see your other Advice"
          w="9.5rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            FOOD LOG
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Box7;
