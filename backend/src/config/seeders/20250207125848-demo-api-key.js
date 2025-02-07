'use strict';

const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT); // Use the SALT_ROUNDS from the .env file
const defaultKey = process.env.DEFAULT_API_KEY;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const token = await bcrypt.hash(defaultKey, saltRounds)
    await queryInterface.bulkInsert('ApiKeys', [
      {
        key: defaultKey,
        token: token,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ApiKeys', null, {});
  }
};
