import React from 'react'
import style from './Food.module.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import Breakfast from './Breakfast';
import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snacks from './Snacks';



function FoodMain() {
    return (

        <>
            <div>
                <table className={style.table}>

                    <thead>
                        <th>
                            <Flex>
                                <div className={style.tablehead1}>
                                    <div><BiSearchAlt2 /></div>
                                    <div>  <AiFillStar /></div>
                                    <img style={{ width: "20px" }} src='https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png' alt="img" />
                                </div>
                                <div style={{ background: "white", paddingLeft: '50px', color: 'gray', fontSize: '12px' }}>Consumed food, amount</div>
                            </Flex>
                        </th>
                        <th>Calories</th>
                        <th>Carbs g</th>
                        <th>Protein g</th>
                        <th>Total Fat g</th>
                        <th>Fd. Grade</th>
                        <th>Sat. Fat g</th>
                        <th>Trans Fat g</th>
                        <th>Sodium mg</th>
                        <th>Fiber g</th>
                        <th>Calcium %</th>
                        <th><AiTwotoneSetting /></th>
                    </thead>

                </table >
                <div>
                    <Breakfast />
                    <Lunch />
                    <Dinner />
                    <Snacks />
                </div>


            </div >
            <Flex w='70%' m='auto' h='300px' border='1px solid red'>
                <Box mt='50px' w='25%' border='1px solid black'>
                    <Flex >
                        <Box pl='5px' pt='15px'>Carbs</Box>
                        <Box position='absolute' pl='70px' >
                            <Text>59% cals, 14% over</Text>
                            <Progress colorScheme='green' size='md' value={20} w='190px' />
                        </Box>
                    </Flex>
                    <Flex mt='40px' >
                        <Box pl='5px' pt='15px'>Protine</Box>
                        <Box position='absolute' pl='70px' >
                            <Text>7% cals, 13% under</Text>
                            <Progress colorScheme='green' size='md' value={20} w='190px' />
                        </Box>
                    </Flex>
                    <Flex mt='40px' >
                        <Box pl='5px' pt='15px'>Fat</Box>
                        <Box position='absolute' pl='70px'>
                            <Text >7% cals, 13% under</Text>
                            <Progress colorScheme='green' size='md' value={20} w='190px' />
                        </Box>
                    </Flex>
                </Box>
                <Box w='25%' h='100%' border='1px solid red'>

                </Box>
                <Box display='flex' w='50%' alignContent='baseline' justifyContent='space-evenly' border='1px solid green' h='50%'>
                    <Box w='4%' h='80%' bg='green' ></Box>
                    <Box h='50%' w='4%' bg='green' ></Box>
                    <Box h='50%' w='4%' bg='green' ></Box>
                    <Box h='50%' w='4%' bg='green' ></Box>

                </Box>


            </Flex>
            <Box h='100px' w='70%' border='1px solid red' m='auto'>


            </Box>


     </>
    )
}

export default FoodMain
