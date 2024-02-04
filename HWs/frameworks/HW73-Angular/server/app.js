const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const { quizzesRouter } = require('./routes/quizzes.router');
const { resourceRouter } = require('./routes/resources.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("", quizzesRouter);
app.use("", resourceRouter);
app.use("/", (req, res) => {
    return res.json({
        msg: "Initial page"
    })
});


module.exports = {
    app
}