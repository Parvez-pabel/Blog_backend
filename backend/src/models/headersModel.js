const mongoose = require("mongoose");

const NavSchema = new mongoose.Schema(
  {
    
  },
  { versionKey: false }
);

const profileModel = mongoose.model("profiles", dataSchema);

module.exports = profileModel;
