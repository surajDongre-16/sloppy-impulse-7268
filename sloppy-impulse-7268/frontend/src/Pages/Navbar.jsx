import {
  Box,
  Button,
  Flex,
  ListItem,
  UnorderedList,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  Icon,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import icon1 from "../Assets/dietpage/CalorieCounting.svg";
import icon2 from "../Assets/dietpage/Low-cardDiet.svg";
import icon3 from "../Assets/dietpage/KetoDiet.svg";
import icon4 from "../Assets/dietpage/HighProteinDiet.svg";
import icon5 from "../Assets/dietpage/LowfatDiet.svg";
import icon6 from "../Assets/dietpage/MediterraneamDiet.svg";
import icon7 from "../Assets/dietpage/VegeterianDiet.svg";
import icon8 from "../Assets/dietpage/VeganDiet.svg";
// import homeLogo from "../Assets/homepage/nav/logo-dark.svg";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  //   const [colorChange, setColorchange] = useState(false);
  //   const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //       setColorchange(true);
  //     } else {
  //       setColorchange(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeNavbarColor);

  return (
    <Box
      // className={colorChange ? 'navbar colorChange' : 'navbar'}
      as="nav"
      position={"fixed"}
      top="0"
      w="100%"
      zIndex={100000}
      p="0 7px"
      background="white"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      // border={"1px solid  red"}
    >
      <Box>
        <Flex maxW={"1470px"} m="auto" p="5px 15px" mt="15px">
          {/* Logo  */}
          <Link to="/">
            <Box
              cursor="pointer"
              height={"4.2rem"}
              width="17.5rem"
              display={"block"}
              background={`url(https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg) 50% 50% no-repeat`}
              backgroundSize={"contain"}
              marginBottom="5px"
              // border={"1px solid red"}
            ></Box>
          </Link>
          {/* Right Side  */}
          <Spacer />
          <Spacer />
          <Spacer />
          <Flex flex="1" justifyContent={"space-between"}>
            <Flex justifyContent={"flex-end"}>
              <Button
                as="div"
                cursor="pointer"
                height="100%"
                colorScheme="green"
                background="linear-gradient(to bottom,#ffb845 0,#ff9945 100%)"
                rounded={"50px"}
                border="3px solid #grey"
                borderColor="rgba(138,85,70,.15)"
                fontSize={[".9rem", "1.3rem"]}
                p={["0 25px", "0 25px"]}
                _hover={{
                  rounded: "50px",
                  backgroundColor:
                    "linear-gradient(to bottom,#fff45 0,red 100%)",
                  opacity: "1",
                }}
                _active={{
                  rounded: "50px",
                  backgroundColor:
                    "linear-gradient(to bottom,#ff845 0,#ff9945 100%)",
                }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SIGN UP
              </Button>
              <Button
                ml="15px"
                variant="outline"
                rounded={"50px"}
                height="100%"
                color="#0bb850"
                colorScheme={""}
                border="2px solid transparent"
                borderColor="rgba(11,184,80,.4)"
                fontSize={["0.7rem", "1.2rem"]}
                p={["0 25px", "0 25px"]}
                textTransform={"uppercase"}
                _hover={{
                  rounded: "50px",
                  borderColor: "#0bb850",
                  backgroundColor: "white !important",
                  opacity: "1",
                  color: "#0bb850",
                }}
                _active={{
                  rounded: "50px",
                  color: "white",
                  borderColor: "#0bb850",
                  backgroundColor: "#0bb850",
                }}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SIGN IN
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box h="50px" w="100%">
        <UnorderedList
          display={"flex"}
          alignItems={"center"}
          listStyleType="none"
          ml="0"
          justifyContent={"center"}
          flex="1"
          // pt="10px"
        >
          {NAV_ITEMS &&
            NAV_ITEMS.map((navItem, index) => (
              <Menu key={uuidv4()}>
                {({ isOpen }) => (
                  <ListItem
                    p="0 20px"
                    height={"85%"}
                    color={"#46618a"}
                    border={
                      isOpen ? "1px solid #E2E8F0" : "1px solid transparent"
                    }
                    boxShadow={isOpen ? "md" : ""}
                    rounded={"5px 5px 0 0"}
                    fontWeight={500}
                    fontSize={"22px"}
                    position="relative"
                    cursor={"pointer"}
                    zIndex={100}
                    _before={
                      index !== 0
                        ? {
                            display: "block",
                            position: "absolute",
                            top: "0.9rem",
                            left: "-0.2rem",
                            height: "0.4rem",
                            width: "0.4rem",
                            content: '""',
                            background: "#beaeac",
                            transform: " rotate(45deg)",
                          }
                        : ""
                    }
                  >
                    <MenuButton zIndex={10} as="button" colorScheme="red">
                      <Text
                        color={isOpen ? "#ff8e3e" : ""}
                        fontWeight="600"
                        fontSize={"1.6rem"}
                      >
                        {navItem.label}
                      </Text>
                    </MenuButton>
                    {navItem.children && (
                      <MenuList
                        ml="-1.3rem"
                        mt="2px"
                        boxShadow={"md"}
                        rounded={"0 5px 5px 5px"}
                        style={{ zIndex: "-10 !important" }}
                        pl="10px"
                        pr="10px"
                        minW={"18rem"}
                      >
                        {navItem.children.map((child) => (
                          <>
                            {child.href ? (
                              <Link to={child.href}>
                                <MenuItem
                                  key={uuidv4()}
                                  rounded="5px"
                                  fontSize={"xl"}
                                  _hover={{
                                    background: "#ff8e3e",
                                    color: "white",
                                  }}
                                  icon={
                                    child.icon ? "" : <CircleIcon boxSize={2} />
                                  }
                                >
                                  {child.icon && (
                                    <Image
                                      src={child.icon}
                                      ml="-5px"
                                      mr="10px"
                                    />
                                  )}
                                  {child.label}
                                </MenuItem>
                              </Link>
                            ) : (
                              <MenuItem
                                key={uuidv4()}
                                rounded="5px"
                                fontSize={"xl"}
                                _hover={{
                                  background: "#ff8e3e",
                                  color: "white",
                                }}
                                icon={
                                  child.icon ? "" : <CircleIcon boxSize={2} />
                                }
                              >
                                {child.icon && (
                                  <Image src={child.icon} ml="-5px" mr="10px" />
                                )}
                                {child.label}
                              </MenuItem>
                            )}
                          </>
                        ))}
                      </MenuList>
                    )}
                  </ListItem>
                )}
              </Menu>
            ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Navbar;

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const NAV_ITEMS = [
  {
    label: "Features",
    children: [
      {
        label: "iPhone & iPad app",
        href: "",
      },
      {
        label: "Android app",
        href: "",
      },
      {
        label: "User Reviews",
        href: "",
      },
      {
        label: "MyNetDiary vs MyFitnessPal",
        href: "",
      },
    ],
    href: "",
  },
  {
    label: "Diets",
    href: "",
    children: [
      {
        label: "Calorie Counting",
        href: "",
        icon: icon1,
      },
      {
        label: "Low-Carb",
        href: "",
        icon: icon2,
      },
      {
        label: "Keto",
        href: "",
        icon: icon3,
      },
      {
        label: "High-Protein",
        href: "",
        icon: icon4,
      },
      {
        label: "Low-Fat",
        href: "",
        icon: icon5,
      },
      {
        label: "Mediterranean",
        href: "",
        icon: icon6,
      },
      {
        label: "Vegetarian",
        href: "",
        icon: icon7,
      },
      {
        label: "Vegan",
        href: "",
        icon: icon8,
      },
    ],
  },
  {
    label: "Library",
    href: "/library",
    children: [
      {
        label: "Weight Loss Blog",
        href: "/library/dietitians-blog/dietitians-blog",
      },
      {
        label: "Diet Library",
        href: "/library/diets/diet-library",
      },
      {
        label: "Dietitian team",
        href: "/library/dietitian-team/dietitian-team",
      },
    ],
  },
  {
    label: "Food",
    href: "",
    children: [
      {
        label: "Food Search",
        href: "",
      },
      {
        label: "Database Licensing & API",
        href: "",
      },
    ],
  },
  {
    label: "Business",
    href: "",
    children: [
      {
        label: "Find Healthcare Professional",
        href: "",
      },
      {
        label: "For Healthcare Professionals",
        href: "",
      },
      {
        label: "For Trainers and Clubs",
        href: "",
      },
      {
        label: "MyNetDiary vs MyFitnessPal",
        href: "",
      },
      {
        label: "Food Database Licensing",
        href: "",
      },
    ],
  },
];
