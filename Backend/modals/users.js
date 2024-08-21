const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,  // Use String instead of "string"
    required: true,
    unique: true
  },
  mobileno: {
    type: String,  // Use String instead of "string"
    required: true,
    unique: true
  },
});

const userModel = mongoose.model("User", userSchema); // Changed collection name to "User"

module.exports = userModel;
