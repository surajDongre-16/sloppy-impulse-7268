import React from "react";
import { Box, Heading, Grid, Image, Text, Button } from "@chakra-ui/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

// Very unintuitive name. Reader gets no idea what FourthComponent is expected to do or what purpose it serves.
const FourthComponent = () => {
  return (
    <Box as="section" roundedBottom="100rem 5rem" mb={"-20px"}>
      <Box p={"4rem 0 1.6rem 0"}>
        <Box p="0 15px 0 15px" maxW={"1470px"} m="auto">
          <Heading
            color="#268fd0"
            as={"h3"}
            fontSize={["2rem", "3.5rem"]}
            fontWeight={500}
            mb={["30px", "30px", "50px"]}
          >
            {counterData.heading}
          </Heading>
          <Box>
            <Text
              color="#46618a"
              fontWeight={500}
              fontSize={["1.2rem", "1.5rem", "1.8rem", "2rem"]}
            >
              {counterData.description}
            </Text>
          </Box>
          <Button
            mt="2rem"
            variant="outline"
            height={["50px", "60px"]}
            rounded={"50px"}
            color="#0bb850"
            colorScheme={""}
            border="2px solid transparent"
            borderColor="rgba(11,184,80,.4)"
            fontSize={["1.1rem", "1.4rem"]}
            p={["25px 20px", "35px 40px"]}
            textTransform={"uppercase"}
            mb={["45px", "35px", "25px", ""]}
            _hover={{
              borderColor: "#0bb850",
            }}
            _active={{
              color: "white",
              borderColor: "#0bb850",
              backgroundColor: "#0bb850",
            }}
            cursor='default'
          >
            {counterData.btn1}
            <Box ml={3}>
              <BsFillCaretRightFill />
            </Box>
          </Button>
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(3,1fr)",
              "repeat(3,1fr)",
            ]}
            gap={["2rem", "2rem", "1.5rem", "3rem"]}
            borderTop={"3px dashed #e1cdbe"}
            mt={["1rem", "3rem"]}
            pt={"3rem"}
          >
            {counterData.data.map((item, index) => (
              <Box
                key={uuidv4()}
                maxW={["250px", "350px", "350px", "400px"]}
                m="auto"
                mt={["1rem", "3rem"]}
              >
                <Box
                  //   border={"1px solid #e3e3e3"}
                  rounded={"md"}
                  maxW={["220px", "350px", "350px", "400px"]}
                  m="auto"
                >
                  <Image
                    boxShadow={"0 6px 13px 0 rgb(13 9 5 / 20%)"}
                    src={item.imgUrl}
                    m="auto"
                    rounded={"3xl"}

                    // h={['150px', '150px', '150px', '200px']}
                  />
                </Box>
                <Heading
                  as={"h5"}
                  color="#268fd0"
                  m={["1rem 0", "1.5rem 0", "1.5rem 0", "4rem 0 2rem"]}
                  fontSize={["1.6rem", "1.6rem", "1.8rem", "2.5rem"]}
                  fontWeight={600}
                >
                  {item.name}
                </Heading>
                <Text
                  color="#46618a"
                  fontWeight={500}
                  fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                >
                  {item.description}
                </Text>
              </Box>
            ))}
          </Grid>
          <Button
            mt="2rem"
            variant="outline"
            height={["50px", "60px"]}
            rounded={"50px"}
            color="#0bb850"
            colorScheme={""}
            border="2px solid transparent"
            borderColor="rgba(11,184,80,.4)"
            fontSize={["1.1rem", "1.4rem"]}
            p={["25px 20px", "35px 40px"]}
            textTransform={"uppercase"}
            mb={["45px", "35px", "25px", ""]}
            _hover={{
              borderColor: "#0bb850",
            }}
            _active={{
              color: "white",
              borderColor: "#0bb850",
              backgroundColor: "#0bb850",
            }}
            cursor='default'
          >
            {counterData.btn2}
            <Box ml={3}>
              <BsFillCaretRightFill />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthComponent;

// Having data hardcoded like this and directly referenced using this variable makes refactoring this
// difficult when data is actually fetched from a real database. The component should instead, always
// rely on some function to return the list of data items. It is upto the function how to return it.
// Initially it can be a hardcoded array but later on devs can add business logic to fetch it from
// the database or some local cache. The advantage of this approach is that, it keeps the component
// code separate from the data layer and will not involve touching the JSX at all. The component really
// doesn't care where the data comes from. This keeps newer changes localised and prevents them from
// bleeding into previous changes.
const counterData = {
  heading: "Top Rated Calorie Counter App",
  description:
    "“This is my favorite food diary app. I used six of the 'top' apps in this category for several days so that I could compare them and select what worked best for me. MyNetDiary was the winner. Intuitive, simple layout, decent database, appealing graphic design, and no ads.”",
  btn1: "See More Testimonials",
  data: [
    {
      imgUrl:
        "https://s3.amazonaws.com/img.mynetdiary.com/keto/cover-premium-keto-recipes@2x.jpg",
      name: "Premium Recipes",
      href: "",
      description:
        "Hundreds of easy recipes, with great variety, carefully crafted for great taste by a team of Registered Dietitians.",
    },
    {
      imgUrl:
        "https://s3.amazonaws.com/img.mynetdiary.com/images/cover-easy-tracking-premium@2x.png",
      name: "Easy Tracking",
      href: "",
      description:
        "Massive food catalog, fastest barcode scanner, quickest food lookup making food tracking a breeze",
    },
    {
      imgUrl:
        "https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-and-guidance-keto@2x.png",
      name: "Insights and Guidance",
      href: "",
      description:
        "Encouraging and supportive feedback, guiding you to your goal.",
    },
  ],
  btn2: "More Features",
};
