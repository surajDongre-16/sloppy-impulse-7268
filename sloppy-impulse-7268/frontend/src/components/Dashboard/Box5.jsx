import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import styles from "../../Styles/DashboardNav.module.css";

const Box5 = () => {
  return (
    <Box m="1.5rem auto" w="33rem">
      <Flex>
        <Flex w="28rem" alignItems={"center"}>
          <Image
            src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/34_like@3x.png"
            alt="logo1"
            w="3rem"
            h="3rem"
          />
          <Text textAlign={"left"} ml="1rem">
            Try not to judge yourself or your food log. No one is perfect - it
            is more helpful and you'll make more progress if you log honestly
            and regularly.
          </Text>
        </Flex>
        <Box ml='2rem' >
          <AiOutlineMore size='30px' />
        </Box>
      </Flex>
      <Flex className={styles.btnGrp} ml='1rem'>
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
            GOT IT!
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
            MY ADVICE
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Box5;
