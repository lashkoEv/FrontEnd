const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use("/", (req, res, next) => {
  console.log("First middleware");
  next();
});

app.use("/", (req, res, next) => {
  console.log("Second middleware");
  res.send({
    hello: "Hello!",
  });
});

module.exports = app;
