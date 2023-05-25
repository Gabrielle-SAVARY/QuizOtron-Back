/**
 * @swagger
 * components:
 *  schemas:
 *    Question:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        question:
 *          type: string
 *        quiz_id:
 *          type: integer
 *      example:
 *        id: 1
 *        question: "Quelle est la couleur du cheval blanc d'Henri IV ?"
 *        quiz_id: 1
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