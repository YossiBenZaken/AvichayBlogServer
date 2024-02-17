const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId
    },
    id: {
      type: String,
    },
    name: {
      type: String
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);
module.exports = mongoose.model("Categories", categorySchema);
