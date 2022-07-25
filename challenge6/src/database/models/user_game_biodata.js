'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User_game_biodata.belongsTo(models.User_game);
    }
  }
  User_game_biodata.init({
    email: DataTypes.STRING(50),
    address: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_biodata',
  });
  return User_game_biodata;
};