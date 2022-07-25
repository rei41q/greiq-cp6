'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game.hasOne(models.User_game_biodata && models.User_game_history, { 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: {
          type: DataTypes.UUID,
          allowNull: false
        }
      });
    }
  }
  User_game.init({
    username: DataTypes.STRING(50),
    password: DataTypes.STRING(50),
  }, {
    sequelize,
    modelName: 'User_game',
  });
  return User_game;
};