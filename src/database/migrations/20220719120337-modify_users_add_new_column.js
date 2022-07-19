'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await Promise.all([queryInterface.addColumn("Users","is_active",{
      type: Sequelize.BOOLEAN,
    })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     * 
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      queryInterface.removeColumn("Users","is_active")]);
  }
};
