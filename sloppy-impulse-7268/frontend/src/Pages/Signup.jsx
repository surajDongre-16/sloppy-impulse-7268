import React from "react";
import {
  Box,
  FormControl,
  RadioGroup,
  Input,
  Image,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Radio,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setweight] = useState("80");
  const [Tweight, setTweight] = useState("70");
  const navigate = useNavigate();
    const toast = useToast();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePaasordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleweight = (e) => {
    setweight(e.target.value);
  };
  const handlenameChange = (e) => {
    setname(e.target.value);
  };

  const handleTweight = (e) => {
    setTweight(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      password,
      weight,
      Tweight,
    };
    await fetch("https://my-net-dairy-backend.herokuapp.com/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // alert("SignUp successful");
        navigate("/signin");
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  return (
    <Box>
      <Box
        h="90vh"
        borderRadius={"0 0 10rem 10rem"}
        bg="#0a923f"
        position={"relative"}
      >
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-main.svg"
          alt="logo"
          w="20rem"
          position={"absolute"}
          top={0}
          left={"35rem"}
          cursor="pointer"
        />
        <Image
          src="https://www.mynetdiary.com/images/bg-start-signup@2x.png"
          alt="bg-img"
          position={"absolute"}
        />
        {count === 0 ? (
          <Stack maxW={"100%"} py={20}>
            <Box
              maxW={"100%"}
              rounded={"4%"}
              boxShadow={"lg"}
              px={230}
              margin={"auto"}
              bg="white"
            >
              <Heading
                fontSize={"5xl"}
                pt={"10"}
                textAlign={"center"}
                color={"#268fd0"}
                width={"100%"}
              >
                Sign Up: Your Weight plan
              </Heading>
              <Stack spacing={59} px={100}>
                <HStack></HStack>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={"text"}
                      placeHolder={"How much do you weight?"}
                      fontSize={"2xl"}
                      borderTop={"none"}
                      borderLeft={"none"}
                      borderRight={"none"}
                      borderBottom={"2px solid"}
                      borderRadius={"none"}
                      onChange={handleweight}
                      variant="flushed"
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {"lb"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={"text"}
                      borderTop={"none"}
                      placeHolder={"What is your target weight?"}
                      fontSize={"2xl"}
                      borderLeft={"none"}
                      borderRight={"none"}
                      borderBottom={"2px solid"}
                      borderRadius={"none"}
                      onChange={handleTweight}
                      variant="flushed"
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {"lb"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Text
                  color="#268fd0"
                  fontSize={"1.5xl"}
                  fontWeight="bolder"
                  textAlign={"center"}
                >
                  Switch to metric units (kg, cm)
                </Text>
                <RadioGroup>
                  <Stack spacing={5} direction="column">
                    <Text fontSize={"20px"}>Your desired progress</Text>
                    <Radio colorScheme="blue" value="1" size="lg">
                      Lose 1 lb/week
                    </Radio>
                    <Radio colorScheme="blue" value="2" size="lg">
                      Lose 1½ lb/week
                    </Radio>
                    <Radio colorScheme="blue" value="3" size="lg">
                      Lose 2 lbs/week
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
              <Box margin={"auto"} width={"25%"} pb={100} pt={20}>
                <Button
                  colorScheme="blue"
                  textAlign={"center"}
                  width={"100%"}
                  onClick={() => setCount(count + 1)}
                >
                  NEXT
                </Button>
              </Box>
            </Box>
            <Text fontSize={"1.4rem"} color="gray">
              By signing up, you are agreeing to the{" "}
              <span style={{ color: "green", textDecoration: "underline" }}>
                Terms of Service
              </span>
            </Text>
          </Stack>
        ) : (
          <Stack maxW={"100%"} py={20} border={"2px solid"}>
            <Box
              maxW={"80%"}
              rounded={"4%"}
              boxShadow={"lg"}
              px={180}
              margin={"auto"}
              bg="white"
            >
              <Heading
                fontSize={"5xl"}
                pt={"10"}
                textAlign={"center"}
                color={"#268fd0"}
                width={"100%"}
              >
                Create Account
              </Heading>
              <Text
                backgroundColor={"#f2f2eb"}
                width={"100%"}
                mb={"1.2rem"}
                mt={"1.2rem"}
                px={10}
                p={5}
                fontSize={"1.2rem"}
              >
                <Text as="span" fontWeight={"bold"}>
                  If you already use MyNetDiary app on your mobile phone:{" "}
                </Text>{" "}
                to access your information on the website, you need to
                <Text as="span" color={"#268fd0"} fontWeight={"bold"}>
                  {" "}
                  Sign In
                </Text>{" "}
                (not Sign Up!) with the same email and password as you use in
                the mobile app. If you haven't created an account in the app,
                please create an account in the app first and{" "}
                <Text as="span" fontWeight={"bold"}>
                  then
                </Text>{" "}
                go to Sign In on the website.
              </Text>
              <Stack spacing={5} width={"40%"} margin={"auto"}>
                <Image src="https://raw.githubusercontent.com/sohailshaik8328/sohailMagnesumProject/main/images/signupOne%20scst.PNG"></Image>

                <HStack></HStack>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={"text"}
                      borderTop={"none"}
                      placeHolder={"Your first name"}
                      fontSize={"1.1rem"}
                      borderLeft={"none"}
                      borderRight={"none"}
                      borderBottom={"2px solid"}
                      borderRadius={"none"}
                      onChange={handlenameChange}
                      variant="flushed"
                    />
                    <InputRightElement h={"full"}></InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={"text"}
                      borderTop={"none"}
                      fontSize={"1.1rem"}
                      placeHolder={"Your email"}
                      borderLeft={"none"}
                      borderRight={"none"}
                      borderBottom={"2px solid"}
                      borderRadius={"none"}
                      onChange={handleEmailChange}
                      variant="flushed"
                    />
                    <InputRightElement h={"full"}></InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeHolder={"Your password"}
                      borderTop={"none"}
                      fontSize={"1.1rem"}
                      borderLeft={"none"}
                      borderRight={"none"}
                      borderBottom={"2px solid"}
                      borderRadius={"none"}
                      onChange={handlePaasordChange}
                      variant="flushed"
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <Box margin={"auto"} width={"25%"} pt={20}>
                <Button
                  colorScheme="blue"
                  textAlign={"center"}
                  py={"1.6rem"}
                  width={"70%"}
                  onClick={() => {
                    handleSubmit();
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                  }}
                >
                  NEXT
                </Button>
              </Box>
              <Box
                marginTop={"-1rem"}
                width={"10%"}
                marginLeft={"-4rem"}
                mb={100}
                onClick={() => setCount(count - 1)}
              >
                <Text fontWeight={"bold"} color={"#268fd0"} fontSize={"1.1rem"}>
                  <Text as="span" fontSize={"1.5rem"}>
                    {" "}
                    {"<"}{" "}
                  </Text>{" "}
                  BACK
                </Text>
              </Box>
            </Box>
            <Text fontSize={"1.4rem"} color="gray">
              By signing up, you are agreeing to the{" "}
              <span style={{ color: "green", textDecoration: "underline" }}>
                Terms of Service
              </span>
            </Text>
          </Stack>
        )}
      </Box>
    </Box>
  );
}
