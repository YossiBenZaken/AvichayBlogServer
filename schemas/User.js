const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId
    },
    id: {
      type: String,
    },
    photo: {
      type: String,
    },
    name: {
      type: String
    },
    token: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);
module.exports = mongoose.model("User", userSchema);
