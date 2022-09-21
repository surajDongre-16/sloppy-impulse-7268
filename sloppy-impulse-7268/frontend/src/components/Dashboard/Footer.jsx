import {
  Box,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import styles from "../../Styles/DashboardNav.module.css";

// Such strings should be declared in one place in a separate class or js file.
// For example, see - https://github.com/mozilla/addons-frontend/blob/master/src/amo/constants.js
// This makes managing static text easier. It also becomes easier to add support l10n and i18n
// so the app can render text for different languages (like rtl languages).
const l1 = [
  { id: 1, text: "Success Stories" },
  { id: 2, text: "Efficacy report" },
  { id: 3, text: "Member testimonials" },
  { id: 4, text: "Community" },
  { id: 5, text: "Dietitian's Blog" },
  { id: 6, text: "Ask a Dietitian" },
  { id: 7, text: "Instant food search" },
  { id: 8, text: "Diabetes and health tracking" },
];

const l2 = [
  { id: 1, text: "iPhone/iPod app" },
  { id: 2, text: "iPad app" },
  { id: 3, text: "Android app" },
  { id: 4, text: "Diabetes app for iPhone" },
  { id: 5, text: "Products and features" },
  { id: 6, text: "Fitbit linking" },
  { id: 7, text: "Withings linking" },
  { id: 8, text: "Garmin linking" },
  { id: 9, text: "Twitter linking" },
];

const l3 = [
  { id: 1, text: "Gift cards & Group discounts" },
  { id: 2, text: "For trainers" },
  { id: 3, text: "For healthcare professionals" },
  { id: 4, text: "For families" },
];

const l4 = [
  { id: 1, text: "Help" },
  { id: 2, text: "Learn more" },
  { id: 3, text: "Diet articles" },
  { id: 4, text: "About" },
  { id: 5, text: "Privacy policy" },
  { id: 6, text: "Terms of use" },
  { id: 7, text: "Contact us" },
];

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.ft1}>
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/footer@2x.png"
          alt="footer"
          className={styles.ftimg}
        />
        <HStack>
          <Flex justifyContent={"space-between"} w="73rem" m="auto">
            <Flex className={styles.ftflex} w="20rem">
              <Box
                display="flex"
                color="white"
                alignItems={"center"}
                m="2rem 0"
              >
                <AiOutlineCopyrightCircle />
                <Text ml="0.5rem">2020 MyNetDiary Inc.</Text>
              </Box>
              <Text textAlign={"left"} fontSize="0.8rem">
                All rights reserved. MyNetDiary is a registerd trademark of
                MyNetDiary Inc.
              </Text>
            </Flex>
            <Flex className={styles.ftflex} w="10rem">
              <UnorderedList>
                {l1.map((el) => (
                  <ListItem
                    key={el.id}
                    mt="0.5rem"
                    zIndex={"10"}
                    cursor={"pointer"}
                    _hover={{ borderBottom: "1px solid #afca99;" }}
                  >
                    <a href="#">{el.text}</a>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
            <Flex className={styles.ftflex} w="10rem">
              <UnorderedList>
                {l2.map((el) => (
                  <ListItem
                    key={el.id}
                    mt="0.5rem"
                    _hover={{ borderBottom: "1px solid #afca99;" }}
                    cursor={"pointer"}
                  >
                    <a href="#">{el.text}</a>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
            <Flex className={styles.ftflex}>
              <UnorderedList>
                {l3.map((el) => (
                  <ListItem
                    key={el.id}
                    mt="0.5rem"
                    _hover={{ borderBottom: "1px solid #afca99;" }}
                    cursor={"pointer"}
                  >
                    <a href="#">{el.text}</a>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
            <Flex className={styles.ftflex}>
              <UnorderedList>
                {l4.map((el) => (
                  <ListItem
                    key={el.id}
                    mt="0.5rem"
                    _hover={{ borderBottom: "1px solid #afca99;" }}
                    cursor={"pointer"}
                  >
                    <a href="#">{el.text}</a>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
