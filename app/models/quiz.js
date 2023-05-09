const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class Quiz extends Model {}

Quiz.init({
  title: {
    type: Datatypes.TEXT,
    allowNull: false,
  },
  description: {
    type: Datatypes.TEXT,
    allowNull: false,
  },
  thumbnail: {
    type: Datatypes.TEXT,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "quiz"
});

module.exports = Quiz;