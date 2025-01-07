const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Mobile: {
      type: String,
      unique: true,
    },
    City: {
      type: String,
    },
    UserName: {
      type: String,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const profileModel = mongoose.model("profiles", dataSchema);

module.exports = profileModel;
