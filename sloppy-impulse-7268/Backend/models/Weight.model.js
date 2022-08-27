const mongoose = require("mongoose")


const weightSchema = new mongoose.Schema({
    weight: { type: Number, required: true },
    targetWeight: { type: Number, required: true }
})

const WeightModel = mongoose.model("weights", weightSchema)


module.exports = WeightModel

