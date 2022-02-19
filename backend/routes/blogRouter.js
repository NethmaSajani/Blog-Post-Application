const router = require("express").Router();
let Blog = require("../models/Blog");

//Add blog to the system
router.route("/add").post((req, res) => {
  const Id = req.body.Id;
  const Title = req.body.Title;
  const Content = req.body.Content;
  const Author = req.body.Author;
  const CreatedDate = req.body.CreatedDate;

  const newBlog = new Blog({
    Id,
    Title,
    Content,
    Author,
    CreatedDate,
  })

  newBlog
    .save()
    .then(() => {
      res.json("New blog has added successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Display all blogs
router.route("/").get((req, res) => {
  Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update existing blog
router.route("/update/:id").put(async (req, res) => {
  let blogId = req.params.id;
  const { Id, Title, Content, Author, CreatedDate } = req.body;

  const updateBlog = {
    Id,
    Title,
    Content,
    Author,
    CreatedDate,
  };

  const update = await Blog.findByIdAndUpdate(blogId, updateBlog)
    .then(() => {
      res
        .status(200)
        .send({ status: "Blog has updated successfully!"});
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating the blog", error: err.message });
    });
});

//Delete Blog
router.route("/delete/:id").delete(async (req, res) => {
  let blogId = req.params.id;

  await Blog.findByIdAndDelete(blogId)
    .then(() => {
      res.status(200).send({ status: "Blog deleted successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting the blog", error: err.message });
    });
});

//Display single blog
router.route("/get/:id").get(async (req, res) => {
  let blogId = req.params.id;

  const blog = await Blog.findById(blogId).then((blog) => {
      res.status(200).send({status:"Blog fetched", blog})
  }).catch((err)=>{
      console.log(err);
      res.status({status:"Error with get blog details", error: err.message});
  })
});

module.exports = router;