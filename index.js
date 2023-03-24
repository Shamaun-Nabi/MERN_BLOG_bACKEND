const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env
dotenv.config();

// mongoDB connection
connectDB();

//all express functionality
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Api request Come",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Success PORT".bgBlue, PORT);
});
