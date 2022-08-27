import {
  Box,
  Button,
  Flex,
  Image,
  ModalFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../../Styles/DashboardNav.module.css";
import { useNavigate } from "react-router-dom";

const NavTop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modelOpen, setModelOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const dateTitle = value.toDateString().split(" ");
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate=useNavigate()
  function onChange(nextValue) {
    setValue(nextValue);
  }

  const moreClose = () => {
    setModelOpen(false);
  };

  const moreOpen = () => {
    setModelOpen(true);
  };

  const handleCalender = () => {
    setShowCalendar(true);
  };

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent={"space-between"}
      alignItems="center"
      margin="1% 0 2% 0"
    >
      <Image
        src="https://s3.amazonaws.com/img.mynetdiary.com/logo_react.png"
        alt="logo"
        height={"30%"}
        cursor="pointer"
        onClick={() => navigate("/")}
      />
      <Box display={"flex"} w="30%" ml="0rem" justifyContent={"space-between"}>
        <Image
          src="https://www.mynetdiary.com/img/icon/date_range.png"
          alt="calendar logo"
          height={"40px"}
          cursor="pointer"
          onClick={() => {
            onOpen();
            handleCalender();
          }}
        />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          w="85%"
        >
          <AiOutlineLeft size="35px" color="white" cursor="pointer" />
          <Text color="white" fontSize="25px" cursor="pointer">
            {dateTitle[1]} {dateTitle[2]}
          </Text>
          <AiOutlineRight size="35px" color="white" cursor="pointer" />
        </Box>
      </Box>
      <Box
        border="1px solid black"
        w="20rem"
        display={"flex"}
        justifyContent="space-between"
      >
        <Flex flexDirection={"column"}>
          <Text color="white">Calorie Budget</Text>
          <Text color="yellow" fontSize={"1.5rem"}>
            2170
          </Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text color="white">Eaten</Text>
          <Text color="yellow" fontSize={"1.5rem"}>2170</Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text color="white">Left</Text>
          <Text color="yellow" fontSize={"1.5rem"}>2170</Text>
        </Flex>
      </Box>
      <Box display="flex" w="20%" alignItems={"center"} justifyContent="right">
        <Image
          src="https://www.mynetdiary.com/img/Premium_planning_x2.png"
          alt="plan"
          height={"40px"}
          marginRight="1rem"
          cursor="pointer"
        />
        <AiOutlineMore
          color="white"
          size="30px"
          cursor="pointer"
          onClick={moreOpen}
        />
        {showCalendar ? (
          <>
            <Modal isOpen={isOpen} size="sm" onClose={onClose}>
              <ModalOverlay />
              <ModalContent marginTop={"10%"}>
                <ModalHeader bg="#3c9ec3">
                  <Box display={"flex"} flexDirection="column" color="white">
                    <Text color="gray.300">{dateTitle[3]}</Text>
                    <Box display="flex" w="40%" justifyContent={"space-around"}>
                      <Text>{dateTitle[0]},</Text>

                      <Text>
                        {dateTitle[1]}
                        {dateTitle[2]}
                      </Text>
                    </Box>
                  </Box>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Calendar onChange={onChange} defaultValue={value} />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="#3c9ec3"
                    variant="ghost"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button onClick={onClose} color="#3c9ec3" variant="ghost">
                    Ok
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ) : (
          ""
        )}
        <Modal isOpen={modelOpen} size="xs" onClose={moreClose}>
          <ModalOverlay />
          <ModalContent margin={"1% 3% 0 85%"}>
            <ModalCloseButton />
            <ModalBody>
              <Box
                h="18rem"
                display={"flex"}
                flexDirection="column"
                justifyContent={"space-between"}
              >
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Calendar
                </Text>
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Blog
                </Text>
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Library
                </Text>
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Help
                </Text>
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Go To Homepage
                </Text>
                <Text
                  _hover={{ backgroundColor: "gray.100" }}
                  className={styles.moreModel}
                >
                  Sign off
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default NavTop;
