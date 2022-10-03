
const foodRouter = require('express').Router();

let foodModel = require('../models/food.model');
let postFood = require("../models/foodPost.model");

// This comment is not helpful at all. It should provide a good description about:
// 1. what the API does
// 2. what the request looks like
// 3. what responses can be expected (success and failure cases both included)
// post all the data 

// The API path is not at all indicative of what is happening. This doesn't conform to REST principles.
// Please read - https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9.
// The path should be something like: /api/v1/food/ and the http method should be POST.
// The prefix '/api/v1' should be a global and inherited by all routes. This route should only append
// '/food' to the global path prefix.
foodRouter.post("/postalldata", async (req, res) => {
    // The very first statement in any API function should be to log the incoming request.
    // In case of any failure downstream, knowing the incoming request helps a lot during
    // debugging and understanding what could've caused the failure. Logging is extremely helpful
    // and logging the right things in the right place with the right messages can be the
    // difference between spending hours in finding the root error causes vs just looking at the
    // logs and figuring it out in 2 minutes.
    //
    // Each API function should follow the following structure -
    //
    // router._http_method_("/resource/{:_optional_param_}", async (req, res) => {
    //   console.group('Received request from {req.user.id} to add food items, with body: {req.body}.');
    //   try {
    //     console.log('Performing _operation_ with params: {_params_}.')
    //     // perform API specific operations here
    //     console.log('Successfully performed _operation_.');
    //     res.status(_status_code_)
    //   } catch (e) {
    //     console.error('Could not perform _operation_.', e.message);
    //     // add some retry logic here.
    //     if (numRetries > retryLimit) {
    //        res.status(500).send({ "error": "_relevant_error_message_goes_here_" });
    //     }
    //   }
    //   console.groupEnd();
    // });
    // 

    // Deserialisation can be done is a better way. Usually for serialisation and deserialisation
    // static functions are defined in the model class itself. Something like this for example -
    //
    // In models/Food.js
    //
    // // This function deserialises the input json into a Food object.
    // static from(food_json) {
    //   return Object.assign(new Food(), food_json);
    // }
    //
    // Its invocation would be something like -
    // const food = Food.from(req.body);
    //
    // This looks much cleaner in the API function code and avoid duplication all over the place.
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

    // Missing error handling. What happens when this save() operation fails.
    await addData.save();

    // This should be using the 201 status code. By default it will return 200 which is wrong for
    // an API which is "posting" (creating) a new resource. 
    res.send({ "message": "Data successfullay added", addData })
})


foodRouter.get("/getallfoods", async (req, res) => {
    const dataGet = await foodModel.find();
    // console.log(dataGet);
    res.send({ "message": "get data successfully", dataGet });
})

// Delete  any one element foods

foodRouter.delete("/deleteeach", (req, res) => {
    // console.log(req.query.id)
    postFood.findByIdAndDelete(req.query.id)
        .then(() => res.json(`${req.query.id} Deleted`))
        .catch(err => res.status(500).json('Error' + err))

})

//  post any element

foodRouter.post("/foodpost", async (req, res) => {

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
    res.send({ "message": `${food}  Data successfullay added`, addData });


})

// all food seperate calories counts

foodRouter.get("/allcalories", async (req, res) => {


    const allcolories = await postFood.aggregate([
        {
            $group: {
                "_id": "$food",
                "totalCalo": { "$sum": "$calories" },
                "totalProtein": { "$sum": "$protein" },
                "totalFat": { "$sum": "$totalFat" },
                "totalCarbs": { "$sum": "$carbs" },
                "totalSatFat": { "$sum": "$satFat" },
                "totalSodium": { "$sum": "$sodium" },
                "totalFiber": { "$sum": "$fiber" },
                "totalCalcium": { "$sum": "$calcium" },


            }
        }
    ])
    res.send({ "message": `we got all food sum`, allcolories });

})






// Breakfast all data==============================================================


foodRouter.get("/getallbreakfast", async (req, res) => {

    const breakfast = await foodModel.find({ food: "breakfast" });
    // console.log(breakfast);

    res.send({ "message": "breakfast data get", "count": breakfast.length, breakfast })

})



// Get Breakfast Post data


foodRouter.get("/getpostbreakfast", async (req, res) => {

    const breakfast = await postFood.find({ food: "breakfast" });
    // const calo = await postFood.findB(calories);
    // console.log(calo)
    // const addition = await postFood.{calories:{$sum :}}
    res.send({ "message": "breakfast post data data get", "count": breakfast.length, breakfast })

})

//  Delete all Breakfast

foodRouter.delete("/deletebreakfastall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: req.query.food })
        .then(() => res.json("breakfast Deleted"))
        .catch(err => res.status(500).json('Error' + err))

})



// lunch get all data=================================================================

foodRouter.get("/getlunch", async (req, res) => {

    const lunch = await foodModel.find({ food: "lunch" });
    // console.log(lunch);

    res.send({ "message": "lunch data get", "count": lunch.length, lunch })

})

// Get lunch Post data


foodRouter.get("/getpostlunch", async (req, res) => {

    const lunch = await postFood.find({ food: "lunch" });
    // console.log(breakfast);

    res.send({ "message": "lunch post data data get", "count": lunch.length, lunch })

})


//  Delete all lunch

foodRouter.delete("/deletelunchall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "lunch" })
        .then(() => res.json("lunch Deleted"))
        .catch(err => res.status(500).json('Error' + err))

})




// dinner===========================================================================

foodRouter.get("/getdineer", async (req, res) => {

    const dinner = await foodModel.find({ food: "dinner" });
    // console.log(lunch);

    res.send({ "message": "dinner data get", "count": dinner.length, dinner })

})

// Get dinner Post data


foodRouter.get("/getpostdinner", async (req, res) => {

    const dinner = await postFood.find({ food: "dinner" });
    // console.log(dinner);

    res.send({ "message": "dinner post data data get", "count": dinner.length, dinner })

})

//  Delete all dinner

foodRouter.delete("/deletedinnerall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "dinner" })
        .then(() => res.json("dinner Deleted"))
        .catch(err => res.status(500).json('Error' + err))

})



// snacks========================================================================

foodRouter.get("/getsnacks", async (req, res) => {

    const snacks = await foodModel.find({ food: "snacks" });
    // console.log(lunch);

    res.send({ "message": "snacks data get", "count": snacks.length, snacks })

})

// Get snacks Post data


foodRouter.get("/getpostsnacks", async (req, res) => {

    const snacks = await postFood.find({ food: "snacks" });
    // console.log(snacks);

    res.send({ "message": "snacks post data data get", "count": snacks.length, snacks })

})


//  Delete all snacks

foodRouter.delete("/deletesnacksall", (req, res) => {
    // console.log(req.query.id)
    postFood.deleteMany({ food: "snacks" })
        .then(() => res.json("snacks Deleted"))
        .catch(err => res.status(500).json('Error' + err))

})


module.exports = foodRouter;