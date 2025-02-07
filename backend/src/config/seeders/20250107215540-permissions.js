'use strict';

/** @type {import('sequelize-cli').Migration} */
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
   await queryInterface.bulkInsert('Permissions', [
    {
      role_id: 1,
      route_id: 1,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 2,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 3,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 4,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 5,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 6,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 7,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 8,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 9,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 10,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 11,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
    },
    {
      role_id: 1,
      route_id: 12,
      can_create: true,
      can_read: true,
      can_update: true,
      can_delete: true,
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
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
