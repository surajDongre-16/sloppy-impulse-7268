const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    weight:{type: String, required: true},
    Tweight:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const UserModel = mongoose.model("user", userSchema)


module.exports = UserModel

