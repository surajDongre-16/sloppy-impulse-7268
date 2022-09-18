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

// What is Box1? Each component should have a few comments about what it does, a sample usage example if possible, etc.
// A good component has a well defined purpose and usually it should be configurable so it can be used elsewhere too.
// From the code below, it looks like Box1 is a "container" which is a component that is composed of multiple smaller
// independent components. I'm making this distinction because that helps to think about the UI in a different, more
// compartmentalised way that makes organising, writing, reusing and maintaining code easier.
// Also, the current way of combining the entire JSX in a single return statement makes understanding the sub-components
// extremely difficult. A better way to use JSX is to define different variables for different logical elements within
// the component. For example (might not be strictly syntactically correct) -
//
// const Header = (props) => (
//   <h1 className="heading">
//     props.message
//   </h1>
// );
//
// const Body = (props) => (
//   <div className="content">
//     props.text
//   </div>
// );
//
// // ... Similarly Section and Footer are defined.
//
// const Page = (props) => {
//   return (
//     <div>
//       <Header message=props.heading />
//       <Body text=props.content />
//         <Section>
//           <OtherComponent />
//           <AnotherComponent />
//         </Section>
//       <Footer />
//     </div>
//   );
// }
//
// The example above makes reading and understanding what the component is doing is much easier.
//
// Another issue that all the components in the codebase suffer from is that the styling is defined inline
// instead of separating that in a dedicated scss or css file. Inline css is usually okay when the component
// is tiny and the css rules are relatively self contained. For such a big component, inline css makes this
// component practically non-reusable, degrades code readbility and clutters the layout and logic contained
// in the component with its styling rules which have little role to play in what the component is about.
// A good example of a cleanly written big component is -
// https://github.com/mozilla/addons-frontend/tree/master/src/amo/components/AddonsCard. It separates its
// styling from the component and encapsulates all the points described above.
const Box1 = ({ calSum, totC, totF, totP }) => {
  const x = calSum?.reduce((a, b) => a + b, 0);
  const carbs = totC?.reduce((a, b) => a + b, 0);
  const protein = totP?.reduce((a, b) => a + b, 0);
  const fat = totF?.reduce((a, b) => a + b, 0);
  console.log(carbs, protein, fat,"box1");
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

        {/* Such big commented code blocks should be avoided */}
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
            // Variable names below aren't indicative of what they represent. Here, one can only guess
            // that they represent totalCarbs, totalFat and totalProtein but someone reading this out
            // of context would have no idea. This reduces code readablility.
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
