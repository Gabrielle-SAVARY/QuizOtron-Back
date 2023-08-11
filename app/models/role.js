const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}

Role.init({
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "role"
});

module.exports = Role;