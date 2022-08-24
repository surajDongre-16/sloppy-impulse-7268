import React from 'react'
import style from './Food.module.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPencilSharp } from "react-icons/io5";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Input,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
} from '@chakra-ui/react'

function FoodMain() {
    return (
        <div>
            <h1>Home Food</h1>

            <table className={style.table}>

                <thead>
                    <th>
                        <div style={{ display: "flex" }}>
                            <div className={style.tablehead1}>
                                <div><BiSearchAlt2 /></div>
                                <div>  <AiFillStar /></div>
                                <img style={{ width: "20px" }} src='https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png' alt="img" />
                            </div>
                            <div style={{ paddingLeft: '50px', color: 'gray', fontSize: '12px', fontWeight: "400" }}><p>Consumed food, amount</p></div>
                        </div>
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

                {/* <tbody>
                    <tr> */}

                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem w='100%'>
                        <h2>
                            <AccordionButton bg='rgb(239,240,237)'>
                                <AccordionIcon fontSize='30px' />
                                <Box pt='18px' pl='10px' textAlign='center' h='50px'>

                                    BREAKFAST
                                </Box>
                                <Menu>
                                    <MenuButton as={Button} ml='10px' color='blue.500' >
                                        ADD
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Same Breakfast</MenuItem>
                                        <MenuItem>Recent Meal</MenuItem>
                                        <MenuItem>Quick</MenuItem>
                                    </MenuList>
                                </Menu>



                            </AccordionButton>
                        </h2>
                        <AccordionPanel >

                            {/* <tbody>
                                <tr>
                                    <td data-lable="Consumed food, amount">1</td>
                                    <td data-lable="Calories">Calories</td>
                                    <td data-lable="Carbs g">Carbs g</td>
                                    <td data-lable="Protein g">Protein g</td>
                                    <td data-lable="Total Fat g">Total Fat g</td>
                                    <td data-lable="Fd. Grade">Fd. Grade</td>
                                    <td data-lable="Sat. Fat g">Sat. Fat g</td>
                                    <td data-lable="Trans Fat g">Trans Fat g</td>
                                    <td data-lable="Sodium mg">Sodium mg</td>
                                    <td data-lable="Fiber g">Fiber g</td>
                                    <td data-lable="Calcium %">Calcium %</td>
                                    <td data-lable="Marks"><BsThreeDotsVertical /></td>

                                </tr>
                            </tbody> */}
                            <Flex >

                                <Box mt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>
                                <Box w='30%'>   <Input variant='flushed' placeholder='Please enter food name, brand or restaurant' /></Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                {/* </tr>
                    <tr>
                        <td data-lable="Consumed food, amount">1</td>
                        <td data-lable="Calories">Calories</td>
                        <td data-lable="Carbs g">Carbs g</td>
                        <td data-lable="Protein g">Protein g</td>
                        <td data-lable="Total Fat g">Total Fat g</td>
                        <td data-lable="Fd. Grade">Fd. Grade</td>
                        <td data-lable="Sat. Fat g">Sat. Fat g</td>
                        <td data-lable="Trans Fat g">Trans Fat g</td>
                        <td data-lable="Sodium mg">Sodium mg</td>
                        <td data-lable="Fiber g">Fiber g</td>
                        <td data-lable="Calcium %">Calcium %</td>
                        <td data-lable="Marks"><BsThreeDotsVertical /></td>

                    </tr>

                </tbody> */}

            </table >

        </div >
    )
}

export default FoodMain
