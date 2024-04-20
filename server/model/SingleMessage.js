const mongoose = require("mongoose");
const News = require("./News");
const User = require("./User");

const singleMessageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
    required: true,
  },
  // Add any other fields your singleMessage model needs
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SingleMessage = mongoose.model("SingleMessage", singleMessageSchema);

module.exports = SingleMessage;
