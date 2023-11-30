const Sequelize = require('sequelize');
const config = require('./databaseConfig');

const sequelize = new Sequelize(config);

module.exports = sequelize;