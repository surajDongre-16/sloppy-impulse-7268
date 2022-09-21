// Code formatting is all over the place. Please use a good code linter to keep code neatly formatted
// following the proper guidelines to improve readbility.

import React, { useEffect, useState } from 'react'
import { IoPencilSharp } from "react-icons/io5";
import style from './Food.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
// import { useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
    CircularProgress,

} from '@chakra-ui/react'
import { useRef } from 'react';
function Breakfast({ setTrick }) {

    const [allData, setAllData] = useState();
    const [value, setValue] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const [breakPostData, setBreakPostData] = useState();
    const [totalCal, setTotalCal] = useState();
    const [deleteAll, setDelete] = useState(false);

    // let params = useParams();
    // if (breakPostData?.length > 0) {
    //     setDelete(true)
    // }
    // console.log(breakPostData.length)

    const autoComepeleteRef = useRef();

    // Good use of the ?. operator and lowercase string checks.
    const searching = allData?.filter(option => option.name.toLowerCase().includes(value.toLowerCase()))


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // get all Breakfast data from data base


    const getAllData = async () => {
        await fetch("https://my-net-dairy-backend.herokuapp.com/food/getallbreakfast", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                // Unhelpful logging statement.
                console.log(res.breakfast)
                setAllData(res.breakfast)
            })
            // What purpose is this error log serving? It is not even at the error level.
            // Having error catch blocks just to log the error isn't a good solution.
            // Errors should be caught iff it can be handled (retried, recovered from)
            // or is fatal and should cause the component to crash / reload.
            // Big web apps never ever have this pattern of catching and just logging the
            // error.
            .catch((err) => console.log("errrrr", err))
    }


    //Post the data         


    const handelPostBreak = async (data) => {
        console.log(data)

        await fetch("https://my-net-dairy-backend.herokuapp.com/food/foodpost", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`


            },
        })
            .then((res) => res.json())
            // What if the response is a 20x but not what is expected? POST requests usually expect a 201
            // status to signify that the request was successful. But what if the server sent a 200 or 204
            // or some other status code and subsequently the response body didn't have what was expected
            // here. All the API calls just magically assume that things work correctly all the time and
            // there will be no failures. It is missing all forms of validation of the response returned.
            // This is the biggest cause of failures and crashes in code (doesn't matter if it is frontend
            // or backend). Always validate the response returned from an API call.
            .then((res) => {
                console.log("added statuss" + res)
                getPostBreakData();
                getAllCalories();
                setTrick((prv) => !prv);

            })
            .catch((err) => console.log("err from backend" + err))
    }

    // get the post data

    const getPostBreakData = async () => {
        await fetch("https://my-net-dairy-backend.herokuapp.com/food/getpostbreakfast", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.breakfast.length > 0) {
                    setDelete(true)
                }
                else {
                    setDelete(false)
                }
                setBreakPostData(res.breakfast)

            })
            .catch((err) => console.log(err))
    }

    //  delete one data 

    const deleteBreakPostDataOne = async (id) => {
        console.log(id)
        await fetch(`https://my-net-dairy-backend.herokuapp.com/food/deleteeach?id=${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`


            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                // alert("Your Task Deleted Successfully done")
                // console.log("hii")
                // setData(res)
                // window.location.reload();
                getPostBreakData();
                setTrick((prv) => !prv);

            })
            .catch((err) => console.log(err))
    }


    // delete all post data



    const deleteBreakPostDataAll = async (foodName) => {

        console.log(foodName)
        await fetch(`https://my-net-dairy-backend.herokuapp.com/food/deletebreakfastall?food=${foodName}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`

            },
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                console.log("delete all data", res)
                // console.log("hii")
                // setData(res)
                // window.location.reload();

            })
            .catch((err) => console.log(err))


    }



    // get all calorise

    const getAllCalories = async () => {
        // http://localhost:8080/food/allcalories

        await fetch("https://my-net-dairy-backend.herokuapp.com/food/allcalories", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("allcalories", res.allcolories)
                let dtat = res.allcolories.filter(option => option._id == 'breakfast')
                // setBreakPostData(res.breakfast)



                setTotalCal(dtat)
                console.log(dtat)

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



    return (
        <div>
            {allData ? <Accordion w='70%' m='auto' allowMultiple>
                <AccordionItem >

                    <AccordionButton className={style.break} bg='rgb(232,245,233)' >
                        <AccordionIcon fontSize='30px' />


                        <Flex textAlign='center' mt='-5px' h='45px'>
                            <Box w='20%' >
                                <Flex  >
                                    <Text pl='10px'> BREAKFAST</Text>

                                </Flex>
                            </Box>
                            <Box w='90%' ml='150px' >
                                {deleteAll && totalCal?.map((item) => (
                                    <thead className={style.tableheadBreak}  >

                                        <tr>
                                            <th data-lable="Calories">{item.totalCalo}</th>
                                            <th data-lable="Carbs g">{item.totalCarbs}</th>
                                            <th data-lable="Protein g">{item.totalProtein}</th>
                                            <th data-lable="Total Fat g">{item.totalFat}</th>
                                            <th data-lable="Fd. Grade">A</th>
                                            <th data-lable="Sat. Fat g">{item.totalSatFat}</th>
                                            <th data-lable="Trans Fat g">0</th>
                                            <th data-lable="Sodium mg">{item.totalSodium}</th>
                                            <th data-lable="Fiber g">{item.totalFiber}</th>
                                            <th data-lable="Calcium %">{item.totalCalcium}</th>
                                            <th onClick={() => deleteBreakPostDataAll(item._id)} data-lable="Marks"><BsThreeDotsVertical /></th>
                                        </tr>

                                    </thead>
                                ))
                                }

                            </Box>
                        </Flex>




                    </AccordionButton>

                    <AccordionPanel w='120%' >
                        <Box mt='-10px'>
                            {breakPostData?.map((item) => (

                                <tbody id={style.addedrows} key={item._id} >
                                    <tr>
                                        <td data-lable="Consumed food, amount">
                                            <div className={style.fisrstColoum}>
                                                <img src={item.img} alt='img' />
                                                <p>{item.name}</p>
                                                <p>,{item.subName}</p>
                                            </div>
                                        </td>

                                        <td data-lable="Calories">{item.calories}</td>
                                        <td data-lable="Carbs g">{item.carbs}</td>
                                        <td data-lable="Protein g">{item.protein}</td>
                                        <td data-lable="Total Fat g">{item.totalFat}</td>
                                        <td data-lable="Fd. Grade">{item.fdGrade}</td>
                                        <td data-lable="Sat. Fat g">{item.satFat}</td>
                                        <td data-lable="Trans Fat g">{item.tranFat}</td>
                                        <td data-lable="Sodium mg">{item.sodium}</td>
                                        <td data-lable="Fiber g">{item.fiber}</td>
                                        <td data-lable="Calcium %">{item.calcium}</td>
                                        <td onClick={() => deleteBreakPostDataOne(item._id)} data-lable="Marks"><AiFillCloseCircle /></td>

                                    </tr>

                                </tbody>

                            ))}
                        </Box>
                        <Flex bg='white' p='10px'>

                            <Box pt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>

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
            </Accordion > : <CircularProgress isIndeterminate value={30} size='120px' />
            }
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
