//arquivo sequelize.js para realização de conexão com banco postgres

const Sequelize = require('sequelize')//importa biblioteca já criada do sequelize
const ConfigDb = require('./db') //importa arquivo db com configurações do banco

const sequelize = new Sequelize(ConfigDb)

module.exports = sequelize 