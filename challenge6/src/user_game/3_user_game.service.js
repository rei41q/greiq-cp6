    const User_gameRepo = require("./4_user_Game.repo");
    const User_GameRepo = require("./4_user_Game.repo");
    const dataNull = "";

          // logika bisnis

    const getAllUser_Games = async (q) => {

      if (q) {
        const adaQuery = await User_GameRepo.getuser_gameByQuery(q);
        if (adaQuery != dataNull) return await User_GameRepo.getuser_gameByQuery(q);
        else return "User_Game tidak ada";
      } else {
        return await User_GameRepo.getAllUser_games();
      }
    };

    const createNewUser_Game = async ({ username, password }) => {
      const User_GameExist = await User_GameRepo.getUser_ByUser_game_name(username);
      if (!User_GameExist && username!=dataNull) {
        await User_GameRepo.createNewUser_game({ username, password });
        return "Berhasil Membuat User_Game";
      } else if(username==dataNull){
        return "Username tidak boleh kosong";
      } else{
        return "Maaf nama User_Game sudah ada";
      }
    };

    const updateUser_Game = async ({ id, username, password }) => {
      const User_GameExist = await User_GameRepo.getUser_ByUser_game_name(username);
      if (!User_GameExist) {
        await User_gameRepo.updateUser_game({
          id,
          username,
          password,
        });
        return "Berhasil Update User_Game";
      } else {
        const cekDataId = await User_GameRepo.cekDataId(id);
        console.log(cekDataId);
        if (cekDataId == dataNull) {
          return "Maaf User_Game yg ingin diupdate tidak tersedia";
        } else return "Maaf Nama User_Game sudah ada";
      }
    };

    const deleteDataUser_Game = async (id) => {
      if (id > 1) {
        const berhasil_hapus = await User_GameRepo.deleteRepoUser_game(id);
        if (berhasil_hapus) return "User_Game berhasil dihapus";
        else return "User_Game memang tidak ada";
      } else {
        return "Tidak dapat menghapus super user";
      }
    };

    const User_Gameservice = {
      getAllUser_Games,
      createNewUser_Game,
      updateUser_Game,
      deleteDataUser_Game,
    };

    module.exports = User_Gameservice;
