const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId
    },
    id: {
      type: String,
    },
    tag: {
      type: String
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);
module.exports = mongoose.model("Tag", tagSchema);
