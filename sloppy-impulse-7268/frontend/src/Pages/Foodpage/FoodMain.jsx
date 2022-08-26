import React from 'react'
import style from './Food.module.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import Breakfast from './Breakfast';
import { Box, Flex } from '@chakra-ui/react';
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
            <Box w='100%' h='500px' bg='red'>

            </Box>


        </>
    )
}

export default FoodMain
