    const User_GameRepo = require("./4_user_Game.repo");

  //---------------------------------  
  // const KetUser = "user tidak ada";
  // const KetPass = "password tidak boleh kosong "
  // const KetID = "Id tidak ada"
  // const errormessage = {KetUser,KetPass,KetID}
  //----------------------------------

    //FUNCTION CEK NULL OR WHITE SPACE
    
    const IsNullOrWhiteSpace = (value) => {

      if (value== null) return true;
  
      return value.replace(/\s/g, '',"").length == 0;
    }
    
  
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
    const getSatuData = async (id) =>{
      const cekAdaData = await User_GameRepo.cekDataId(id);
      if(cekAdaData){ return await User_GameRepo.cekDataId(id)}
      else {return error}
    }
    const createNewUser_Game = async ({ username, password }) => {
      const User_GameExist = await User_GameRepo.getUser_ByUser_game_name(username);
      
      if (!User_GameExist && IsNullOrWhiteSpace(username)!=true && IsNullOrWhiteSpace(password)!=true) {
        
        await User_GameRepo.createNewUser_game({ username, password });
        return "Berhasil Membuat User_Game";
      } else if(IsNullOrWhiteSpace(username)!=false || IsNullOrWhiteSpace(password)!=false ){
        return error;
      } else{
        return "Maaf nama User_Game sudah ada";
      }
    };
    
    const updateUser_Game = async ({
       id, username, password }) => {
      let UpdatePasswordsaja = false
      const cekId = await User_GameRepo.cekDataId(id);
        // console.log(cekId, "Username", IsNullOrWhiteSpace(username), " pass ", IsNullOrWhiteSpace(password))
      if (cekId && (IsNullOrWhiteSpace(username)==false || IsNullOrWhiteSpace(password)==false)) {
        const userExist = await User_GameRepo.getUser_ByUser_game_name(username);
        if(!userExist && IsNullOrWhiteSpace(password) ==false ){
  
          if(IsNullOrWhiteSpace(username) == true){

            const valueusername = await User_GameRepo.getSatuUsername(id);
            username = valueusername.username;
            UpdatePasswordsaja = true;

          }
        await User_GameRepo.updateUser_game({
          id,
          username,
          password,
        });
        if(UpdatePasswordsaja == true)
        return "Berhasil Update Passwordnya saja";
        else
        return "Berhasil diupdate ";
      }
      else{
        if(IsNullOrWhiteSpace(password)==true) return "Password tidak boleh kosong"
        else return "Maaf Nama User_Game sudah ada";
      }
      } else {
          return error;
        } 
    };

    const deleteDataUser_Game = async (id) => {
      if (id != 1) {
        const berhasil_hapus = await User_GameRepo.deleteRepoUser_game(id);
        if (berhasil_hapus) return "User_Game berhasil dihapus";
        else return error;
      } else {
        return "Tidak dapat menghapus super user";
      }
    };

    const User_Gameservice = {
      getAllUser_Games,
      createNewUser_Game,
      updateUser_Game,
      deleteDataUser_Game,
      getSatuData,
    };

    module.exports = User_Gameservice;
