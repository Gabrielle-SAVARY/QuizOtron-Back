const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class Question extends Model {}

Question.init({
  question: {
    type: Datatypes.TEXT,
    allowNull: false,
  },
},{
  sequelize,
  tableName: "question"
});

module.exports = Question;