const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId
    },
    id: {
      type: String,
    },
    published: {
      type: Object,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    draft: {
      type: Boolean,
    },
    comments: {
      type: Array,
    },
    views: {
      type: Number
    },
    content: {
      type: String
    },
    author: {
      type: String
    },
    authorID: {
      type: String
    },
    tags: {
      type: Array
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);
module.exports = mongoose.model("Post", postSchema);
