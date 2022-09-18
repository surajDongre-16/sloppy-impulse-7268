const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());


// All require statements should be together at the top.
const connection = require("./config/db");

const weightRoutes = require("./routes/weights.routes");
const foodRouter = require("./routes/foods.routes");
const userController = require("./routes/user.routes")
const authentication = require("./middlewares/authentication")


app.use("/weight", weightRoutes);
app.use("/user", userController)
app.use(authentication)
app.use("/food", foodRouter);


// What is this for?
app.get("/", (req, res) => {
  res.send("home page");
});


app.listen(process.env.PORT, async () => {
  try {
    // This is very strange. Await is to be used with async operations. You can't await on a module export.
    // Basically this await will have no effect.
    await connection;
    console.log("Db connnected");
  } catch (err) {
    // If connecting to the DB fails, can the app run reliably? This should ideally be retried in the hopes that
    // it might be a transient error which gets fixed on a few retries (say 5) at most. If it still fails the app
    // should crash and there should be a process manager like https://pm2.keymetrics.io/ that restarts the process.
    console.log("error connecting to db");
    console.log(err);
  }
  // This is redundant and not a helpful log message. Usually node will add its own start up logs.
  console.log("listening on 8080");
});
