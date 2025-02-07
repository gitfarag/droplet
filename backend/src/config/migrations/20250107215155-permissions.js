'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  await queryInterface.createTable('Permissions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      },
    },
    route_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysRoutes',
        key: 'id'
      }
    },
    can_create: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    can_read: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    can_update: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    can_delete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(Date.now())
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  }  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Permissions')
  }
};
