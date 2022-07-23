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
    await Promise.all([queryInterface.addColumn("Products","tersedia",{
      type: Sequelize.BOOLEAN,
    })
    ],
    [queryInterface.addColumn("Products","createdAt",{
        allowNull: false,
        type: Sequelize.DATE
    })
    ]
    [queryInterface.addColumn("Products","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE
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
      queryInterface.removeColumn("Products","tersedia")]);
  }
};
