/**
 * un level
 * @typedef {object} Level
 * @property {integer} id - id du level
 * @property {string} name - nom du level
 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    }
  },{
    sequelize,
    tableName: "level"
});

module.exports = Level;