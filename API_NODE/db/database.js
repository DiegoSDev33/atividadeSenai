const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', 'Admin123', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
