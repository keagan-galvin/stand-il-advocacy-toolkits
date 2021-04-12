"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      email: {
        type: Sequelize.STRING(255),
      },
      firstName: {
        type: Sequelize.STRING(100),
      },
      lastName: {
        type: Sequelize.STRING(100),
      },
      phone: {
        type: Sequelize.STRING(12),
      },
      city: {
        type: Sequelize.STRING(100),
      },
      state: {
        type: Sequelize.STRING(2),
      },
      zip: {
        type: Sequelize.STRING(10),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
