const mongoose = require("mongoose");


const foodData = new mongoose.Schema({
    food: { type: String, require: true },
    name: { type: String, require: true },
    subName: { type: String, require: true },
    img: { type: String, require: true },
    calories: { type: Number, require: true },
    carbs: { type: Number, require: true },
    protein: { type: Number, require: true },
    totalFat: { type: Number, require: true },
    fdGrade: { type: String, require: true },
    satFat: { type: Number, require: true },
    tranFat: { type: Number, require: true },
    sodium: { type: Number, require: true },
    fiber: { type: Number, require: true },
    calcium: { type: Number, require: true },
}, {
    timestamps: true
})

const foodsModel = mongoose.model("allfoods", foodData);

module.exports = foodsModel;