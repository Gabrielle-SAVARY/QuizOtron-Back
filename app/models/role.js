/**
 * Un Role
 * @typedef {object} Role
 * @property {integer} Id Identifiant du role
 * @property {string} label Label du role
 * @example
 * {
 * id: 2,
 * label: "admin"
 * }
 */
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