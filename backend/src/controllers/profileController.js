const profileModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
//Profile create
exports.createProfile = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await profileModel.create(reqBody);
    res
      .status(200)
      .json({ message: "The User Profile successfully created", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create User Profile", error: error.message });
  }
};
//profile login

exports.loginProfile = async (req, res) => {
  try {
    let reqBody = req.body;
    let UserName = reqBody.UserName;
    let Password = reqBody.Password;
    let data = await profileModel.find({
      UserName: UserName,
      Password: Password,
    });
    if (data.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    } else {
      //token verification
      //generate token if valid credentials are provided

      let payload = {
        exp: Math.floor(Date.now() / 1000 + 24 * 60 * 60),
        data: data[0],
      };
      let token = jwt.sign(payload, "abcd123456");
      res.status(201).send({
        token: token,
        message: "User successfully logged in.",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "please resolve the problem",
      error: error.message,
    });
  }
};

//profile update
exports.updateProfile = async (req, res) => {
  try {
    let reqBody = req.body;
    let UserName = req.headers["UserName"]; // Replace with dynamic input if needed
    let data = await profileModel.findOneAndUpdate(
      { UserName: UserName },
      reqBody,
      { new: true }
    );
    if (data.nModified === 0) {
      return res.status(404).json({
        message: "User profile not found.",
      });
    }
    res.status(200).json({
      message: "User profile updated successfully.",
      data: reqBody,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user profile.",
      error: error.message,
    });
  }
};
//Profile select
exports.selectProfile = async (req, res) => {
  try {
    const userName = req.headers["UserName"]; // Replace with dynamic input if needed
    const data = await profileModel.find({ UserName: userName }); // No callback needed
    res.status(200).json({
      message: "User profile selected successfully.",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to select user profile.",
      error: err.message,
    });
  }
};
//profile logout
exports.logoutProfile = async (req, res) => {};
