const router = require("express").Router;
let Blog = require("../models/Blog");

router.route("/add"),
  post((req, res) => {
    const Id = req.body.Id;
    const Title = req.body.Title;
    const Content = req.body.Content;
    const Author = req.body.Author;
    const CreatedDate = req.body.CreatedDate;
  });
