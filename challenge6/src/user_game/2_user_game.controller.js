const User_Game_Service = require("./3_user_game.service");

const getAllUser_game = async (req, res) => {
  // try {
    const { q } = req.query;
    const User_Games = await User_Game_Service.getAllUser_Games(q);
    res.status(200).json(User_Games);
  // } catch (error) {
  //   res.status(500).json("Something went wrong. Please try again later");
  // }
};

const createNewUser_game = async(req, res) =>{
    const { username, password } = req.body;
    const newUser_Game = await User_Game_Service.createNewUser_Game({
      username,
      password,
    }
    );
    return res.status(200).json(newUser_Game);
}

const updateUser_game = async(req, res) =>{
    const {username,password} = req.body;
    const { id } = req.params;
    const dataUser_Game = await User_Game_Service.updateUser_Game({
      id,
      username,
      password
    });
    return res.status(200).json(dataUser_Game);
}
const deleteUser_game = async(req, res) =>{
      const  {id}  = req.params;
      const deleteUser_GameId = await User_Game_Service.deleteDataUser_Game(id);
      return res.status(200).json(deleteUser_GameId);
}
const FunctionUser_GameRouter = {
  getAllUser_game,
  createNewUser_game,
  updateUser_game,
  deleteUser_game
};

module.exports = FunctionUser_GameRouter
