import React from "react";
import {
  Box,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const SeventhComponent = () => {
  return (
    <Box as="section" display={"block"}>
      <Box>
        <Box
          p={"100px 15px 0 15px"}
          pt={["50px", "50px", "80px", "100px"]}
          maxW={"1470px"}
          m="auto"
          borderTop={"1px dashed #e1cdbe"}
        >
          <Heading
            color="#268fd0"
            as={"h3"}
            fontSize={["2rem", "3.5rem"]}
            fontWeight={600}
            mb={["15px", "15px", "20px", "20px", "30px"]}
          >
            Compatible With
          </Heading>
          <UnorderedList listStyleType={"none"} ml="0">
            <Flex
              //   border={"1px solid red"}
              justifyContent={[
                "center",
                "center",
                "center",
                "center",
                "space-between",
              ]}
              alignItems={"center"}
              m="10px 0"
              //   flexWrap={["wrap"]}
            >
              {compatibleData.map((item) => (
                <ListItem key={uuidv4()} gap="0">
                  <Image
                    src={item.ImgUrl}
                    m={["15px", "15px", 0, 0]}
                    // maxH={["44px", "44px", "44px", "none"]}
                    // maxW={["100px", "120px", "120px", "none"]}
                  />
                </ListItem>
              ))}
            </Flex>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default SeventhComponent;

const compatibleData = [
  {
    ImgUrl:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-garmin@2x.png",
  },
  {
    ImgUrl:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-app-health@2x.png",
  },
  {
    ImgUrl:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-samsung-health@2x.png",
  },
  {
    ImgUrl:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-apple-watch@2x.png",
  },
  {
    ImgUrl:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/logo-fitbit@2x.png",
  },
];
