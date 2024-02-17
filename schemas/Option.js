const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const optionSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId
    },
    id: {
      type: String,
    },
    selected: {
      type: Number
    },
    background: {
      type: Array
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);
module.exports = mongoose.model("Option", optionSchema);
