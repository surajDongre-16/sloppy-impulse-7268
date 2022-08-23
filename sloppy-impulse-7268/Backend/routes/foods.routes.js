
const foodRouter = require('express').Router();

let foodModel = require('../models/food.model');


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

// Breakfast data


foodRouter.get("/getbreakfast", async (req, res) => {

    const breakfast = await foodModel.find({ food: "breakfast" });
    // console.log(breakfast);

    res.send({ "message": "breakfast data get", "count": breakfast.length, breakfast })

})


// lunch data

foodRouter.get("/getlunch", async (req, res) => {

    const lunch = await foodModel.find({ food: "lunch" });
    // console.log(lunch);

    res.send({ "message": "lunch data get", "count": lunch.length, lunch })

})

// dinner

foodRouter.get("/getdineer", async (req, res) => {

    const dinner = await foodModel.find({ food: "dinner" });
    // console.log(lunch);

    res.send({ "message": "dinner data get", "count": dinner.length, dinner })

})

// snacks

foodRouter.get("/getsnacks", async (req, res) => {

    const snacks = await foodModel.find({ food: "snacks" });
    // console.log(lunch);

    res.send({ "message": "snacks data get", "count": snacks.length, snacks })

})




module.exports = foodRouter;