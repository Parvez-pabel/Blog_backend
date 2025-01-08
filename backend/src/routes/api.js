const express = require("express");
const {
  createProfile,
  loginProfile,
  selectProfile,
  updateProfile,
} = require("../controllers/profileController");
const authVerifyMiddlewares = require("../middlewares/authVerifyMiddlewares");
const {
  createBlog,
  readBlog,
  blogByCategory,
  updateBlog,
  deleteBlog,
  getAllBlogs,
} = require("../controllers/blogControllers");

const router = express.Router();

//user router
router.post("/createProfile", createProfile);
router.post("/login", loginProfile),
  router.post("/updateProfile", authVerifyMiddlewares, updateProfile);
router.get("/selectProfile", authVerifyMiddlewares, selectProfile);

// blog router
router.post("/createBlog", authVerifyMiddlewares, createBlog);
router.post("/updateBlog/:id", authVerifyMiddlewares, updateBlog);
router.delete("/deleteBlog/:id", authVerifyMiddlewares, deleteBlog);
router.get("/readAllBlogs", getAllBlogs);
router.get("/readBlog/:id", readBlog);
router.get("/blogByCategory", blogByCategory);

//blog category routes

module.exports = router;
