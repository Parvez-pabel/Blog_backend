//initial basic packages
const express = require("express");
const bodyParser = require("body-parser");
const app = new express();

//middlewares
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const ExpressMongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

//database
const mongoose = require("mongoose");
const router = require("./src/routes/api");
//middlewares implement
app.use(cors());
app.use(ExpressMongoSanitize());
app.use(xss());
app.use(hpp());
app.use(helmet());
//bodyParser implement
app.use(bodyParser.json());
//rate limit implement
const limiter = rateLimit({
  windows: 15 * 60 * 1000,
  max: 10000,
  message: "Too many requests from this IP, please try again after a minute.",
});

app.use(limiter);
//db connection
let URI =
  "mongodb+srv://blogagency:mernfinalproject@blog.5d2zs.mongodb.net/blogagency";
mongoose
  .connect(URI, {
    autoCreate: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(" Error connecting to the DB", err);
  });
//router implement
app.use("/api/v1", router);
//not found page
app.use("*", (req, res) => {
  return res.status(404).json({ message: "Page not found" });
});
//export app

module.exports = app;
