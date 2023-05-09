const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class Level extends Model {}

Level.init({
  name: {
    type: Datatypes.STRING,
    allowNull: false,
    }
  },{
    sequelize,
    tableName: "level"
});

module.exports = Level;