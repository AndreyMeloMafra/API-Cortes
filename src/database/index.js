const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Register = require('../model/Register');

const connection = new Sequelize(dbConfig);

Register.init(connection);

module.exports = connection;
