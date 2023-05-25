/**
 * @swagger
 * components:
 *  schemas:
 *    Level:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *      example:
 *        id: 1
 *        name: "facile"
 */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    }
  },{
    sequelize,
    tableName: "level"
});

module.exports = Level;