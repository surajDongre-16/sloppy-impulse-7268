import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  Checkbox,
  Input,
  Image,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePaasordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };
    const response = await fetch(
      "https://my-net-dairy-backend.herokuapp.com/user/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "login res");
        const { id } = res;
        // console.log(id, "d");
        toast({
          title: "Login Succesful.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        localStorage.setItem("token", res.token);

        navigate(`/dashboard/${id}`);
      })
      .catch((err) => {
        toast({
          title: "Login Failed.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log("Error from login page", err);
      });
  };

  const handleClc = () => {
    navigate("/signup");
  };

  return (
    <>
      <Box
        maxW={"100%"}
        margin={"auto"}
        h="90vh"
        borderRadius={"0 0 10rem 10rem"}
        bg="#0a923f"
        border={"1px solid #0a923f"}
        position="relative"
        top={0}
        backgroundImage={
          "https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-signup@1x.png"
        }
        backgroundRepeat="no-repeat"
      >
        <Box margin="auto" width="20rem">
          <Image
            src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-main.svg"
            marginTop={3}
            height="4rem"
          ></Image>
        </Box>
        <Box
          margin={"auto"}
          marginTop={2}
          maxW={"75%"}
          rounded={"4%"}
          boxShadow={"lg"}
          px={180}
          paddingBottom={"10rem"}
          backgroundColor="white"
        >
          <Heading
            fontSize={"5xl"}
            pt={"10"}
            textAlign={"center"}
            color={"#268fd0"}
            width={"100%"}
          >
            Sign In
          </Heading>
          <Text
            backgroundColor={"#f2f2eb"}
            width={"100%"}
            mb={"1.2rem"}
            mt={"1.2rem"}
            p={6}
            fontSize={"1.05rem"}
          >
            If you use one of MyNetDiary’s mobile apps, please sign in with the
            same account name or email as you do in your MyNetDiary mobile app.
            You can see account name on the Settings screen in the mobile app.
          </Text>
          <Stack margin={"auto"} width="100%">
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Box width="50%" height="100%">
                <FormControl marginBottom={10}>
                  <InputGroup>
                    <Input
                      type={"text"}
                      placeholder={"User email"}
                      padding={7}
                      fontSize={"1.1rem"}
                      borderTop={"2px solid"}
                      borderLeft={"2px solid"}
                      borderRight={"2px solid"}
                      borderBottom={"2px solid"}
                      borderRadius={"0.2rem"}
                      onChange={handleEmailChange}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl marginBottom={10}>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={"User password"}
                      padding={7}
                      fontSize={"1.1rem"}
                      borderTop={"2px solid"}
                      borderLeft={"2px solid"}
                      borderRight={"2px solid"}
                      borderBottom={"2px solid"}
                      borderRadius={"0.2rem"}
                      onChange={handlePaasordChange}
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
                <Checkbox marginBottom={10}>
                  {" "}
                  <Text fontSize={"1.3rem"} fontWeight={"450"}>
                    {" "}
                    Remember me on this computer{" "}
                  </Text>
                </Checkbox>
                <Box
                  margin={"auto"}
                  display={"flex"}
                  justifyContent="space-around"
                  marginBottom={"3rem"}
                >
                  <Button
                    backgroundColor="#33B621"
                    color="white"
                    textAlign={"center"}
                    py={7}
                    px={12}
                    fontSize={"1.2rem"}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    colorScheme="blue"
                    textAlign={"center"}
                    py={7}
                    px={12}
                    textDecoration={"underline"}
                    fontSize={"1.2rem"}
                    background="none"
                    color={"#33B621"}
                  >
                    Forgot password?
                  </Button>
                </Box>
              </Box>
              <Image
                marginTop={"6rem"}
                height="70%"
                width={"46%"}
                src="https://raw.githubusercontent.com/sohailshaik8328/sohailMagnesumProject/main/images/signupOne%20scst.PNG"
              ></Image>
            </HStack>
            <Text textAlign={"center"} fontSize={"1.2rem"} fontWeight={"500"}>
              No account?{" "}
              <Button
                fontWeight={"500"}
                textDecoration={"underline"}
                fontSize={"1.2rem"}
                background="none"
                mx={-5}
                mt={-2}
                onClick={handleClc}
                color={"#33B621"}
              >
                Sign Up
              </Button>{" "}
              , it's easy.
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
