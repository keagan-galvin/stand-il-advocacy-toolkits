"use strict";
const { Model } = require("sequelize");

const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class DualCreditToolkit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  DualCreditToolkit.init(
    {
      userId: DataTypes.UUID,
      role: DataTypes.STRING(255),
      policyGoal: DataTypes.STRING(255),
      highSchoolTeacher: DataTypes.STRING(10),
      hasMastersDegree: DataTypes.STRING(10),
      hasSpecifiedDegree: DataTypes.STRING(10),
      teacherOptionToExplore: DataTypes.STRING(255),
      teachCTE: DataTypes.STRING(10),
      rcdts: DataTypes.STRING(15),
      allies: DataTypes.TEXT,
      communityCollege: DataTypes.STRING(500),
      postedToSocialMedia: DataTypes.BOOLEAN,
      createdFacebookGroup: DataTypes.BOOLEAN,
      startedPetition: DataTypes.BOOLEAN,
      spokeToSchoolBoard: DataTypes.BOOLEAN,
      organizedLetterCampaign: DataTypes.BOOLEAN,
      wroteEditorial: DataTypes.BOOLEAN,
      accomplishedGoal: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "DualCreditToolkit",
    }
  );
  DualCreditToolkit.beforeCreate((toolkit, _) => {
    return toolkit.id = uuid();
  });
  return DualCreditToolkit;
};
