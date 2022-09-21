const express = require("express")
const bcrypt = require("bcrypt")
require("dotenv").config();
const jwt = require("jsonwebtoken")
const userController = express.Router();

const UserModel  = require("../models/User.model")


userController.post("/register",  (req, res) => {
    const {email, password,name,weight,Tweight} = req.body;
    bcrypt.hash(password, 6, async function(err, hash){
        if(err){
            res.send("Please try again")
        }
        const user = new UserModel({
            email,
            password: hash,
            name,
            weight,
            Tweight
        })
        await user.save();
    })
    res.send("signup sucessfull")
})

userController.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
    const {_id}=user
    
    // The code is poorly formatted. This is how it can be formatted better -
    //
    // if (!user) {
    //     return res.send("Invalid Credentials")
    // }
    //
    // bcrypt.compare(password, user.password, function (err, result) {
    //     if (result) {
    //         var token = jwt.sign({ email, user._id }, process.env.SECRETKEY);
    //         return res.send({ "message": "Login sucess", "token": token, "id": _id })
    //     } else {
    //         return res.send("Invalid input")
    //     }
    // })
    //
    // Also, note above, how you can avoid creating local variables like 'userId' which are
    // used in only one place. Such small optimisations help reduce the stack memory footprint
    // and in large applications they slowly add up.
    if(!user){
        return res.send("Invalid Credentials")
    }
    const hash = user.password;
    const userId = user._id
    bcrypt.compare(password, hash, function(err, result){
       if(result){
        var token = jwt.sign({ email, userId }, process.env.SECRETKEY);
       return res.send({"message": "Login sucess", "token": token,"id":_id})
       }
       else{
        return res.send("Invalid input")
       }
    })
   
})



module.exports = userController