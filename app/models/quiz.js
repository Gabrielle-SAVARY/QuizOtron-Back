/**
 * @swagger
 * components:
 *   schemas:
 *     Quiz:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         thumbnail:
 *           type: string
 *         level_id:
 *           type: integer
 *         user_id:
 *           type: integer
 */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Quiz extends Model {}

Quiz.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "quiz"
});

module.exports = Quiz;