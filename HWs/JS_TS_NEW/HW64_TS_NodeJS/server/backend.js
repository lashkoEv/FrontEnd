const Product = require("./schemas/Product/Product");
const User = require("./schemas/User/User");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://smevlk2014:smevlk2014@cluster0.rskogtn.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "HW64",
  }
);

app.get("/authorization/init", async (req, res) => {
  const found = await User.find({ login: "admin", password: "admin" });

  if (found.length < 1) {
    const user = new User({
      login: "admin",
      password: "admin",
    });

    user
      .save()
      .then(() => {
        res.send("ok");
      })
      .catch((e) => {
        res.send(`Error: ${e}`);
      });
  }

  res.send("ok");
});

app.post("/authorization", async (req, res) => {
  const user = await User.find({
    login: req.body.login,
    password: req.body.password,
  });
  console.log(req.body.login, req.body.password);
console.log(user);
  if (user.length < 1) {
    res.send({ isValid: false });
  } else {
    res.send({ isValid: true });
  }
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.post("/products", (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
  });

  product
    .save()
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      res.end("Error: ", error);
    });
});

module.exports = app;
