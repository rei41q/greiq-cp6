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
     await queryInterface.bulkInsert("Products", [

      {
      
      product_name: "Vitamin C1000",
      
      deskripsi: "Meningkatkan kekebalan tubuh",
      
      stok: 5,
      
      tersedia:true,
      },
      {
      
        product_name: "Lemon tea",
        
        deskripsi: "Meningkatkan..",
        
        stok: 2,
        
        tersedia:true,
        },
        {
      
          product_name: "Frisian Flag",
          
          deskripsi: "Meningkatkan..",
          
          stok: 0,
          
          tersedia:false,
          },
          {
      
            product_name: "Milo",
            
            deskripsi: "Meningkatkan..",
            
            stok: 11,
            
            tersedia:true,
            },
            {
      
              product_name: "Pulpy",
              
              deskripsi: "Meningkatkan..",
              
              stok: 0,
              
              tersedia:false,
              },
              {
      
                product_name: "Torabika Cappuccino",
                
                deskripsi: "Meningkatkan..",
                
                stok: 13,
                
                tersedia:true,
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
     await queryInterface.bulkDelete('Products', null, {});
  }
};
