import React from 'react'
import { IoPencilSharp } from "react-icons/io5";
import style from './Food.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";

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
    Text,
} from '@chakra-ui/react'
function Breakfast() {
    return (
        <div>


            <Accordion w='70%' m='auto' defaultIndex={[0]} allowMultiple>
                <AccordionItem >

                    <AccordionButton bg='rgb(239,240,237)' >
                        <AccordionIcon fontSize='30px' />


                        <Flex textAlign='center' mt='-5px' h='40px'>
                            <Box w='20%' >
                                <Flex  >
                                    <Text pl='10px'> BREAKFAST</Text>

                                    <Menu>
                                        <MenuButton as={Button} ml='20px' fontSize='12px' p='5px 5px' color='blue.500' >
                                            ADD
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>Same Breakfast</MenuItem>
                                            <MenuItem>Recent Meal</MenuItem>
                                            <MenuItem>Quick</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </Box>
                            <Box w='80%' ml='60px' >
                                <thead className={style.tableheadBreak}  >

                                    <th data-lable="Calories">Calories</th>
                                    <th data-lable="Carbs g">Carbs g</th>
                                    <th data-lable="Protein g">Protein g</th>
                                    <th data-lable="Total Fat g">Total Fat g</th>
                                    <th data-lable="Fd. Grade">Fd. Grade</th>
                                    <th data-lable="Sat. Fat g">Sat. Fat g</th>
                                    <th data-lable="Trans Fat g">Trans Fat g</th>
                                    <th data-lable="Sodium mg">Sodium mg</th>
                                    <th data-lable="Fiber g">Fiber g</th>
                                    <th data-lable="Calcium %">Calcium %</th>
                                    <th data-lable="Marks"><BsThreeDotsVertical /></th>


                                </thead>
                            </Box>
                        </Flex>




                    </AccordionButton>

                    <AccordionPanel >
                        <Box mt='-10px'>

                            <tbody id={style.addedrows}>
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
                            </tbody>
                        </Box>
                        <Flex mt='10px'>

                            <Box mt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>

                            <Box w='35%' >   <Input variant='flushed' placeholder='Please enter food name, brand or restaurant' /></Box>


                        </Flex>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion >

        </div >
    )
}

export default Breakfast
