'use strict';

require('dotenv').config();

// lzoom el shoghl
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT); // Use the SALT_ROUNDS from the .env file
const defaultPassword = process.env.DEFAULT_PASSWORD;
const userName = process.env.DEFAULT_USERNAME;

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
    const hashedPassword = await bcrypt.hash(defaultPassword, saltRounds);

    // Insert demo users with hashed passwords
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          role_id: 1,
          fName: 'First',
          lName: 'User',
          userName: userName,
          email: 'tech@ahmedfarag.info',
          password: hashedPassword, // Store the hashed password
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {
      userName: userName
    }, {});
  },
};
