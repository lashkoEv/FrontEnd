const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const accessToken = require("./token");

app.post("/authorize", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  const request = req.body;

  console.log(request);

  if (request.isValid) {
    res.send({
      accessToken: accessToken,
    });
  } else {
    res.send({
      accessToken: false,
    });
  }
});

module.exports = app;
