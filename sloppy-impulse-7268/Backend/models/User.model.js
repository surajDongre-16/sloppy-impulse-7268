const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    weight:{type: String, required: true},
    // This doesn't follow the naming convention.
    Tweight:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const UserModel = mongoose.model("user", userSchema)


module.exports = UserModel

