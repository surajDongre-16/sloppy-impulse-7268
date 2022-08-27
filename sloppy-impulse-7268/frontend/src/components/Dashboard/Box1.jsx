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
import CircularProgressBar from "./CircularProgress";
import HorizontalProg from "./HorizontalProg";

const Box1 = ({ calSum, totC, totF, totP }) => {
  const x = calSum?.reduce((a, b) => a + b, 0);
  const carbs = totC?.reduce((a, b) => a + b, 0);
  const protein = totP?.reduce((a, b) => a + b, 0);
  const fat = totF?.reduce((a, b) => a + b, 0);
  console.log(carbs, protein, fat);
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

          <CircularProgressBar x={x} />

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
        {/* <Flex mt="1rem">
          <Box w="10.5rem">
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
        </Flex> */}
        <Flex mt="1rem">
          <HorizontalProg
            carbs={carbs}
            protein={protein}
            fat={fat}
            totC={totC}
            totF={totF}
            totP={totP}
          />
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
