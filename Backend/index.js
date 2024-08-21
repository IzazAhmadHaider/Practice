const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserModal = require("./modals/users");
const userModel = require("./modals/users");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(process.env.connection_string_for_mongodb_connection)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/getUsers", (req, res) => {
  userModel
    .find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      res.json(err);
      console.log("no data found", err);
    });
});
app.post("/CreateUsers", async (req, res) => {
    try {
      const { name, mobileno } = req.body;
  
      // Check if user already exists by name
      const userByName = await userModel.findOne({ name });
      if (userByName) {
        return res.status(400).json({ message: "User already exists with this name", field: "name" });
      }
  
      // Check if user already exists by mobile number
      const userByMobile = await userModel.findOne({ mobileno });
      if (userByMobile) {
        return res.status(400).json({ message: "User already exists with this mobile number", field: "mobileno" });
      }
  
      // Create and save the new user if no duplicates are found
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (err) {
      // Handle duplicate key error
      if (err.code === 11000) {
        return res.status(400).json({ message: "Duplicate key error", error: err });
      }
      res.status(500).json({ message: "Error creating user", error: err });
    }
  });
  
  

app.delete("/deleteUser/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await userModel.findByIdAndDelete(userId);
      if (deletedUser) {
        res.json({ message: "User deleted successfully", user: deletedUser });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err });
    }
  });


  app.put("/updateUser/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = req.body;
  
      // Set default values if fields are missing
      const updatedData = {
        email: updateData.email || "default@example.com",
        name: updateData.name || "Default Name",
        // Add more fields as needed
      };
  
      const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });
      if (updatedUser) {
        res.json({ message: "User updated successfully", user: updatedUser });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err });
    }
  });
  
  
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
