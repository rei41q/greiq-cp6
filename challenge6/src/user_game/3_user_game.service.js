    const User_GameRepo = require("./4_user_Game.repo");
    const dataNull = "";

    const getAllUser_Games = async (q) => {
      // logika bisnis
      if (q) {
        const adaQuery = await User_GameRepo.getUser_GameByQuery(q);
        if (adaQuery != dataNull) return await User_GameRepo.getUser_GameByQuery(q);
        else return "User_Game tidak ada";
      } else {
        return await User_GameRepo.getAllUser_games();
      }
    };

    const createNewUser_Game = async ({
      username,
      password
    }) => {
      const User_GameExist = await User_GameRepo.getUser_GameByUser_Game_name(User_Game_name);
      if (!User_GameExist) {
        await User_GameRepo.createNewUser_Game({username,password});
        return "Berhasil Membuat User_Game";
      } else {
        return "Maaf nama User_Game sudah ada";
      }
    };

    const updateUser_Game = async ({
      id,
      username,
      password
    }) => {
      const User_GameExist = await User_GameRepo.getUser_GameByUser_Game_name(User_Game_name);
      if (!User_GameExist) {
        await User_GameRepo.updateUser_Game({
          id,
          username,
          password
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
    // const deleteUser_Game = async (User_GameId) => {
    //   if (User_GameId != 1) {
    //     return await User_GameRepo.deleteUser_Game(User_GameId);
    //   } else {
    //     return "Delete is restricted for this User_Game";
    //   }
    // };

    const deleteDataUser_Game = async (id) => {
      if (id > 1) {
        const berhasil_hapus = await User_GameRepo.deleteRepoUser_Game(id);
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
      // deleteUser_Game,
    };

    module.exports = User_Gameservice;
