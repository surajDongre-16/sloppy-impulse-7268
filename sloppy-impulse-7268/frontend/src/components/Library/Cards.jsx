import React from "react";
import { Box, Heading, Stack, Image, Flex, Grid } from "@chakra-ui/react";
import { BsCalendar4Week } from "react-icons/bs";
import { dietLibrary } from "../../utils/Blogs";


const Cards = () => {

  return (
    <Box w="60rem" m="0 auto">
      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={10}
      >
        {dietLibrary.map((blogs) => (
          <Box
            maxW={"445px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            borderRadius="1.5rem"
            p={6}
            cursor="pointer"
            overflow={"hidden"}
            as="a"
            href={blogs.link}
          >
            <Box
              h={"auto"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image src={blogs.img} alt="blog-img" layout={"fill"} />
            </Box>
            <Stack>
              <Flex alignItems={"center"}>
                <BsCalendar4Week color="gray" size="1.5rem" />
                <Heading
                  color={"#466a9c"}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  ml="1rem"
                >
                  {blogs.date}
                </Heading>
              </Flex>
              <Heading
                _hover={{ textDecoration: "underline" }}
                color={"#466a9c"}
                textAlign="left"
                fontSize={"3xl"}
                fontFamily={"body"}
              >
                {blogs.heading}
              </Heading>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
