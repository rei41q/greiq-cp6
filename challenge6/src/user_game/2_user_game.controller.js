  const User_Game_Service = require("./3_user_game.service");
  
  const error400 = "Permintaan tidak valid, Silahkan Masukan value variable username dan password pada body raw JSON";
  const error500 = "Something went wrong. Please try again later"
  const error404 = "Id tidak ada"
  const errormessage = {error400,error500,error404}

  const getAllUser_game = async (req, res) => {
    try {
      const { q } = req.query;
    const User_Games = await User_Game_Service.getAllUser_Games(q);
    return res.status(200).json(User_Games);
    } catch (error) {
      return res.status(500).json(errormessage.error500);
    }
  };
  const getOneUser_game = async (req, res) =>{
    try {
      const {id} = req.params
      const cekSatuData = await User_Game_Service.getSatuData(id);
      return res.status(200).json(cekSatuData)
    } catch (error) {
      return res.status(404).json(errormessage.error404)
    }

  }
  const createNewUser_game = async (req, res) => {
    try {
      const { username, password } = req.body;
      const newUser_Game = await User_Game_Service.createNewUser_Game({
        username,
        password,
      });
      return res.status(200).json(newUser_Game);
    } catch (error) {
      res.status(400).json(errormessage.error400);
    }
  };

  const updateUser_game = async (req, res) => {
    try {
      const { username, password } = req.body;
      const { id } = req.params;
      const dataUser_Game = await User_Game_Service.updateUser_Game({
        id,
        username,
        password,
      });
      res.status(200).json(dataUser_Game);
    } catch (error) {
      
    return res.status(400).json(errormessage.error404 + " or " + errormessage.error400);
    }
   
  };
  const deleteUser_game = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser_GameId = await User_Game_Service.deleteDataUser_Game(id);
      return res.status(200).json(deleteUser_GameId);
    } catch (error) {
      return res.status(404).json(errormessage.error404)
    }
   
  };
  const FunctionUser_GameRouter = {
    getAllUser_game,
    getOneUser_game,
    createNewUser_game,
    updateUser_game,
    deleteUser_game,
  };

  module.exports = FunctionUser_GameRouter;
