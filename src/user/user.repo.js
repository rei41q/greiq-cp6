const { User } = require("../database/models");
// cari semua user
const getAllUsers = async () => {
  return await User.findAll();
};

// bikin user baru
const createNewUser = async (username, password) => {
  return await User.create({
    username: username,
    password: password,
  });
};

// cari user berdasar usernamenya
const getUserByUsername = async (username) => {
  return await User.findOne({
    where: { username: username },
  });
};

// delete user dari database
const deleteUser = async (userId) => {
  return await User.destroy({
    where: { id: userId },
  });
};

const userRepo = {
  getAllUsers,
  createNewUser,
  getUserByUsername,
  deleteUser
};

module.exports = userRepo;
