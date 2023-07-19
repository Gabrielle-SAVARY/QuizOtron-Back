/**
 * Une Question
 * @typedef {object} Question
 * @property {integer} id - Identifiant unique
 * @property {string} question - La question
 * @property {integer} quiz_id - L'identifiant du quiz
 * @property {array<Answer>} answers - Les réponses
 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Question extends Model {}

Question.init({
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},{
  sequelize,
  tableName: "question"
});

module.exports = Question;