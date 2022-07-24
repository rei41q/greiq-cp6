    const express = require("express");
    const User_Game_Router = express.Router();
    const User_Game_Controler = require("./2_user_game.controller");


    User_Game_Router.use(express.json());

    // API to get all User_game
    // ---
    // BISA QUERY 1 User_game OR LIKE: ORDER BY User_game_NAME ASC 

    User_Game_Router.get("/user_game", User_Game_Controler.getAllUser_game); 

    // API to create new User_game
    // ---
    // ADA NOTIF REJECTED JIKA NAMA User_game SAMA DENGAN YG LAIN / USERNAME KOSONG

    User_Game_Router.post("/user_game", User_Game_Controler.createNewUser_game); 

    // API to update new User_game
    // ---
    //ADA NOTIF REJECTED JIKA NAMA User_game SAMA DENGAN YG LAIN

    User_Game_Router.put("/user_game/:id", User_Game_Controler.updateUser_game); 
    
    // API to delete User_game
    // ---
    // ADA NOTIF JIKA User_game MEMANG TIDAK ADA

    User_Game_Router.delete("/user_game/:id", User_Game_Controler.deleteUser_game); 

    module.exports = User_Game_Router;
