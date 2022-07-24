const express = require("express");
const { getAllUsers } = require("./user.service");
const userRouter = express.Router();

// API to get all users
userRouter.get("/users", async (req, res) =>{
  const users = await getAllUsers();
  res.json(users);
});


// API to create new users
userRouter.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await userService.createNewUser(username, password);
  res.json(newUser);
});

// API to delete users
userRouter.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await userService.deleteUser(id);
  res.json(deleteUser);
});

module.exports = userRouter;
