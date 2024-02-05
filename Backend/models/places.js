const mongoose = require("mongoose");

const Places = new mongoose.model("Places", {
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  time: {
    type: Date
  }
})

module.exports = Places