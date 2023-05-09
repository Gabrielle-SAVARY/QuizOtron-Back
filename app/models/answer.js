const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Answer extends Model {}

Answer.init({
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "answer"
});

module.exports = Answer;
