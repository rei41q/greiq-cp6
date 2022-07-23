const userRepo = require("./user.repo");

const getAllUsers = async () => {
  // logika bisnis
  return await userRepo.getAllUsers();
};

const createNewUser = async (username, password) => {
  const userExist = await userRepo.getUserByUsername(username);
  if (!userExist) {
    return await userRepo.createNewUser(username, password);
  } else {
    return "User is already exist";
  }
};

const deleteUser = async (userId) => {
  if (userId != 1) {
    return await userRepo.deleteUser(userId);
  } else {
    return "Delete is restricted for this user";
  }
};

const userService = {
  getAllUsers,
  createNewUser,
  deleteUser,
};

module.exports = userService;
