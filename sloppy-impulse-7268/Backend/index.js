const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());



const connection = require("./config/db");




app.get("/", (req, res) => {
  res.send("home page");
});


app.listen(8080, async () => {
  try {
    await connection;
    console.log("Db connnected");
  } catch (err) {
    console.log("error connecting to db");
    console.log(err);
  }
  console.log("listening on 8080");
});
