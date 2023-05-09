const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}

Role.init({
  label: {
    type: Datatypes.STRING,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "role"
});

module.exports = Role;