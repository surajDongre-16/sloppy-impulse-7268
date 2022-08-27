import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import DatePicker from "react-horizontal-datepicker";
import styles from "../../Styles/DashboardNav.module.css";

const Box1 = ({ calSum }) => {
  const x = calSum?.reduce((a, b) => a + b, 0);
  console.log(x, "X");
  return (
    <>
      <Box m="1.5rem auto" w="33rem">
        {/* Top section 1st box */}

        <Box position="relative">
          <Text color="gray">Calorie Budget</Text>
          <Text fontSize={"1.5rem"} color="#3c9ec3">
            2,170
          </Text>
          <AiOutlineMore className={styles.bx1dot} />
        </Box>

        {/* Middle Section*/}
        <Flex>
          {/*left box */}

          <Flex
            h="18rem"
            mt="1.5rem"
            w="10rem"
            flexDirection={"column"}
            color="gray"
          >
            <Text>Exercise</Text>
            <Text fontSize={"1.5rem"} color="#3c9ec3">
              0
            </Text>
            <Box>
              <Text>Steps</Text>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"1.5rem"} color="#3c9ec3">
                  0
                </Text>
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/steps_icon.png"
                  alt="steps"
                  w="1.2rem"
                />
              </Box>
            </Box>
            <Text>Water</Text>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <Text fontSize={"1.5rem"} color="#3c9ec3">
                0
              </Text>
              <Image
                src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/glass_icon.png"
                alt="steps"
                w="1.2rem"
              />
            </Box>
            <Box>
              <Text>Notes</Text>
              <Image
                src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/notes_icon.png"
                alt="notes"
                w="1.2rem"
                m="0.5rem 3.2rem"
              />
            </Box>
          </Flex>

          {/* Middle box */}

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
              <CircularProgressLabel
                mt={"-2rem"}
                color="#5cc028"
                fontSize={"1.5rem"}
              >
                {x > 0 ? x : 0}
              </CircularProgressLabel>
              <CircularProgressLabel fontSize={"1.2rem"} color="gray" mt="1rem">
                Left
              </CircularProgressLabel>
              <CircularProgressLabel fontSize={"1.5rem"} color="gray" mt="4rem">
                {x > 0 ? 2173 - x : "2,173"}
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>

          {/* Right box */}

          <Flex
            h="18rem"
            mt="1.5rem"
            w="10rem"
            flexDirection={"column"}
            color="gray"
          >
            <Text>Breakfast</Text>
            <Text fontSize={"1.5rem"} color="#3c9ec3">
              {calSum?.length > 0 ? calSum[0] : 0}
            </Text>
            <Text>Lunch</Text>
            <Text fontSize={"1.5rem"} color="#3c9ec3">
              {calSum?.length > 1 ? calSum[1] : 0}
            </Text>
            <Text>Dinner</Text>
            <Text fontSize={"1.5rem"} color="#3c9ec3">
              {calSum?.length > 2 ? calSum[2] : 0}
            </Text>
            <Text>Snacks</Text>
            <Text fontSize={"1.5rem"} color="#3c9ec3">
              {calSum?.length > 3 ? calSum[3] : 0}
            </Text>
          </Flex>
        </Flex>

        {/* last second box progress */}
        <Flex mt="1rem">
          <Box w="10.5rem">
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text color="gray">Carbs</Text>
              <Text>93% cals</Text>
            </Flex>
            <Progress colorScheme="green" size="sm" value={80} />
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text>26g</Text>
              <Text>left 194g</Text>
            </Flex>
          </Box>
          <Box w="10.5rem" ml="1rem">
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text color="gray">Protien</Text>
              <Text>7% cals</Text>
            </Flex>
            <Progress colorScheme="green" size="sm" value={80} />
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text>2g</Text>
              <Text>left 96g</Text>
            </Flex>
          </Box>
          <Box w="10.5rem" ml="1rem">
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text color="gray">Fat</Text>
              <Text>0% cals</Text>
            </Flex>
            <Progress colorScheme="green" size="sm" value={80} />
            <Flex justifyContent={"space-between"} fontSize="0.9rem">
              <Text>0g</Text>
              <Text>left 76g</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box w="35rem" m="0 auto">
        <Flex>
          <AiOutlineLeft size="1.5rem" color="#3c9ec3" />
          <Box className={styles.dtBord}></Box>
          <AiOutlineRight size="1.5rem" color="#3c9ec3" />
        </Flex>
        <Box>
          <DatePicker color={"#5cc028"} />
        </Box>
      </Box>
    </>
  );
};

export default Box1;
