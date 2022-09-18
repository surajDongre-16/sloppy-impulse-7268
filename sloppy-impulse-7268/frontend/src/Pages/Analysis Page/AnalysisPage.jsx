import React, { useState } from "react";
import styles from "./Analysis.module.css";
import DatePicker from "react-horizontal-datepicker";
import {
  Progress,
  Stack,
  HStack,
  VStack,
  Box,
  Text,
  Heading,
  Button,
  Image,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const AnalysisPage = ({
  title,
  children,
  myadvtitle,
  myadvchild,
  sumtitle,
  sumchild,
}) => {
  const [showDaily, setShowDaily] = useState(true);
  const [showMyAdvice, setShowMyAdvice] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const toggle = () => {
    setShowDaily(true);
    setShowMyAdvice(false);
    setShowSummary(false);
  };
  const myAdviceToggle = () => {
    setShowDaily(false);
    setShowMyAdvice(true);
    setShowSummary(false);
  };
  const summaryToggle = () => {
    setShowDaily(false);
    setShowMyAdvice(false);
    setShowSummary(true);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box id={styles.main}>
        <Box className={styles.leftmain}>
          <Box
            as="button"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
            onClick={toggle}
          // {showDaily ? <DailyAnalysis/> : null}
          >
            {title}
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/daily_analysis1.png"
              />
              <Text marginLeft="30px" textAlign="left">
                Daily Analysis{" "}
              </Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
            onClick={onOpen}
          >
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  {" "}
                  <Text fontSize="22px" fontWeight="semibold">
                    Your Personal Virtual Coach
                  </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text textAlign="left">
                    A good advice at the right moment can change the game and
                    make a difference. MyNetDiary Premium has advice and
                    guidance personalized and ready for you.
                  </Text>
                  <Box as="button" height="100px" width="580px">
                    <Flex>
                      <Image
                        boxSize="30px"
                        marginLeft="20px"
                        src="https://www.mynetdiary.com/img/advice/adviceTip1@3x.png"
                      />
                      <Text marginLeft="50px" textAlign="left">
                        Do you like MyNetDiary’s tips, advice and analysis?
                        Accelerate and streamline your weight loss with
                        exclusive personalized tips and advice available only
                        with MyNetDiary Premium.
                      </Text>
                    </Flex>
                  </Box>
                  <Box as="button" height="100px" width="580px">
                    <Flex>
                      <Image
                        boxSize="30px"
                        marginLeft="20px"
                        src="https://www.mynetdiary.com/img/advice/adviceChart@3x.png"
                      />
                      {/* As mentioned elsewhere, such hardcoded text should be fetched from some constants file.
                      As it is now, it overly restricts what this component can do. */}
                      <Text marginLeft="50px" textAlign="left">
                        Learn your key nutrient averages with weekly analysis to
                        make sure you are getting enough of each nutrient. Some
                        days you get more of them, some days you get less - the
                        important thing is to get on average the amount right
                        for you!
                      </Text>
                    </Flex>
                  </Box>
                  <Box as="button" height="100px" width="580px">
                    <Flex>
                      <Image
                        boxSize="30px"
                        marginLeft="20px"
                        src="https://www.mynetdiary.com/img/advice/adviceProgress@3x.png"
                      />
                      <Text marginLeft="50px" textAlign="left">
                        Get weekly summary progress reports to keep you on
                        track.
                      </Text>
                    </Flex>
                  </Box>
                </ModalBody>

                <ModalFooter>
                  <Button color="black" mr={3} onClick={onClose}>
                    CANCEL
                  </Button>
                  <Button variant="ghost">LEARN MORE</Button>
                  <Button color="teal" variant="ghost">
                    GET PREMIUM
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/weekly_analysis1.png"
              />
              <Text marginLeft="30px">Weekly Analysis 🔒</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
            onClick={myAdviceToggle}
          >
            {myadvtitle}
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/advice1.png"
              />
              <Text marginLeft="30px">My Advice</Text>
            </Flex>
          </Box>

          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="5px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/cals_analysis1.png"
                        />
                        <Text marginLeft="30px">Calories Analysis</Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"

                    onClick={summaryToggle}
                  >
                    {sumtitle}
                    <Text textAlign="left" marginLeft="60px">Summary & Foods</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    textAlign="left"
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="60px">Weight Loss</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="60px">Meal Analysis</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="60px">Cals From Nutrients</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="5px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/macros_analysis1.png"
                        />
                        <Text marginLeft="30px">Carbs,protein & Fat</Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  // onClick={summaryToggle}
                  >
                    <Text textAlign="left" marginLeft="70px">Total Carbs 🔒</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="70px">Protein 🔒</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="70px">Total Fat</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="5px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/nutr_analysis1.png"
                        />
                        <Text marginLeft="30px">My Nutrients 🔒</Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  // onClick={summaryToggle}
                  >
                    <Text textAlign="left" marginLeft="70px">Saturated Fat 🔒</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="70px">Trans Fat 🔒</Text>
                  </Box>
                  <Box
                    as="button"
                    height="48px"
                    width="280px"
                    _hover={{ bg: "#CECECE" }}
                    borderBottom="1px"
                    borderColor="#D3D3D3"
                  >
                    <Text textAlign="left" marginLeft="70px" >Sodium</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>



          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/steps/steps_analysis.png"
              />
              <Text marginLeft="30px">Steps Analysis</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/weight_cals_chart1.png"
              />
              <Text marginLeft="30px"> Weight & Calories Chart</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/steps/steps_chart.png"
              />
              <Text marginLeft="30px">Steps Chart</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/water/water_charts_icon.png"
              />
              <Text marginLeft="30px">Water Chart</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            size="md"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/day_report1.png"
              />
              <Text marginLeft="30px">Day Report</Text>
            </Flex>
          </Box>

          <Box
            as="button"
            height="48px"
            width="280px"
            _hover={{ bg: "#CECECE" }}
            borderBottom="1px"
            borderColor="#D3D3D3"
          >
            <Flex>
              <Image
                boxSize="30px"
                marginLeft="20px"
                src="https://s3.amazonaws.com/img.mynetdiary.com/analysis/data_export1.png"
              />
              <Text marginLeft="30px">Data Export</Text>
            </Flex>
          </Box>
        </Box>

        <Box className={styles.rightmain}>
          {showDaily && (
            <Box id={styles.DailyAnalysis}>
              <Box>
                {children}
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  marginLeft="10px"
                  margin="10px"
                  textAlign="left"
                >
                  Daily Analysis
                </Text>
                <hr></hr>
              </Box>
              <Text margin="10px" marginLeft="20px" fontSize="sm" color="green" textAlign="left">
                Am I on Target Today?
              </Text>

              <Box
                as="button"
                height="50px"
                width="650px"
                _hover={{ bg: "#CECECE" }}
                marginLeft="20px"
                marginTop="10px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_negative1.png"
                  />
                  <Text textAlign="Left" marginLeft="20px">
                    Please log more than 400 food calories to get weight
                    forecast and diet tips
                  </Text>
                </Flex>
              </Box>

              <br></br>

              <Box
                as="button"
                height="30px"
                width="auto"
                _hover={{ bg: "#CECECE" }}
                margin="10px"
                marginLeft="-72%"

              >
                <Text fontWeight="semibold" color="#3c9ec3" >
                  CALORIES ANALYSIS
                </Text>
              </Box>

              <hr></hr>
              <Flex>
                <Box
                  as="button"
                  height="30px"
                  width="auto"
                  _hover={{ bg: "#CECECE" }}
                  margin="10px"
                  marginLeft="20px"
                >
                  <Text fontWeight="semibold" color="#3c9ec3">
                    WEEKLY ANALYSIS 🔒
                  </Text>
                </Box>
                <Box
                  as="button"
                  height="30px"
                  width="auto"
                  _hover={{ bg: "#CECECE" }}
                  margin="10px"
                  marginLeft="20px"
                >
                  <Text fontWeight="semibold" color="#3c9ec3">
                    DAY REPORT
                  </Text>
                </Box>
              </Flex>
            </Box>
          )}

          {showMyAdvice && (
            <Box id={styles.myAdvice} >
              <Text fontSize="xl" fontWeight="semibold" marginLeft="-82%"  >
                My Advice
              </Text>
              <Box
                as="button"
                height="48px"
                width="680px"
                _hover={{ bg: "#CECECE" }}
                // marginTop="20px"
                marginBottom="10px"
                marginLeft="-90px"
              >
                {myadvchild}
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/34_like@3x.png"
                  />
                  <Text marginLeft="20px">
                    MyNetDiary will guide you with personalized tips, diet
                    advice, and feedback as you go.
                  </Text>
                </Flex>
              </Box>

              <Box
                as="button"
                height="48px"
                width="680px"
                _hover={{ bg: "#CECECE" }}
                marginLeft="-90px"
                marginBottom="10px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/15_search_global@3x.png"
                  />
                  <Text marginLeft="20px" textAlign="left">
                    Check out these tips for finding basic and staple food
                    items.
                  </Text>
                </Flex>
              </Box>

              <Box
                as="button"
                height="48px"
                width="800px"
                _hover={{ bg: "#CECECE" }}
                marginLeft="30px"
                marginBottom="10px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/18_fork_spoon@3x.png"
                  />
                  <Text marginLeft="20px" textAlign="left">
                    Accurate portions are a key to success. Use our Portion
                    Guide on the Food Entry screen to estimate portions when you
                    can't weigh or measure your food.
                  </Text>
                </Flex>
              </Box>

              <Box
                as="button"
                height="48px"
                width="680px"
                _hover={{ bg: "#CECECE" }}
                marginLeft="-90px"
                marginBottom="10px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/20_food_grade@3x.png"
                  />
                  <Text marginLeft="20px" textAlign="left">
                    Food Grade in MyNetDiary helps you effortlessly compare
                    foods within the same category and choose the best ones!
                  </Text>
                </Flex>
              </Box>

              <Box
                as="button"
                height="48px"
                width="800px"
                _hover={{ bg: "#CECECE" }}
                marginLeft="30px"
                marginBottom="10px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/14_bulb@3x.png"
                  />
                  <Text marginLeft="20px" textAlign="left">
                    Try logging your meals before you eat. This will help you
                    stick to your calorie budget. If needed, you can adjust your
                    log after eating.
                  </Text>
                </Flex>
              </Box>

              <br></br>
              <Box
                as="button"
                height="30px"
                width="auto"
                marginLeft="-70%"
                _hover={{ bg: "#CECECE" }}
              >
                <Text marginLeft="" fontWeight="semibold" color="#3c9ec3">
                  MY OTHER ADVICE
                </Text>
              </Box>

              <Text
                fontSize="xl"
                fontWeight="semibold"
                marginTop="20px"
                marginLeft="-75%"
              >
                Upcoming Advice
              </Text>

              <Box
                as="button"
                height="48px"
                width="90%"
                _hover={{ bg: "#CECECE" }}
                marginTop="20px"
                marginLeft="20px"
              >
                <Flex>
                  <Image
                    boxSize="30px"
                    marginLeft="20px"
                    src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/14_bulb@3x.png"
                  />
                  <Text marginLeft="20px" textAlign="left">
                    MyNetDiary virtual coach offers custom-tailored advice on
                    each step of your weight loss journey. Stay tuned!
                  </Text>
                </Flex>
              </Box>
              <br></br>
              <Box
                as="button"
                height="30px"
                width="auto"
                marginLeft="-75%"
                _hover={{ bg: "#CECECE" }}
                marginTop="10px"
              >
                <Text fontWeight="semibold" color="#3c9ec3">
                  SNEAK PEEK
                </Text>
              </Box>
            </Box>
          )}

          {showSummary && (
            <Box id={styles.Summary}>
              {sumchild}
              <Tabs isFitted variant="line" colorScheme="twitter">
                <TabList >
                  <Tab>Summary & Foods</Tab>
                  <Tab>Weight Loss</Tab>
                  <Tab>Meal Analysis</Tab>
                  <Tab>Cals From Nutrients</Tab>
                </TabList>

                <TabPanels>
                  <Box>
                    <Text
                      fontSize="xl"
                      fontWeight="semibold"
                      marginLeft="-70%"
                      mb="10px"
                      mt="10px"
                    >
                      Calories Anlaysis
                    </Text>

                    <hr></hr>
                    <Flex mt="30px" mb="30px" ml="60px">
                      <Text fontSize={"xl"}>267cals</Text>{" "}
                      <Text ml="80px" fontSize={"xl"}>
                        20% of budget 1347cals
                      </Text>{" "}
                      <Text ml="70px" fontSize={"xl"}>
                        1080 left
                      </Text>
                    </Flex>

                    <Box w="60%" ml="60px">
                      <Progress value={20} />
                    </Box>

                    <Box w="60%" m="auto" mt="80px" mb="30px">
                      <DatePicker endDate={40} />
                    </Box>
                    <hr></hr>
                    <Text
                      margin="10px"
                      marginLeft="-65%"
                      fontSize="sm"
                      color="green"
                      fontWeight="semibold"
                    >
                      Recent Foods Providing Most Calories
                    </Text>

                    <Box
                      as="button"
                      height="50px"
                      width="650px"
                      _hover={{ bg: "#CECECE" }}
                      marginLeft="-230px"
                      marginTop="10px"
                    >
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="20px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/bean/i302.png"
                        />
                        <Text textAlign="Left" marginLeft="20px">
                          Egg scrambled provided 328cals in previous day
                        </Text>
                      </Flex>
                    </Box>
                    <br />
                    <Box
                      as="button"
                      height="50px"
                      width="650px"
                      _hover={{ bg: "#CECECE" }}
                      marginLeft="-230px"
                      marginTop="10px"
                    >
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="20px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/bean/i627.png"
                        />
                        <Text textAlign="Left" marginLeft="20px">
                          Orange Juice raw provided 112cals in previous day
                        </Text>
                      </Flex>
                    </Box>
                    <br />
                    <Box
                      as="button"
                      height="50px"
                      width="650px"
                      _hover={{ bg: "#CECECE" }}
                      marginLeft="-230px"
                      marginTop="10px"
                    >
                      <Flex>
                        <Image
                          boxSize="30px"
                          marginLeft="20px"
                          src="https://s3.amazonaws.com/img.mynetdiary.com/bean/i535.png"
                        />
                        <Text textAlign="Left" marginLeft="20px">
                          Whole-wheat bread provided 94cals in previous day
                        </Text>
                      </Flex>
                    </Box>
                    <hr />
                    <Text
                      margin="10px"
                      marginLeft="-80%"
                      fontSize="sm"
                      color="green"
                      fontWeight="semibold"
                    >
                      About Calories
                    </Text>
                    <Text textAlign="left" marginLeft="40px">
                      Calories measure the amount of energy we consume from
                      foods and beverages and the amount we burn from basal
                      metabolism (at complete rest), thermogenesis (to digest
                      and process food), and physical activity. To lose weight,
                      calories intake must be less than calories burned. To gain
                      weight, calories intake must be more than calories burned.
                      To maintain weight, calories intake needs to match
                      calories burned.
                    </Text>

                    <Flex>
                      <Box
                        as="button"
                        height="30px"
                        width="auto"
                        marginLeft="40px"
                        mt="20px"
                        mb="20px"
                        _hover={{ bg: "#CECECE" }}
                      >
                        <Text
                          marginLeft=""
                          fontWeight="semibold"
                          color="#3c9ec3"
                        >
                          READ ARTICLE
                        </Text>
                      </Box>

                      <Box
                        as="button"
                        height="30px"
                        width="auto"
                        marginLeft="20px"
                        mt="20px"
                        mb="20px"
                        _hover={{ bg: "#CECECE" }}
                      >
                        <Text
                          marginLeft=""
                          fontWeight="semibold"
                          color="#3c9ec3"
                        >
                          RELATED NUTRIENTS
                        </Text>
                      </Box>
                    </Flex>
                    <hr />

                    <Flex>
                      <Box
                        as="button"
                        height="30px"
                        width="auto"
                        marginLeft="20px"
                        mt="10px"
                        mb="10px"
                        _hover={{ bg: "#CECECE" }}
                      >
                        <Text
                          marginLeft=""
                          fontWeight="semibold"
                          color="#3c9ec3"
                        >
                          PLAN CALORIES & WEIGHT
                        </Text>
                      </Box>

                      <Box
                        as="button"
                        height="30px"
                        width="auto"
                        marginLeft="20px"
                        mt="10px"
                        mb="10px"
                        _hover={{ bg: "#CECECE" }}
                      >
                        <Text
                          marginLeft=""
                          fontWeight="semibold"
                          color="#3c9ec3"
                        >
                          DAY REPORT
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </TabPanels>
              </Tabs>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AnalysisPage;
