import React, { useEffect, useState } from "react";
import style from "./Food.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import Breakfast from "./Breakfast";
import { Box, Flex } from "@chakra-ui/react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snacks from "./Snacks";
import CircularProgressBar from "../../components/Dashboard/CircularProgress";
import HorizontalProg from "../../components/Dashboard/HorizontalProg";

function FoodMain() {
  const [trick, setTrick] = useState(false);

  const [calSum, setCalSum] = useState();
  const [totC, setC] = useState();
  const [totF, setF] = useState();
  const [totP, setP] = useState();

  const x = calSum?.reduce((a, b) => a + b, 0);
  const carbs = totC?.reduce((a, b) => a + b, 0);
  const protein = totP?.reduce((a, b) => a + b, 0);
  const fat = totF?.reduce((a, b) => a + b, 0);
  const getAllCalories = async () => {
    // http://localhost:8080/food/allcalories

    await fetch("http://localhost:8080/food/allcalories")
      .then((res) => res.json())
      .then((res) => {
        const carbs = [];
        const fat = [];
        const prot = [];
        const sum = [];
        const diner = res.allcolories.filter(
          (option) => option._id === "dinner"
        );
        const breakfast = res.allcolories.filter(
          (option) => option._id === "breakfast"
        );
        const lunch = res.allcolories.filter(
          (option) => option._id === "lunch"
        );
        const snacks = res.allcolories.filter(
          (option) => option._id === "snacks"
        );
        breakfast?.map((item) => sum.push(item.totalCalo));
        lunch?.map((item) => sum.push(item.totalCalo));
        diner?.map((item) => sum.push(item.totalCalo));
        snacks?.map((item) => sum.push(item.totalCalo));
        setCalSum(sum);

        breakfast?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        lunch?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        diner?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        snacks?.map((item) => {
          return (
            carbs.push(item.totalCarbs),
            fat.push(item.totalFat),
            prot.push(item.totalProtein)
          );
        });
        setC(carbs);
        setF(fat);
        setP(prot);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllCalories();
  }, [trick]);
  return (
    <>
      <div>
        <table className={style.table}>
          <thead>
            <th>
              <Flex>
                <div className={style.tablehead1}>
                  <div>
                    <BiSearchAlt2 />
                  </div>
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                  <img
                    style={{ width: "20px" }}
                    src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{
                    background: "white",
                    paddingLeft: "50px",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Consumed food, amount
                </div>
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
            <th>
              <AiTwotoneSetting />
            </th>
          </thead>
        </table>
        <div>
          <Breakfast setTrick={setTrick} />
          <Lunch setTrick={setTrick} />
          <Dinner setTrick={setTrick} />
          <Snacks setTrick={setTrick} />
        </div>
      </div>
      <Flex w="70%" m="auto" h="300px">
        <Box w={"20rem"} p="0 0 5rem 0">
          <CircularProgressBar x={x} />
        </Box>
        <Box w="43rem" display='flex' flexDirection={'column'} justifyContent='space-around' >
          <HorizontalProg
            carbs={carbs}
            protein={protein}
            fat={fat}
            totC={totC}
            totF={totF}
            totP={totP}
            ml="1rem"
            w='40rem'
          />
        </Box>
      </Flex>
      <Box h="100px" w="70%" border="1px solid red" m="auto"></Box>
    </>
  );
}

export default FoodMain;
