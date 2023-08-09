// /**
//  * Quiz
//  * @typedef {object} Quiz
//  * @property {integer} id - Quiz id
//  * @property {string} title - Quiz title
//  * @property {string} description - Quiz description
//  * @property {string} thumbnail - Quiz thumbnail
//  * @property {integer} level_id - Quiz level id
//  * @property {integer} user_id - Quiz user id
//  * @property {Level} level - Quiz level name
//  * @property {Author} auteur - Quiz user id
//  * @property {array<Tag>} tags - Quiz tags
//  * @property {array<Question>} questions - Quiz questions
//  */
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