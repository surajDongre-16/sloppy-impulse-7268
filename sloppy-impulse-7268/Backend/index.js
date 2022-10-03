const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./config/db");
const weightRoutes = require("./routes/weights.routes");
const foodRouter = require("./routes/foods.routes");
const userController = require("./routes/user.routes");
const authentication = require("./middlewares/authentication");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userController);
app.use("/weight", weightRoutes);

app.use(authentication);
app.use("/food", foodRouter);

app.listen(process.env.PORT, () => {
  try {
    connection;
    console.log("Db connnected");
  } catch (err) {
    // If connecting to the DB fails, can the app run reliably? This should ideally be retried in the hopes that
    // it might be a transient error which gets fixed on a few retries (say 5) at most. If it still fails the app
    // should crash and there should be a process manager like https://pm2.keymetrics.io/ that restarts the process.
    console.log("error connecting to db", err);
  }
});
