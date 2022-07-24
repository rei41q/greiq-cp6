"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Vitamin C1000",

        deskripsi: "Meningkatkan kekebalan tubuh",

        stok: 5,

        tersedia: true,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
      {
        product_name: "Vitamin C2000",

        deskripsi: "Meningkatkan..",

        stok: 2,

        tersedia: true,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
      {
        product_name: "Frisian Flag",

        deskripsi: "Meningkatkan..",

        stok: 0,

        tersedia: false,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
      {
        product_name: "Milo",

        deskripsi: "Meningkatkan..",

        stok: 11,

        tersedia: true,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
      {
        product_name: "Pulpy",

        deskripsi: "Meningkatkan..",

        stok: 0,

        tersedia: false,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
      {
        product_name: "Torabika Cappuccino",

        deskripsi: "Meningkatkan..",

        stok: 13,

        tersedia: true,

        createdAt: new Date(),
      
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
