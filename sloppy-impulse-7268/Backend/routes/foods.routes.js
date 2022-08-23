
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


foodRouter.get("/getbreakfast", async (req, res) => {

})



module.exports = foodRouter;