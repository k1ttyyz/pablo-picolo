'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        { 
          nome: 'pablo', 
          idade: '37', 
          sobrenome: 'leonardo' 
        },{ 
          nome: 'lucas', 
          idade: '26', 
          sobrenome: 'crente' 
        },{ 
          nome: 'jair', 
          idade: '42', 
          sobrenome: 'vitor' 
        },{ 
          nome: 'lohanna', 
          idade: '12', 
          sobrenome: 'abacate' 
        },{ 
          nome: 'arabe', 
          idade: '12', 
          sobrenome: 'jaus' 
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('pessoas', null, {});
  }
};
