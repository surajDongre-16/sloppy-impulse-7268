import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
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
    useColorModeValue,
    Link,
    Radio 
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePaasordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload ={
            email,
            password
        }
        const response = await fetch("http://localhost:8080/user/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }, 
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            const {id}=res;
            console.log(id,"d")
            alert("Login Success")
            localStorage.setItem("token", res.token)
           navigate(`/dashboard/${id}`)
        })
        .catch((err) => alert("Login Failed")
        
        )
       
        
    }
  
    const handleClc=()=>{
      navigate("/signup")
    }
  
    return (
      <Box   maxW={'100%'}  margin={"auto"}  _before={{
        position: "absolute",
        width: "100%",
        height: "70%",
        background:
          "url(https://s3.amazonaws.com/img.mynetdiary.com/images/texture-noise@1x.png), radial-gradient(ellipse at top, #05b24a 0, #05963d 60%)",
        borderBottomRightRadius: "100rem 5rem",
        borderBottomLeftRadius: "100rem 5rem",
        boxShadow: "inset rgb(9 108 46 / 76%) 0 -2.3rem 10.7rem",
        zIndex: "-1",
        content: '""',
        overflow: "hidden",
      }}
      backgroundImage={"https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-signup@1x.png"}
      backgroundRepeat="no-repeat"
      >
        <Box  margin="auto" width="20rem">
       <Image src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-main.svg"  marginTop={3} height="4rem"></Image>
       </Box>
          <Box
          margin={"auto"}
          marginTop={2}
         maxW={'75%'}
         border={"2px solid"}
            rounded={'4%'}
            boxShadow={'lg'}
             px={180}
             paddingBottom={"10rem"}
           
            backgroundColor="white"
            >   
            <Heading fontSize={'5xl'} pt={'10'} textAlign={'center'} color={"blue"} width={'100%'}>
             Sign In
            </Heading>     
            <Text backgroundColor={"#f2f2eb"} width={"100%"} mb={"1.2rem"} mt={"1.2rem"} p={6}fontSize={"1.05rem"} >
            If you use one of MyNetDiary’s mobile apps, please sign in with the same account name
             or email as you do in your MyNetDiary mobile app. 
             You can see account name on the Settings screen in the mobile app.
                </Text>
            <Stack  margin={"auto"} width="100%">
               
              <HStack width={"100%"} border={"2px solid"} justifyContent={"space-between"}>
                <Box border="2px solid" width="50%" height="100%">
                <FormControl marginBottom={10}>
             <InputGroup>
               <Input type={'text'}  
               placeHolder={"User Name"}
               padding={7}
               fontSize={'1.1rem'}
                borderTop={"2px solid"} 
                borderLeft={"2px solid"} 
                borderRight={"2px solid"} borderBottom={"2px solid"} 
                borderRadius={"0.2rem"}
                onChange={handleEmailChange}
                
                />
             </InputGroup>
           </FormControl>
           
           <FormControl  marginBottom={10}>
             <InputGroup>
               <Input type={showPassword?'text':"password"}
                placeHolder={"Your password"}
                padding={7}
                fontSize={'1.1rem'}
                 borderTop={"2px solid"} 
                 borderLeft={"2px solid"} 
                 borderRight={"2px solid"} borderBottom={"2px solid"} 
                 borderRadius={"0.2rem"}
                 onChange={handlePaasordChange}
                 />
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
           <Checkbox  marginBottom={10}> <Text fontSize={"1.3rem"} fontWeight={"450"}> Remember me on this computer </Text></Checkbox>
           <Box margin={"auto"} display={"flex"} justifyContent="space-around" marginBottom={"3rem"}>
            <Button backgroundColor='#33B621'  color="white" textAlign={"center"} py={7} px={12} fontSize={"1.2rem"} onClick={handleSubmit}>SIGN IN</Button>
            <Button colorScheme='blue' textAlign={"center"} py={7} px={12} textDecoration={"underline"} fontSize={"1.2rem"} background="none" color={'#33B621'}>Forgot password?</Button>
            </Box>
                </Box>
               <Image  border={"2px solid"} marginTop={"6rem"} height="70%" width={"46%"} src="https://raw.githubusercontent.com/sohailshaik8328/sohailMagnesumProject/main/images/signupOne%20scst.PNG"></Image>
              </HStack>
             <Text  textAlign={"center"} fontSize={"1.2rem"} fontWeight={"500"}>No account? <Button  fontWeight={"500"} textDecoration={"underline"} fontSize={"1.2rem"} background="none" mx={-5}  mt={-2}  onChange={handleClc} color={'#33B621'}>Sign Up</Button> , it's easy.</Text>
            </Stack>
            
          </Box>
        </Box>
    )
  }