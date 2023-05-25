/**
 * @swagger
 * components:
 *  schemas:
 *   Answer:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      answer:
 *        type: string
 *      is_valid:
 *        type: boolean
 *      question_id:
 *        type: integer
 *    example:
 *      id: 1
 *      answer: "La réponse est 1"
 *      is_valid: true
 *      question_id: 1
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
