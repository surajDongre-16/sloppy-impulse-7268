import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/DashboardNav.module.css";

const Box3 = () => {
  return (
    <Box m="1.5rem auto" w="33rem">
      <Flex alignItems={'center'} >
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/target_icon.png"
          alt="logo1"
          w="2.5rem"
        />
        <Text textAlign={"left"} ml="1rem">
          Weight Plan: gain 5 lb in 69 days.
        </Text>
      </Flex>
      <Flex alignItems={'center'} mt='1rem' >
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png"
          alt="logo1"
          w="2.5rem"
        />
        <Text textAlign={"left"} ml="1rem">
          Current Weight: 80 lb.
        </Text>
      </Flex>
      <Flex className={styles.btnGrp}>
        <Tooltip label="Log your Weight" w="6rem" fontSize="10px" bg="gray.500">
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            WEIGH-IN
          </Button>
        </Tooltip>
        <Tooltip
          label="Plan your Weight & Calories"
          w="9rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            PLAN
          </Button>
        </Tooltip>
        <Tooltip
          label="See your Weight & Calories Chart"
          w="10.5rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            CHART
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Box3;
