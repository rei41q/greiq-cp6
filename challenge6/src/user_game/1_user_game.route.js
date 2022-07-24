    const express = require("express");
    const User_Game_Router = express.Router();
    const User_Game_Controler = require("./2_user_game.controller");
    // API to get all User_games

    User_Game_Router.use(express.json());

    User_Game_Router.get("/user_game", User_Game_Controler.getAllUser_game); //GET ALL User_game, BISA QUERY 1 User_game OR LIKE: ORDER BY User_game_NAME ASC

    // API to create new User_games

    User_Game_Router.post("/user_game", User_Game_Controler.createNewUser_game); //BUAT User_game, ADA NOTIF JIKA NAMA User_game SUDAH ADA DENGAN YG LAIN

    User_Game_Router.put("/user_game/:id", User_Game_Controler.updateUser_game); //UPDATE User_game, ADA NOTIF JIKA NAMA User_game SUDAH ADA DENGAN YG LAIN

    // // API to delete User_games
    // User_Game_Router.delete("/User_games/:id", async (req, res) => {
    //   const { id } = req.params;
    //   const deleteUser_game = await User_gameservice.deleteUser_game(id);
    //   res.json(deleteUser_game);
    // });

    User_Game_Router.delete("/user_games/:id", User_Game_Controler.deleteUser_game); //DELETE User_game, ADA NOTIF JIKA User_game MEMANG TIDAK ADA

    module.exports = User_Game_Router;
