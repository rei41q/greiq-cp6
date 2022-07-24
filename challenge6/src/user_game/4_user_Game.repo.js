    const { User_game } = require("../database/models");
    const { Op } = require("sequelize");
    // cari semua data pada table User_game

    const getAllUser_games = async () => {
      return await User_game.findAll({
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["username", "ASC"],
        ],
      });
    };

    const getuser_gameByQuery = async (q) => {
      return await User_game.findAll({
        where: {
          username: {
            [Op.substring]: q,
          },
        },
      });
    };
    // bikin User_game baru
    const createNewUser_game = async ({username,password}) => {
      return await User_game.create({
        username:username,
        password:password
      });
    };

    // cari User_game berdasar User_game_namenya
    const getUser_ByUser_game_name = async (username) => {
      return await User_game.findOne({
        attributes: ['username'],
        where: { username: username },
      })};

    const cekDataId = async (id) => {
      return await User_game.findAll({
        where: {
          id: id,
        },
      });
    };

    const updateUser_game = async ({
      id,
      username,
      password
    }) => {
      return await User_game.update(
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

    const deleteRepoUser_game = async (id) => {
      return await User_game.destroy({
        where: {
          id: id
        },
      });
    };

    const User_gameRepo = {
      getAllUser_games,
      getuser_gameByQuery,
      createNewUser_game,
      getUser_ByUser_game_name,
      updateUser_game,
      deleteRepoUser_game,
      cekDataId,
    };

    module.exports = User_gameRepo;
