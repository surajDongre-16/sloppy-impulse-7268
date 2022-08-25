import React, { useEffect, useState } from 'react'
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
    Flex,
    Text,

} from '@chakra-ui/react'
import { useRef } from 'react';
function Breakfast() {
    const [allData, setAllData] = useState();
    const [value, setValue] = useState("");
    const [suggestion, setSuggestion] = useState(false);

    const autoComepeleteRef = useRef();

    const searching = allData?.filter(option => option.name.toLowerCase().includes(value.toLowerCase()))


    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const getAllData = async () => {
        await fetch("http://localhost:8080/food/getallbreakfast")
            .then((res) => res.json())
            .then((res) => {
                console.log(res.breakfast)
                setAllData(res.breakfast)
            })
            .catch((err) => alert(err))
    }

    useEffect(() => {
        getAllData();




    }, [])

    useEffect(() => {
        const handleOutSideClick = (e) => {
            if (autoComepeleteRef.current && !autoComepeleteRef.current.contains(e.target)) {
                setSuggestion(false)
            }
        }

        document.addEventListener('click', handleOutSideClick);

        return () => {
            document.removeEventListener('click', handleOutSideClick);
        }


    }, [])

    // allData?.map((item) => (
    //     console.log(item)
    // ))

    return (
        <div>


            <Accordion w='70%' m='auto' defaultIndex={[0]} allowMultiple>
                <AccordionItem >

                    <AccordionButton bg='rgb(239,240,237)' >
                        <AccordionIcon fontSize='30px' />


                        <Flex textAlign='center' mt='-5px' h='45px'>
                            <Box w='20%' >
                                <Flex  >
                                    <Text pl='10px'> BREAKFAST</Text>

                                </Flex>
                            </Box>
                            <Box w='90%' ml='80px' >
                                <thead className={style.tableheadBreak}  >
                                    <tr>
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
                                    </tr>

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

                            </tbody>
                        </Box>
                        <Flex mt='10px'>

                            <Box mt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>

                            <Box w='40%' ml='-20px' ref={autoComepeleteRef} >
                                <input
                                    className={style.inputs}
                                    onChange={handleChange}
                                    onFocus={() => setSuggestion(true)}

                                    placeholder='Please enter food name, brand or restaurant' />
                            </Box>


                        </Flex>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion >
            <div className={style.outermodal}>

                {
                    suggestion && searching?.map((i) => (
                        <div id={style.mymodal} key={i._id}>
                            <div style={{ display: 'flex' }}>
                                <img src={i.img} alt='img' />
                                <div> {i.name}</div>
                                <span>{i.subName}</span>
                            </div>
                            <div className={style.mymodal_last}><p>{i.calories}</p></div>
                        </div>
                    ))
                }
            </div>






            <Accordion w='70%' m='auto' defaultIndex={[0]} allowMultiple>
                <AccordionItem >

                    <AccordionButton bg='rgb(239,240,237)' >
                        <AccordionIcon fontSize='30px' />


                        <Flex textAlign='center' mt='-5px' h='40px'>
                            <Box w='20%' >
                                <Flex  >
                                    <Text pl='10px'> BREAKFAST</Text>


                                </Flex>
                            </Box>
                            <Box w='80%' ml='60px' >
                                <thead className={style.tableheadBreak}  >
<tr>
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

                                    </tr>
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

                            </tbody>
                        </Box>
                        <Flex mt='10px'>

                            <Box mt='15px' fontSize='20px'><IoPencilSharp /> </Box>

                            <Box w='40%' ml='-20px' >
                                <input
                                    className={style.inputs}
                                    onChange={handleChange}
                                    onFocus={() => setSuggestion(true)}

                                    placeholder='Please enter food name, brand or restaurant' />
                            </Box>


                        </Flex>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion >

















        </div >
    )
}

export default Breakfast
