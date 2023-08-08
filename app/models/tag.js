
// /**
//  * Un tag
//  * @typedef {object} Tag - Un tag
//  * @property {integer} id - L'identifiant du tag
//  * @property {string} name - Le nom du tag
//  */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "tag"
});

module.exports = Tag;