'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'John Doe'},
        {nome: 'kethiney do grau'},
        {nome: 'avocados billie'},
        {nome: 'Pablo lindo'},
        {nome: 'Maria best'}

      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
