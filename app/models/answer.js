/**
 * Une réponse
 * @typedef {object} Answer
 * @property {integer} id - Identifiant unique
 * @property {string} answer - La réponse
 * @property {boolean} is_valid - La réponse est-elle valide ?
 * @property {integer} question_id - Identifiant de la question
 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Answer extends Model {}

Answer.init({
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_valid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "answer"
});

module.exports = Answer;
