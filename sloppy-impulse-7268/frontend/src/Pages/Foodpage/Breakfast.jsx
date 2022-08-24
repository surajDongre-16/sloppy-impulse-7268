import React from 'react'
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
function Breakfast() {
    return (
        <div>


            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem w='1000px'>
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

                        <Flex >

                            <Box mt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>
                            <Box w='30%'>   <Input variant='flushed' placeholder='Please enter food name, brand or restaurant' /></Box>
                            <Button>ADD</Button>

                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Breakfast
