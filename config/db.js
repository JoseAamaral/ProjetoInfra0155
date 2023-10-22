const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('ProjetoInfra0155', 'postgres', 'D@$ilva_1174!', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433
})

module.exports = sequelize;