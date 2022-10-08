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
    const hash = user.password;
    if(!user){
        return res.send("Invalid Credentials")
    }
    
    bcrypt.compare(password, hash, function(err, result){
       if(result){
        var token = jwt.sign({ email, _id }, process.env.SECRETKEY);
       return res.send({"message": "Login sucess", "token": token,"id":_id})
       }
       else{
        return res.send("Invalid input")
       }
    })
   
})



module.exports = userController