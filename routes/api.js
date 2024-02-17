const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
const Post = require("../schemas/Post");
const Tag = require("../schemas/Tag");
const Option = require("../schemas/Option");
const Category = require("../schemas/Category");

/*
Users Routes
*/

// Get user by id
router.get("/users/:id", (req, res) => {
  User.find({ id: req.params.id }, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  });
});

// Get all users
router.get("/users", async (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

// create new user
router.post("/users", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(doc);
  });
});

// update user by id
router.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(doc);
  });
});

/*
Posts Routes
*/

// Get posts by id
router.get("/posts/:id", (req, res) => {
  Post.findOne({ id: req.params.id }, (err, post) => {
    if (err) return res.status(400).send(err);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.status(200).send(post);
  });
});

// Get all posts
router.get("/posts", async (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(posts);
  });
});

router.post('/posts',async (req,res) => {
  var post = new Post(req.body);

  await post.save();
  res.send(post);
})

// update posts by id
router.put("/posts/:id", (req, res) => {
  Post.findOneAndUpdate({ id: req.params.id }, req.body, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//delete post by id
router.delete("/posts/:id", (req,res) => {
  Post.deleteOne({id: req.params.id}, (err,data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(doc);
  })
});

/*
Tags Routes
*/
// Get all tags
router.get("/tags", async (req, res) => {
  Tag.find({}, (err, tags) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(tags);
  });
});

router.post('/tags',async (req,res) => {
  var tag = new Tag(req.body);

  await tag.save();
  res.send(tag);
})

/**
 * Options Routes
 */
// Get all options
router.get("/options/background", async (req, res) => {
  Option.find({}, (err, options) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(options[0].background);
  });
});

router.get("/options/selected", async (req, res) => {
  Option.find({}, (err, options) => {
    if (err) return res.status(400).send(err);
    res.status(200).send({selected: options[0].selected});
  });
});

/**
 * Categories Routes
 */
// Get all Categories
router.get("/categories", async (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(categories);
  });
});

module.exports = router;
