import { Box, Button, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import React from 'react'
import styles from "../../Styles/DashboardNav.module.css";

const Box2 = () => {
  return (
    <Box m="1.5rem auto" w="33rem">
      <Flex>
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_analysis.png"
          alt="logo1"
          w="2.5rem"
        />
        <Text textAlign={"left"} ml="1rem">
          Please log more than 400 food calories to get weight forecast and diet
          tips.
        </Text>
      </Flex>
      <Tooltip
        label="Analyze your diet Today"
        w="8rem"
        fontSize="10px"
        bg="gray.500"
      >
        <Button
          className={styles.dashBtn}
          color="#3c9ec3"
          variant={"ghost"}
          size="sm"
        >
          DAILY ANALYSIS
        </Button>
      </Tooltip>
    </Box>
  );
}

export default Box2