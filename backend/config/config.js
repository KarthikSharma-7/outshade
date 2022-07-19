const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PW}@cluster0.4xcumbk.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
