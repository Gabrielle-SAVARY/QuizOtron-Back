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