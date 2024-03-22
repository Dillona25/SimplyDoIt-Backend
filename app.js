const express = require("express");
const mongoose = require("mongoose");

const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/SimplyDoIt", (r) => {
  console.log("Connected to SimplyDoIt", r);
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
  console.log("App is running");
});
