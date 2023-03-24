const mogoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mogoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDB".bgGreen.white);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
