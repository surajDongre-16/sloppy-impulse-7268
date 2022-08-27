import React, { useEffect, useState } from 'react'
import { IoPencilSharp } from "react-icons/io5";
import style from './Food.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
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
function Lunch() {
    const [allDatalunch, setAllDatalunch] = useState();
    const [value, setValue] = useState("");
    const [suggestionlunch, setSuggestionlunch] = useState(false);
    const [lunchPostData, setLunchPostData] = useState();
    const [totalCalLunch, setTotalCalLunch] = useState();
    const [headDatalnch, setHeadDatalunch] = useState(false);

    // let params = useParams();
    // if (lunchPostData?.length > 0) {
    //     setDelete(true)
    // }
    // console.log(lunchPostData.length)

    const autoComepeleteRef = useRef();

    const searching = allDatalunch?.filter(option => option.name.toLowerCase().includes(value.toLowerCase()))


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // get all Lunch data from data base


    const getAllData = async () => {
        await fetch("http://localhost:8080/food/getlunch")
            .then((res) => res.json())
            .then((res) => {
                console.log(res.lunch)
                setAllDatalunch(res.lunch)
            })
            .catch((err) => console.log("errrrr", err))
    }


    //Post the data         


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
                getPostBreakData();
                getAllCalories();


            })
            .catch((err) => console.log("err from backend" + err))
    }

    // get the post data

    const getPostBreakData = async () => {
        await fetch("http://localhost:8080/food/getpostlunch")
            .then((res) => res.json())
            .then((res) => {
                console.log("lunchCount   ", res.lunch.length)
                if (res.lunch.length > 0) {
                    setHeadDatalunch(true)
                }
                else {
                    setHeadDatalunch(false)
                }
                setLunchPostData(res.lunch)

            })
            .catch((err) => console.log(err))
    }

    //  delete one data 

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
                // alert("Your Task Deleted Successfully done")
                // console.log("hii")
                // setData(res)
                // window.location.reload();
                getPostBreakData();


            })
            .catch((err) => console.log(err))
    }


    // delete all post data



    const deleteBreakPostDataAll = async (foodName) => {

        console.log(foodName)
        await fetch(`http://localhost:8080/food/deletebreakfastall?food=${foodName}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'

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

        await fetch("http://localhost:8080/food/allcalories")
            .then((res) => res.json())
            .then((res) => {
                console.log("allcalories", res.allcolories)
                let dtat = res.allcolories.filter(option => option._id == 'lunch')
                // setLunchPostData(res.breakfast)



                setTotalCalLunch(dtat)
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
                setSuggestionlunch(false)
            }
        }

        document.addEventListener('click', handleOutSideClick);

        return () => {
            document.removeEventListener('click', handleOutSideClick);
        }


    }, [])

    console.log("break post data" + lunchPostData)



    return (
        <div>
            {allDatalunch ? <Accordion w='70%' m='auto' defaultIndex={[0]} allowMultiple>
                <AccordionItem >

                    <AccordionButton bg='rgb(232,245,233)' >
                        <AccordionIcon fontSize='30px' />


                        <Flex textAlign='center' mt='-5px' h='45px'>
                            <Box w='20%' >
                                <Flex  >
                                    <Text pl='10px'> LUNCH</Text>

                                </Flex>
                            </Box>
                            <Box w='90%' ml='150px' >
                                {headDatalnch && totalCalLunch?.map((item) => (
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

                    <AccordionPanel >
                        <Box mt='-10px'>
                            {lunchPostData?.map((item) => (

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

                            <Box mt='10px' mr='10px' fontSize='20px'><IoPencilSharp /> </Box>

                            <Box w='40%' ml='-20px' ref={autoComepeleteRef} >
                                <input
                                    className={style.inputs}
                                    onChange={handleChange}
                                    onFocus={() => setSuggestionlunch(true)}

                                    placeholder='Please enter food name, brand or restaurant' />
                            </Box>


                        </Flex>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion > : <CircularProgress isIndeterminate value={30} size='120px' />
            }
            <div className={style.outermodal}>

                {
                    suggestionlunch ? searching?.map((item, index) => (
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

export default Lunch
