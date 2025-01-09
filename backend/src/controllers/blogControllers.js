const BlogModel = require("../models/blogModels");

//create blog
exports.createBlog = async (req, res) => {
  try {
    let reqBody = req.body;
    let title = reqBody.title;
    let content = reqBody.content;
    let author = req.headers.Email;
    let category = reqBody.category;
    let image = reqBody.image;
    let BlogCreateDate = Date.now();
    let BlogUpdateDate = Date.now();

    let BlogPostBody = {
      title: title,
      content: content,
      author: author,
      category: category,
      image: image,
      BlogCreateDate: BlogCreateDate,
      BlogUpdateDate: BlogUpdateDate,
    };
    let Blog = await BlogModel.create(BlogPostBody);
    res.status(200).json({ message: "Blog created successfully.", data: Blog });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create ToDo.",
      error: error.message,
    });
  }
};
//getAllBlogs

exports.getAllBlogs = async (req, res) => {
  try {
    let blogs = await BlogModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Blogs found.", data: blogs });
  } catch (error) {
    res.status(500).json({
      message: "Failed to read Blogs.",
      error: error.message,
    });
  }
};

//read blog
exports.readBlog = async (req, res) => {
  try {
    let blogId = req.params.id;
    let blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }
    res.status(200).json({ message: "Blog found.", data: blog });
  } catch (error) {
    res.status(500).json({
      message: "Failed to read Blog.",
      error: error.message,
    });
  }
};
//update blog
exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    let reqBody = req.body;
    let title = reqBody.title;
    let content = reqBody.content;
    let category = reqBody.category;
    let image = reqBody.image;
    let BlogUpdateDate = Date.now();

    let BlogPostBody = {
      title: title,
      content: content,
      category: category,
      image: image,
      BlogUpdateDate: BlogUpdateDate,
      new: true,
    };
    let updatedBlog = await BlogModel.findByIdAndUpdate(blogId, BlogPostBody);
    res
      .status(200)
      .json({ message: "Blog updated successfully.", data: updatedBlog });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update Blog.",
      error: error.message,
    });
  }
};
//delete blog
exports.deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  await BlogModel.findByIdAndDelete(blogId);
  res.status(200).json({ message: "Blog deleted successfully." });
  try {
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete Blog .",
      error: err.message,
    });
  }
};
//filtered by date

//filtered by category
exports.blogByCategory = async (req, res) => {
  try {
    let reqBody = req.body;
    let category = reqBody["category"];
    const blog = await BlogModel.find({
      category: category,
    });
    res.status(200).json({
      message: "ToDos Filtered successfully.",
      data: blog,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to Filter ToDo.",
      error: err.message,
    });
  }
};
//filtered by title, category, location, date
