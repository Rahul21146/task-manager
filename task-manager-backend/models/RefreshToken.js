const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const RefreshToken = sequelize.define("RefreshToken", {
  token: DataTypes.TEXT
});

User.hasMany(RefreshToken);
RefreshToken.belongsTo(User);

module.exports = RefreshToken;
