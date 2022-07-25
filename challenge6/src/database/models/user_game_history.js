'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User_game_history.belongsTo(models.User_game);
    }
  }
  User_game_history.init({
    list_Waktu: DataTypes.STRING(50),
    score: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_history',
  });
  return User_game_history;
};