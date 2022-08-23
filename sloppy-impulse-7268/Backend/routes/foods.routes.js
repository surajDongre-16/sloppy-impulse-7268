
const foodRouter = require('express').Router();

let foodModel = require('../models/food.model');
let postFood = require("../models/foodPost.model");

// post all the data 

foodRouter.post("/postalldata", async (req, res) => {
    const { food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium } = req.body;

    const addData = new foodModel({
        food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium
    })

    await addData.save();
    res.send({ "message": "Data successfullay added", addData })
})


foodRouter.get("/getallfoods", async (req, res) => {

    const dataGet = await foodModel.find();
    console.log(dataGet);
    res.send({ "message": "get data successfully", dataGet });
})

// Delete each element in any  foods

foodRouter.delete("/deleteeach", (req, res) => {
    // console.log(req.query.id)
    postFood.findByIdAndDelete(req.query.id)
        .then(() => res.json(`${req.query.id} Deleted`))
        .catch(err => res.status(400).json('Error' + err))

})




// Breakfast data


foodRouter.get("/getbreakfast", async (req, res) => {

    const breakfast = await foodModel.find({ food: "breakfast" });
    // console.log(breakfast);

    res.send({ "message": "breakfast data get", "count": breakfast.length, breakfast })

})

// breakfast post

foodRouter.post("/postbreakfast", async (req, res) => {

    const { food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium } = req.body;

    const addData = new postFood({
        food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium
    })

    await addData.save();
    res.send({ "message": "Data successfullay added", addData });


})


//  Delete all Breakfast

foodRouter.delete("/deletebreakfastall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "breakfast" })
        .then(() => res.json("breakfast Deleted"))
        .catch(err => res.status(400).json('Error' + err))

})



// lunch data

foodRouter.get("/getlunch", async (req, res) => {

    const lunch = await foodModel.find({ food: "lunch" });
    // console.log(lunch);

    res.send({ "message": "lunch data get", "count": lunch.length, lunch })

})

// lunch post

foodRouter.post("/postlunch", async (req, res) => {

    const { food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium } = req.body;

    const addData = new postFood({
        food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium
    })

    await addData.save();
    res.send({ "message": "Data successfullay added", addData });


})



//  Delete all lunch

foodRouter.delete("/deletelunchall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "lunch" })
        .then(() => res.json("lunch Deleted"))
        .catch(err => res.status(400).json('Error' + err))

})




// dinner

foodRouter.get("/getdineer", async (req, res) => {

    const dinner = await foodModel.find({ food: "dinner" });
    // console.log(lunch);

    res.send({ "message": "dinner data get", "count": dinner.length, dinner })

})

// dinner post

foodRouter.post("/postdinner", async (req, res) => {

    const { food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium } = req.body;

    const addData = new postFood({
        food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium
    })

    await addData.save();
    res.send({ "message": "Data successfullay added", addData });


})


//  Delete all dinner

foodRouter.delete("/deletedinnerall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "dinner" })
        .then(() => res.json("dinner Deleted"))
        .catch(err => res.status(400).json('Error' + err))

})

// snacks

foodRouter.get("/getsnacks", async (req, res) => {

    const snacks = await foodModel.find({ food: "snacks" });
    // console.log(lunch);

    res.send({ "message": "snacks data get", "count": snacks.length, snacks })

})

// snacks post

foodRouter.post("/postsnacks", async (req, res) => {

    const { food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium } = req.body;

    const addData = new postFood({
        food, name, subName, img,
        calories, carbs, protein, totalFat,
        fdGrade, satFat, tranFat, sodium,
        fiber, calcium
    })

    await addData.save();
    res.send({ "message": "Data successfullay added", addData });


})

//  Delete all snacks

foodRouter.delete("/deletesnacksall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "snacks" })
        .then(() => res.json("snacks Deleted"))
        .catch(err => res.status(400).json('Error' + err))

})


module.exports = foodRouter;