import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/DashboardNav.module.css";

const Box6 = () => {
  const navigate=useNavigate()
  return (
    <Box m="1.5rem auto" w="33rem" >
      <Flex alignItems={"center"}>
        <Image
          // If the image (any asset for that matter) is static, it is better to render it from local
          // directories for lower latency
          src="https://s3.amazonaws.com/img.mynetdiary.com/blog/testing-your-blood-sugar.jpeg"
          alt="logo1"
          w="9rem"
          borderRadius={"5px"}
        />
        <Text
          textAlign={"left"}
          ml="1rem"
          fontSize={"1.2rem"}
          fontWeight="semibold"
        >
          Tried and true tips for testing your blood sugar
        </Text>
      </Flex>
      <Text textAlign={"left"} mt="2rem">
        Testing your blood sugar is something you can do to understand the role
        food, exercise, medication, and stress play on your blood sugar. These
        tips will ensure you know why, how, and when to test to help you feel
        your best and prevent complications.
      </Text>
      <Flex className={styles.btnGrp} w='13rem'>
        <Tooltip
          label="Click to read this post from Registered Dietititan"
          w="15rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
          >
            BLOG
          </Button>
        </Tooltip>
        <Tooltip
          label="Read articles written by Registered Dietititan"
          w="14rem"
          fontSize="10px"
          bg="gray.500"
        >
          <Button
            className={styles.dashBtn2}
            color="#3c9ec3"
            variant={"ghost"}
            size="sm"
            onClick={()=>navigate('/library')}
          >
            LIBRARY
          </Button>
        </Tooltip>
        <Tooltip
          label="Click to see your Advice"
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
            MY ADVICE
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Box6;
