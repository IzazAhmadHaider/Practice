const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    unique: true
  },
  mobileno: {
    type: "string",
    required: true,
    unique: true
  },
});
const userModel =mongoose.model("users",userSchema);
module.exports = userModel;