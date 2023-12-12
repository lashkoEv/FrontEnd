const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const Post = require("./schemas/Post/Post");
const PostRepository = require("./schemas/PostRepository/PostRepository");

const postRepository = new PostRepository();

app.get("/posts", (req, res, next) => {
  const posts = [];

  postRepository.getAll().forEach((post) => {
    posts.push(JSON.stringify(post.toObject()));
  });

  res.send(posts);
});

app.post("/posts", (req, res, next) => {
  const request = req.body;

  const post = new Post(
    request.id,
    request.title,
    request.text,
    request.author
  );

  postRepository.add(post);

  res.send("ok");
});

module.exports = app;
