import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/Library.module.css";
const first = [
  {
    id: 1,
    text: "Calorie Counting",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcFpuQcED2rGwrG704WeHQuw4qY2EhGWYYg&usqp=CAU",
  },
  {
    id: 2,
    text: "Low-Carb Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1K8KKuD7yavb3IOzGyuWNP3_KsLKAHcotSw&usqp=CAU",
  },
  {
    id: 3,
    text: "Keto Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9Pa3xav9xluj1vVi0dZMQivjFCwMQqoy1g&usqp=CAU",
  },
  {
    id: 4,
    text: "High-Protien Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YlQBea5UcotNxUwW_EXzGqZ_g5KtFP_uvg&usqp=CAU",
  },
  {
    id: 5,
    text: "Low-Fat Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvyBibO4Z1Y-0v_BT87yN6bo8m9P1lUcVHQ&usqp=CAU",
  },
  {
    id: 6,
    text: "Mediterranean Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqik6EJ6vChqk1wf8YPfdQ4XsbExOjdHPkg&usqp=CAU",
  },
  {
    id: 7,
    text: "Vegiterian Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmlCsI5ZnkL_ALmjRoVrRomx79BokjGR4cA&usqp=CAU",
  },
  {
    id: 8,
    text: "Vegan Diet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1d7JF0zjToTl3ssThBHic3WkDGn1ZFRNW4Q&usqp=CAU",
  },
];

const second = [
  {
    id: 1,
    head: "Alcohol & Other Beverages",
    list: [
      { id: 1, li: "Beer" },
      { id: 2, li: "Calories" },
      { id: 3, li: "Coffee & Tea" },
      { id: 4, li: "Pop & Soda" },
      { id: 5, li: "Water" },
      { id: 6, li: "Kefir" },
      { id: 7, li: "Milk" },
      { id: 8, li: "Wine" },
    ],
  },
  {
    id: 2,
    head: "Diabetes",
    list: [
      { id: 1, li: "Blood Glucose" },
      { id: 2, li: "Carbs & Carbs Counting" },
      { id: 3, li: "Health" },
      { id: 4, li: "Medications" },
      { id: 5, li: "Other Resources" },
      { id: 6, li: "Preventing Diabetes" },
      { id: 7, li: "Tracking" },
      { id: 8, li: "Pregnancy" },
      { id: 8, li: "Recipes" },
    ],
  },
  {
    id: 3,
    head: "Dining Out",
    list: [
      { id: 1, li: "Buffet & Cafeteria" },
      { id: 2, li: "Fast Food" },
      { id: 3, li: "Portion Size & Calories" },
    ],
  },
  {
    id: 4,
    head: "Eating Disorder",
    list: [
      { id: 1, li: "Bulimia" },
      { id: 2, li: "Orthorexia" },
      { id: 3, li: "Anorexia" },
      { id: 4, li: "Binge Eating Disorder" },
    ],
  },
  {
    id: 5,
    head: "Exercise",
    list: [
      { id: 1, li: "Aerobic & Cardio" },
      { id: 2, li: "Bicycling" },
      { id: 3, li: "Fueling for Exercise" },
      { id: 4, li: "Fun & Games" },
      { id: 5, li: "Goals" },
      { id: 6, li: "Health" },
      { id: 7, li: "Injury Recovery" },
      { id: 8, li: "Pilates/Yoga/core" },
    ],
  },
  {
    id: 6,
    head: "Foods & Recipes",
    list: [
      { id: 1, li: "Beans, Peas & Soy" },
      { id: 2, li: "Chicken & Turkey" },
      { id: 3, li: "Chocolate" },
      { id: 4, li: "Dairy Foods" },
      { id: 5, li: "Fish & Seafood" },
      { id: 6, li: "Fruit & Vegitables" },
      { id: 7, li: "Nuts & Seeds" },
      { id: 8, li: "Read Meat" },
    ],
  },
  {
    id: 7,
    head: "Holidays/Parties",
    list: [
      { id: 1, li: "Easter" },
      { id: 2, li: "Football" },
      { id: 3, li: "Holloween" },
      { id: 4, li: "New Year's" },
      { id: 5, li: "Independance Day" },
      { id: 6, li: "Thanksgiving" },
      { id: 7, li: "Valentine's Day" },
      { id: 8, li: "Winter Holiday Season" },
    ],
  },
  {
    id: 8,
    head: "Meal Planning Diets",
    list: [
      { id: 1, li: "Breakfast" },
      { id: 2, li: "Lunch" },
      { id: 3, li: "Dinner" },
      { id: 4, li: "Snacks" },
      { id: 5, li: "Gluten Free & Celiac" },
      { id: 6, li: "Healthy Eating" },
      { id: 7, li: "High Protien" },
      { id: 8, li: "Plate Method" },
    ],
  },
  {
    id: 9,
    head: "Nutrients",
    list: [
      { id: 1, li: "Antioxidants" },
      { id: 2, li: "B12" },
      { id: 3, li: "Caffeine" },
      { id: 4, li: "Calcium" },
      { id: 5, li: "Carbs" },
      { id: 6, li: "Iron" },
      { id: 7, li: "Potassium" },
      { id: 8, li: "Protein" },
    ],
  },
  {
    id: 10,
    head: "Travel",
    list: [
      { id: 1, li: "Regional Food" },
      { id: 2, li: "Plains, Trains & Automobiles" },
      { id: 3, li: "Exercise" },
      { id: 4, li: "Maintain No Gain" },
    ],
  },
];

const Menus = () => {
  return (
    <Box display="flex" flexDirection={"column"}>
      <Heading
        as="h3"
        fontSize={"1.7rem"}
        className={styles.head}
        _hover={{ textDecoration: "underline", color: "#466a9c" }}
      >
        Diet Library
      </Heading>
      {first.map((el) => (
        <Flex className={styles.first} _hover={{ textDecoration: "underline" }}>
          <Image src={el.img} alt={el.text} w="3rem" ml="1rem" />
          <Heading as="h3" ml="1rem" fontSize={"1.5rem"} fontWeight="500">
            {el.text}
          </Heading>
        </Flex>
      ))}
      <Heading
        as="h3"
        fontSize={"1.7rem"}
        className={styles.head}
        _hover={{ textDecoration: "underline", color: "#466a9c" }}
      >
        Dietitian's Team
      </Heading>
      <Heading
        as="h3"
        fontSize={"1.7rem"}
        className={styles.head}
        _hover={{ textDecoration: "underline", color: "#466a9c" }}
      >
        Dietitian's Blog
      </Heading>
      <Box>
        {second.map((el) => (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    className={styles.accord}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {el.head}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList
                  textAlign={"left"}
                  fontSize="1.3rem"
                  color="#466a9c;"
                >
                  {el.list.map((e) => (
                    <ListItem
                      mt="0.5rem"
                      cursor={"pointer"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      {e.li}
                    </ListItem>
                  ))}
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>

      {/* in the news */}
      <Heading
        as="h3"
        fontSize={"1.7rem"}
        className={styles.head}
        _hover={{ textDecoration: "underline", color: "#466a9c" }}
      >
        In the News
      </Heading>
    </Box>
  );
};

export default Menus;
