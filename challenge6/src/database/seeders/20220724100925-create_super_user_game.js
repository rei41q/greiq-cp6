'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("User_games", [

      {
      
      username: "superuser",
      
      password: "iamsuperuser",
      
      createdAt: new Date(),
      
      updatedAt: new Date(),
      },
      {
      
        username: "Player 2",
        
        password: "Password2",
        
        createdAt: new Date(),
      
        updatedAt: new Date(),
        },
      
        {
      
          username: "Player 3",
          
          password: "Password3",

          createdAt: new Date(),
      
          updatedAt: new Date(),
          
          },
        

      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('User_games', null, {});
  }
};
