import React from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
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
    useColorModeValue,
    Link,
    Radio 
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';     
  
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [count,setCount]=useState(1);
  
    return (count==0)?(
      
        <Stack   maxW={'100%'}  py={20}border={"2px solid"}>
          <Box
         maxW={'100%'}
           border={"2px solid"}
            rounded={'4%'}
            boxShadow={'lg'}
             px={230}
            margin={"auto"}
            >   
            <Heading fontSize={'5xl'} pt={'10'} textAlign={'center'} color={"blue"} width={'100%'}>
            Sign Up: Your Weight plan
            </Heading>     
            <Stack spacing={59} px={100}>
    
              <HStack>
               
              </HStack>
              <FormControl>
                <InputGroup>
                  <Input type={'text'}
                   placeHolder={"How much do you weigh?"}
                   fontSize={'2xl'}
                   borderTop={"none"}
                   borderLeft={"none"}
                   borderRight={"none"}
                   borderBottom={"2px solid"}
                   borderRadius={"none"}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {"lb"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
             
                <InputGroup>
                  <Input type={'text'}  
                  borderTop={"none"}
                  placeHolder={"What is your target weight?"}
                  fontSize={'2xl'}
                  borderLeft={"none"}
                  borderRight={"none"}
                   borderBottom={"2px solid"} 
                   borderRadius={"none"}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {'lb'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Text  color='blue' fontSize={'1.5xl'} textAlign={'center'}>Switch to metric units (kg, cm)</Text>    
              <RadioGroup>
  <Stack spacing={5} direction='column'>
  <Text fontSize={"20px"}>Your desired progress</Text >
    <Radio colorScheme='blue' value='1'  size='lg'>
    Lose 1 lb/week
    </Radio>
    <Radio colorScheme='blue' value='2' size='lg'>
    Lose 1½ lb/week
   
    </Radio>
    <Radio colorScheme='blue' value='3' size='lg'>
    Lose 2 lbs/week
    </Radio>
  </Stack>
</RadioGroup>   
            </Stack>
            <Box margin={"auto"} width={"25%"} pb={100}  pt={20}>
            <Button colorScheme='blue' textAlign={"center"} width ={"100%"}>NEXT</Button>
            </Box>
          </Box>
        </Stack>
      
    ): (
      <Stack   maxW={'100%'}  py={20}border={"2px solid"}>
          <Box
         maxW={'80%'}
            rounded={'4%'}
            boxShadow={'lg'}
             px={180}
            margin={"auto"}
            >   
            <Heading fontSize={'5xl'} pt={'10'} textAlign={'center'} color={"blue"} width={'100%'}>
           Create Account
            </Heading>     
            <Text backgroundColor={"#f2f2eb"} width={"100%"} mb={"1.2rem"} mt={"1.2rem"} px={10}p={5}fontSize={"1.2rem"} ><Text as="span" fontWeight={"bold"}>If you already use 
                MyNetDiary app on your mobile phone: </Text> to access your information on the website, 
                you need to<Text as="span" color={"blue"} fontWeight={"bold"}> Sign In</Text> (not Sign Up!) with the same email and password as you use
                 in the mobile app. If you haven't created an account in the app,
                 please create an account in the app first and <Text as="span"  fontWeight={"bold"}>then</Text> go to Sign In on the website.</Text>
            <Stack spacing={5} width={"40%"} margin={"auto"}>
               <Image src="https://raw.githubusercontent.com/sohailshaik8328/sohailMagnesumProject/main/images/signupOne%20scst.PNG"></Image>
    
              <HStack>
               
              </HStack>
              <FormControl>
             
                <InputGroup>
                  <Input type={'text'}  
                  borderTop={"none"}
                  placeHolder={"Your first name"}
                  fontSize={'1.1rem'}
                  borderLeft={"none"}
                  borderRight={"none"}
                   borderBottom={"2px solid"} 
                   borderRadius={"none"}/>
                  <InputRightElement h={'full'}>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
             
             <InputGroup>
               <Input type={'text'}  
               borderTop={"none"}
               fontSize={'1.1rem'}
               placeHolder={"Your email"}
               borderLeft={"none"}
               borderRight={"none"}
                borderBottom={"2px solid"} 
                borderRadius={"none"}/>
               <InputRightElement h={'full'}>
               </InputRightElement>
             </InputGroup>
           </FormControl>
              <FormControl>
                <InputGroup>
                  <Input type={showPassword?'text':"password"}
                   placeHolder={"Your password"}
                   borderTop={"none"}
                   fontSize={'1.1rem'}
                   borderLeft={"none"}
                   borderRight={"none"}
                   borderBottom={"2px solid"}
                   borderRadius={"none"}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewOffIcon/> :<ViewIcon/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Box margin={"auto"} width={"25%"}  pt={20}>
            <Button colorScheme='blue' textAlign={"center"} py={"1.6rem"} width ={"70%"}>NEXT</Button>
           
            </Box>
            <Box marginTop={"-1rem"}  width={"10%"} marginLeft={"-4rem"} mb={100}  >
            <Text fontWeight={"bold"} color={"blue"} fontSize={"1.1rem"}><Text as="span" fontSize={"1.5rem"}> {"<"}</Text> BACK</Text> 
            </Box>
          </Box>
        </Stack>
    )
  }