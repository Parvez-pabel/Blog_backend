const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: "users",
  },
  category: {
    type: String,
    ref: "categories",
  },
  image: {
    type: String,
    default: "https://placehold.co/600x400",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;
