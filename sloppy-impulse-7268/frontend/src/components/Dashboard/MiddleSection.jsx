import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/DashboardNav.module.css";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Box7 from "./Box7";

const MiddleSection = () => {
  const [totalCal, setTotalCal] = useState();
  const [calSum, setCalSum] = useState();
  const [totC, setC] = useState();
  const [totF, setF] = useState();
  const [totP, setP] = useState();

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
        // breakfast?.map((item) => setCalSum([...calSum, item.totalCalo]));
        // lunch?.map((item) => setCalSum([...calSum, item.totalCalo]));
        // snacks?.map((item) => setCalSum([...calSum, item.totalCalo]));

        setTotalCal(res.allcolories);
        // console.log(s1);
      })
      .catch((err) => console.log(err));
  };
  console.log(calSum, totC,totF,totP);
  useEffect(() => {
    getAllCalories();
  }, []);

  return (
    <Box bg="#f0f0f0" w="73rem" margin={"auto"}>
      <Grid
        bg="#f0f0f0"
        h="auto"
        templateRows={{ sm: "repeat(7, 1fr)", md: "repeat(10, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={5}
        mt="3rem"
        templateAreas={{
          sm: `"bx1"
                "bx2"
                "bx3"
                "bx4"
                "bx5"
                "bx6"
                "bx7"
          `,
          md: `"bx1 bx2"
                "bx1 bx2"
                "bx1 bx3"
                "bx1 bx3"
                "bx1 bx4"
                "bx1 bx4"
                "bx5 bx6"
                "bx5 bx6"
                "bx7 bx6"
                "bx7 bx6"
                
            `,
        }}
      >
        <GridItem area="bx1" bg="white" h="38rem" className={styles.grid}>
          <Box1 calSum={calSum} totC={totC} totF={totF} totP={totP} />
        </GridItem>
        <GridItem area="bx2" bg="white" className={styles.grid}>
          <Box2 />
        </GridItem>
        <GridItem area="bx3" bg="white" h="12rem" className={styles.grid}>
          <Box3 />
        </GridItem>
        <GridItem area="bx4" bg="white" h="11.5rem" className={styles.grid}>
          <Image
            src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/premium_discover_premium_banner.jpeg"
            alt="discover premium recipe"
            h="100%"
            cursor="pointer"
          />
        </GridItem>
        <GridItem area="bx5" bg="white" h="10rem" className={styles.grid}>
          <Box5 />
        </GridItem>
        <GridItem area="bx6" bg="white" h="25rem" className={styles.grid}>
          <Box6 />
        </GridItem>
        <GridItem area="bx7" bg="white" mt="-1.5rem" className={styles.grid}>
          <Box7 />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MiddleSection;
