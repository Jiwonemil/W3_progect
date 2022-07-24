const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  postId: {
    type: String,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postsSchema);