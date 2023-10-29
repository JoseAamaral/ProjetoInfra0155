const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Historico_fornecedor = sequelize.define('historico_fornecedor', 
{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey :true
    },

    produto_quantidade:
    {
        type:DataTypes.INTEGER,
        requerid: true
    },
})
module.exports = Historico_fornecedor;


