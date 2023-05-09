const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class Answer extends Model {}

Answer.init({
  description: {
    type: Datatypes.TEXT,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "answer"
});

module.exports = Answer;