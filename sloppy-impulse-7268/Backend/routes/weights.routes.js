const weightRoutes = require("express").Router();

const WeightModel = require("../models/Weight.model");


weightRoutes.post("/postweight", async (req, res) => {
    const { weight, targetWeight } = req.body;

    const addWeights = new WeightModel({
        weight,
        targetWeight
    })
    await addWeights.save();

    res.send({ "message": "Post the weights data successfull", addWeights })
})

weightRoutes.get("/get_weight", async (req, res) => {

    const getData = await WeightModel.find();
    // console.log(getData);
    res.send({ "message": "Get all data", getData });
})

module.exports = weightRoutes;