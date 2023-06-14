/**
 * Un Score
 * @typedef {object} Score
 * @property {integer} id - L'identifiant du score
 * @property {integer} quiz_score - Le score obtenu par l'utilisateur
 * @property {User} user - L'identifiant de l'utilisateur
 * @property {Quiz} quiz_id - L'identifiant du quiz
 * @example
 * {
 * id: 1,
 * quiz_score: 10,
 * user_id: 1,
 * quiz_id: 1
 */

/**
 * Post un score
 * @typedef {object} PostScore
 * @property {integer} quiz_id - L'id du quiz joué
 * @property {integer} quiz_score - Le score obtenu par l'utilisateur
 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Score extends Model {}

Score.init({
  quiz_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
   user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }  
},{
  sequelize,
  tableName: "score",
});

module.exports = Score;