const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Message = require("./schemas/Message.model");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connect();

app.get("/", async (req, res) => {
  const msg = await Message.find();

  return res.json(msg);
});

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://smevlk2014:smevlk2014@cluster0.rskogtn.mongodb.net/HW75?retryWrites=true&w=majority"
    );
  } catch (e) {
    console.log("[e.message]", e.message);
  }
}

module.exports = {
  app,
};
