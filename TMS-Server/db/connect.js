const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = (uri) => {
  return mongoose.connect(uri, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
