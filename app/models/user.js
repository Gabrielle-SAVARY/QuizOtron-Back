/**
 * Un User
 * @typedef {object} User Détails d'un utilisateur
 * @property {integer} id Identifiant de l'utilisateur
 * @property {string} pseudo Pseudo de l'utilisateur
 * @property {string} email Email de l'utilisateur
 * @property {string} firstname Prénom de l'utilisateur
 * @property {string} lastname Nom de l'utilisateur
 * @property {string} password Mot de passe de l'utilisateur
 * @property {integer} global_score Score global de l'utilisateur
 * @property {Role} role Role de l'utilisateur
 */

/**
 * Un auteur
 * @typedef {object} Author
 * @property {string} pseudo - Pseudo
 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  global_score: {
    type: DataTypes.INTEGER,
  }
},{
  defaultScope: {
    attributes: { 
      exclude: ["password"]
    }
  },
  scopes: {
    withPassword: {
      attributes: {}
    }
  },
  sequelize,
  tableName: "user"
});

module.exports = User;