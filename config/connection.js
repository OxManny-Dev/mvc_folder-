const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  'mvc_todos',
  'root',
  'password',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);


module.exports = sequelize;