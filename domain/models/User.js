"use strict";
const {
  Model
} = require("sequelize");

const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.DualCreditToolkit, {
        foreignKey: "userId",
      });
    }
  }
  User.init({
    email: DataTypes.STRING(255),
    firstName: DataTypes.STRING(100),
    lastName: DataTypes.STRING(100),
    phone: DataTypes.STRING(12),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(2),
    zip: DataTypes.STRING(10),
  }, {
    sequelize,
    modelName: "User",
  });
  User.beforeCreate((user, _) => {
    return user.id = uuid();
  });
  return User;
};