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
    Flex,
    Text,

} from '@chakra-ui/react'
import { useRef } from 'react';
function Breakfast() {
    const [allData, setAllData] = useState();
    const [value, setValue] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const [breakPostData, setBreakPostData] = useState();
    

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

    const handelPostBreak = async (data) => {
        console.log(data)

        await fetch("http://localhost:8080/food/foodpost", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'

            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("added statuss" + res)


            })
            .catch((err) => console.log("err from backend" + err))
    }


    const getPostBreakData = async () => {
        await fetch("http://localhost:8080/food/getpostbreakfast")
            .then((res) => res.json())
            .then((res) => {
                console.log(res.breakfast)
                setBreakPostData(res.breakfast)
            })
            .catch((err) => alert(err))
    }

    const deleteBreakPostDataOne = async (id) => {
        console.log(id)
        await fetch(`http://localhost:8080/food/deleteeach?id=${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'

            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                alert("Your Task Deleted Successfully done")
                // console.log("hii")
                // setData(res)
                // window.location.reload();

            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPostBreakData();
    }, [])

    useEffect(() => {
        getAllData();
        handelPostBreak();

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

    console.log("break post data" + breakPostData)
    // breakPostData?.map((i) => (
    //     console.log(i)
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
                            {breakPostData?.map((item) => (

                                <tbody id={style.addedrows} key={item._id} >
                                    <tr>
                                        <td data-lable="Consumed food, amount"> </td>
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
                                        <td onClick={() => deleteBreakPostDataOne(item._id)} data-lable="Marks"><BsThreeDotsVertical /></td>

                                    </tr>

                                </tbody>

                            ))}
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
                    suggestion ? searching?.map((item, index) => (
                        <div id={style.mymodal} key={item._id}>
                            <div onClick={() => { handelPostBreak(item) }} >
                                <div style={{ display: 'flex' }}>
                                    <img src={item.img} alt='img' />
                                    <div> {item.name}</div>
                                    <span>{item.subName}</span>
                                    {/* {console.log(item)} */}
                                </div>
                                <div className={style.mymodal_last}><p>{item.calories}</p></div>
                            </div>
                        </div>
                    )) : null
                }
            </div>





        </div >
    )
}

export default Breakfast
