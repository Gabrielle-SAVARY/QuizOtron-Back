const { Datatypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
  pseudo: {
    type: Datatypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstname: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  global_score: {
    type: Datatypes.INTEGER,
  }
},{
  sequelize,
  tableName: "user"
});

module.exports = User;