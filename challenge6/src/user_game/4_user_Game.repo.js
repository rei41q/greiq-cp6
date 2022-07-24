    const { User_Game } = require("../database/models");
    const { Op, where } = require("sequelize");
    // cari semua User_Game

    const getAllUser_Games = async () => {
      return await User_Game.findAll({
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["User_Game_name", "ASC"],
        ],
      });
    };

    const getUser_GameByQuery = async (q) => {
      return await User_Game.findAll({
        where: {
          User_Game_name: {
            [Op.substring]: q,
          },
        },
      });
    };
    // bikin User_Game baru
    const createNewUser_Game = async ({username,password}) => {
      return await User_Game.create({
        username:username,
        password:password
      });
    };

    // cari User_Game berdasar User_Game_namenya
    const getUser_GameByUser_Game_name = async (username) => {
      return await username.findOne({
        where: { username: username },
      });
    };

    const cekDataId = async (id) => {
      return await username.findAll({
        where: {
          id: id,
        },
      });
    };

    const updateUser_Game = async ({
      id,
      username,
      password
    }) => {
      return await User_Game.update(
        {
          username,
          password
        },
        {
          where: {
            id: id,
          },
        }
      );
    };

    // // delete User_Game dari database
    // const deleteUser_Game = async (User_GameId) => {
    //   return await User_Game.destroy({
    //     where: { id: User_GameId },
    //   });
    // };

    const deleteRepoUser_Game = async (id) => {
      return await username.destroy({
        where: {
          id: id
        },
      });
    };

    const User_GameRepo = {
      getAllUser_Games,
      getUser_GameByQuery,
      createNewUser_Game,
      getUser_GameByUser_Game_name,
      updateUser_Game,
      deleteRepoUser_Game,
      cekDataId,
    };

    module.exports = User_GameRepo;
