import React from 'react'
import style from './Food.module.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import Breakfast from './Breakfast';


function FoodMain() {
    return (
        <div>


            <table className={style.table}>

                <thead>
                    <th>
                        <div style={{ display: "flex" }}>
                            <div className={style.tablehead1}>
                                <div><BiSearchAlt2 /></div>
                                <div>  <AiFillStar /></div>
                                <img style={{ width: "20px" }} src='https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png' alt="img" />
                            </div>
                            <div style={{ paddingLeft: '50px', color: 'gray', fontSize: '12px' }}><p>Consumed food, amount</p></div>
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
                    <tr width='10px'>

                        
                <tbody>
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

                        <Breakfast />


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

                </tbody> */}



            </table >
            <Breakfast />
        </div >
    )
}

export default FoodMain
