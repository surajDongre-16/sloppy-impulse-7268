import React from "react";
import {
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
const SecondComponent = () => {
  return (
    <Box as="section" mt="-8rem">
      <Box p={"0 0 1.6rem 0"}>
        <Box p="0 15px 0 15px" maxW={"1470px"} m="auto">
          <Box>
            <Center>
              <Text
                color="#46618a"
                fontWeight={500}
                fontSize={["1.2rem", "1.5rem", "1.8rem", "2rem"]}
                mb="20px"
              >
                {"“You really can't go wrong with MyNetDiary"}
                <Text as="br" display={["none", "none", "block", "block"]} />
                {"as a scientifically-proven way to help you lose weight”"}
              </Text>
            </Center>
          </Box>
          <Box pb="50px">
            <Image
              src={helthSection.logo}
              h={["32px", "32px", "48px", "60px"]}
              m="auto"
              mb={"4%"}
              mt={"2%"}
            />
          </Box>
          <UnorderedList
            display={"flex"}
            listStyleType="none"
            ml={"0"}
            justifyContent="space-between"
            alignItems="center"
            gap={["10px", "10px", "10px", "30px"]}
          >
            {helthSection.data.map((item, index) => (
              <ListItem
                key={uuidv4()}
                display={[
                  `${
                    index === 0 || index === 5 || index === 6 ? "none" : "block"
                  }`,
                  `${index === 0 ? "none" : "block"}`,
                  `${index === 0 ? "none" : "block"}`,
                  "block",
                ]}
              >
                <Image src={item} h="auto" maxH="50px" />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondComponent;

const helthSection = {
  heading:
    "“You really can't go wrong with MyNetDiary as a scientifically-proven way to help you lose weight”",
  logo: "https://s3.amazonaws.com/img.mynetdiary.com/images/wh-logo.svg",
  data: [
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-usa-today@2x.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-abc-news.svg",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-fox.svg",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-times.svg",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-consumer-reports.svg",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-wsj.svg",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-chicago-tribune.svg",
  ],
};
