import React from "react";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
const Firstcomponent = () => {
  return (
    <Box
      as="section"
      width={"100%"}
      position={"relative"}
      overflow={"hidden"}
      // border="1px solid blue"
      pb="200px"
      mt="3%"
      _before={{
        position: "absolute",
        display: "block",
        width: "100%",
        height: "60%",
        // background: '#4ea403',

        background:
          "url(https://s3.amazonaws.com/img.mynetdiary.com/images/texture-noise@1x.png),radial-gradient(ellipse at top,#05b24a 0,#05963d 60%)",
        borderBottomRightRadius: "100rem 5rem",
        borderBottomLeftRadius: "100rem 5rem",
        boxShadow: "inset rgb(9 108 46 / 76%) 0 -2.3rem 10.7rem",
        zIndex: "-1",
        content: '""',
        overflow: "hidden",
      }}
    >
      <Box
        p={["5rem 0 2.6rem 0", "5rem 0 2.6rem 0", "10rem 0 2.6rem 0"]}
        width="100%"
        overflow={"hidden"}
        m="auto"
      >
        <Box
          position={"relative"}
          zIndex="1"
          width="100%"
          m="auto"
          display={"flex"}
          justifyContent={"center"}
          _after={[
            "",
            "",
            "",
            {
              position: "absolute",
              top: "-700px",
              left: "20%",
              width: "50rem",
              height: "50rem",
              border: "1px dashed rgba(5,96,0,.6)",
              rounded: "100%",
              content: '""',
              zIndex: "-1",
            },
          ]}
        >
          <Box
            // margin={'auto'}
            p="0 15px 0 15px"
            width={"100%"}
            maxW={"1470px"}
            // border="1px solid red"
            textAlign={["center", "center", "left", "left", "left"]}
            ml={["0", "0", "1%", "5%"]}
            position="relative"
            pb="150px"
          >
            <Box width={["100%", "100%", "50%"]}>
              <Heading
                color={"white"}
                as={"h1"}
                fontSize={["2.7rem", "2.7rem", "3.2rem", "4rem", "5rem"]}
                fontWeight={500}
                mb={["1rem", "1rem", "1rem", "1rem"]}
              >
                Be Healthy
                <br />
                for Life!
              </Heading>
              <Text
                fontWeight={500}
                fontSize={["18px", "20px", "22px", "26px"]}
                mb={["15px", "15px", "15px", ""]}
                color="#fcf8b3"
              >
                Your weight loss, diet, and <br />
                nutrition assistant.
              </Text>
              <Flex
                gap={[2, 2, 2, 4]}
                pb="80px"
                justifyContent={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                  "flex-start",
                ]}
              >
                {data.store.map((store) => (
                  <Box key={uuidv4()} as="a" target="_blank" href={store.href}>
                    <Image
                      src={store.icon}
                      width={["134px", "134px", "140px", "150px"]}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>

            <Box position={"absolute"} bottom={["-12", "-12", "10"]}>
              <Box>
                <Text
                  as="strong"
                  color="#46618a"
                  fontWeight={700}
                  fontSize={["1.2rem", "1.5rem", "1.8rem", "1.8rem"]}
                  s
                >
                  Top Rated:
                </Text>
                <Text
                  as={"span"}
                  color="#46618a"
                  fontSize={["1.2rem", "1.5rem", "1.6rem", "1.6rem"]}
                >
                  {" 61,383 reviews & counting"}
                </Text>
              </Box>
              <Box mt="10px">
                <Flex
                  gap={4}
                  alignItems={"center"}
                  justifyContent={[
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                    "flex-start",
                  ]}
                >
                  <Flex
                    gap={1}
                    alignItems={"center"}
                    pr="10px"
                    borderRight="1px dashed #46618a"
                  >
                    <Image src={data.apple} />
                    {data.rating.map((rating) => (
                      <Image key={uuidv4()} src={rating} h="22" />
                    ))}
                    <Text
                      color="#46618a"
                      fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]}
                    >
                      4.8
                    </Text>
                  </Flex>
                  <Flex gap={1} alignItems={"center"}>
                    <Image src={data.android} />
                    {data.rating.map((rating) => (
                      <Image key={uuidv4()} src={rating} h="22" />
                    ))}
                    <Text
                      color="#46618a"
                      fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]}
                    >
                      4.6
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Image
              src={data.mobile}
              position="absolute"
              left="30%"
              // top="-10"
              bottom={["0px", "-5px", "-120px"]}
              width={"32%"}
            />
            <Image
              src={data.watch}
              position="absolute"
              left="57%"
              bottom={["0px", "-10px", "-80px"]}
              width="25%"
            />
          </Box>
        </Box>
      </Box>

      <Image
        src={data.bgr}
        position="absolute"
        top={0}
        right="-10"
        width={["15rem", "30rem"]}
        height={["28rem", "40rem"]}
      />
      <Image
        src={data.cherry}
        position="absolute"
        top={100}
        left="10"
        maxW="5%"
        // height="40rem"
      />
    </Box>
  );
};

export default Firstcomponent;
const data = {
  mobile: "https://s3.amazonaws.com/img.mynetdiary.com/images/iphonex@2x.png",
  watch: "https://s3.amazonaws.com/img.mynetdiary.com/images/iwatch@2x.png",
  bgr: "https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-right@1x.png",
  cherry:
    "https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-left@2x.png",
  store: [
    {
      name: "Apple Store",
      icon: "https://mynetdiary-website-clone.netlify.app/assets/homepage/footer/appleStore.svg",
      href: "https://apps.apple.com/us/app/calorie-counter-mynetdiary/id287529757",
    },
    {
      name: "Google Play Store",
      icon: "https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg",
      href: "https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dfooter_link",
    },
  ],
  rating: [
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/fullStar.svg",
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/fullStar.svg",
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/fullStar.svg",
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/fullStar.svg",
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/halfStar.svg",
  ],
  apple:
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/appleLogo.svg",
  android:
    "https://mynetdiary-website-clone.netlify.app/assets/homepage/top/androidLogo.svg",
};
