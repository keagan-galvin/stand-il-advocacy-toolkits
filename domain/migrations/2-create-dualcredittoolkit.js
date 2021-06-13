"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dualCreditToolkits", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },      
      role: {
        type: Sequelize.STRING(255),
      },
      policyGoal: {
        type: Sequelize.STRING(255),
      },
      highSchoolTeacher: {
        type: Sequelize.STRING(10),
      },
      hasMastersDegree: {
        type: Sequelize.STRING(10),
      },
      hasSpecifiedDegree: {
        type: Sequelize.STRING(10),
      },
      teacherOptionToExplore: {
        type: Sequelize.STRING(10),
      },
      teachCTE: {
        type: Sequelize.STRING(10),
      },
      rcdts: {
        type: Sequelize.STRING(15),
      },
      allies: {
        type: Sequelize.TEXT,
      },
      communityCollege: {
        type: Sequelize.STRING(500),
      },
      postedToSocialMedia: {
        type: Sequelize.BOOLEAN,
      },
      createdFacebookGroup: {
        type: Sequelize.BOOLEAN,
      },
      startedPetition: {
        type: Sequelize.BOOLEAN,
      },
      spokeToSchoolBoard: {
        type: Sequelize.BOOLEAN,
      },
      organizedLetterCampaign: {
        type: Sequelize.BOOLEAN,
      },
      wroteEditorial: {
        type: Sequelize.BOOLEAN,
      },
      accomplishedGoal: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("dualCreditToolkits");
  },
};
