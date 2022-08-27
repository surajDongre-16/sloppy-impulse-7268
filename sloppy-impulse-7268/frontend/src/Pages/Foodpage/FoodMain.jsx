import React, { useEffect, useState } from "react";
import style from "./Food.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import Breakfast from "./Breakfast";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snacks from "./Snacks";
import CircularProgressBar from "../../components/Dashboard/CircularProgress";
import HorizontalProg from "../../components/Dashboard/HorizontalProg";
import { BsThreeDotsVertical } from "react-icons/bs";

function FoodMain({ setTrick,trick }) {
//   const [trick, setTrick] = useState(false);

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

    await fetch("https://my-net-dairy-backend.herokuapp.com/food/allcalories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
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

      <Flex w="70%" m="auto" h="300px" bg="white" className={style.shoe}>
        <Box w={"20rem"} p="0 0 5rem 0">
          <CircularProgressBar x={x} />
        </Box>
        <Box
          w="43rem"
          display="flex"
          flexDirection={"column"}
          justifyContent="space-around"
        >
          <HorizontalProg
            carbs={carbs}
            protein={protein}
            fat={fat}
            totC={totC}
            totF={totF}
            totP={totP}
            ml="1rem"
            w="40rem"
          />
        </Box>
      </Flex>
      <Flex h="110px" w="70%" m="auto" mt="20px">
        <Box w="60%" bg="white" className={style.second} h="100%">
          <Flex>
            <Box>
              <img
                style={{ width: "40px", margin: "10px" }}
                src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/15_search_global@3x.png"
                alt="img"
              />
            </Box>
            <Box>
              <Text w="80%" textAlign="left" fontSize="14px" p="10px">
                Import, customize, and log recipes from your favorite websites
                with our Recipe Import feature.
              </Text>
            </Box>
            <Box m="20px" cursor="pointer">
              <BsThreeDotsVertical />
            </Box>
          </Flex>

          <Flex ml="63%" w="35%" h="38px">
            <Button colorScheme="teal" variant="ghost">
              MORE
            </Button>

            <Button ml="10px" colorScheme="teal" variant="ghost">
              MY ADVICE
            </Button>
          </Flex>
        </Box>

        <Flex w="35%" h="50px">
          <Button ml="10px" colorScheme="teal" variant="ghost">
            DAILY REPORT
          </Button>

          <Button ml="10px" colorScheme="teal" variant="ghost">
            DAILY ANALYSIS
          </Button>

          <Button ml="10px" colorScheme="teal" variant="ghost">
            HELP
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default FoodMain;
