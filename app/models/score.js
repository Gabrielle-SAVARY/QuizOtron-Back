/**
 * @swagger
 * components:
 *  schemas:
 *    Score:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        quiz_score:
 *          type: integer
 *        user_id:
 *          type: integer
 *        quiz_id:
 *          type: integer
 *      example:
 *        id: 1
 *        quiz_score: 10
 *        user_id: 1
 *        quiz_id: 1
 */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Score extends Model {}

Score.init({
  quiz_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "score"
});

module.exports = Score;