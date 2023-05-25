/**
 * @swagger
 * components:
 *  schemas:
 *    Role:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        label:
 *          type: string
 *     example:
 *        id: 2
 *        label: "admin"
 */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}

Role.init({
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "role"
});

module.exports = Role;