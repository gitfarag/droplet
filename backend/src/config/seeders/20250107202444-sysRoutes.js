'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('SysRoutes', [
      {
        route: '/users',
        name: 'Users',
      },
      {
        route: '/roles',
        name: 'Roles',
      },
      {
        route: '/permissions',
        name: 'Permissions',
      },
      {
        route: '/routes',
        name: 'Routes',
      },
      {
        route: '/addresses',
        name: 'Adresses',
      },
      {
        route: '/agencies',
        name: 'Agencies',
      },
      {
        route: '/api-key',
        name: 'ApiKeys',
      },
      {
        route: '/cities',
        name: 'Cities',
      },
      {
        route: '/governments',
        name: 'Goverments',
      },
      {
        route: '/translated-names',
        name: 'Translations',
      },
      {
        route: '/upload',
        name: 'Upload',
      },
      {
        route: '/mailer',
        name: 'Mailer',
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
    await queryInterface.bulkDelete('SysRoutes', null, {});
  },
};
