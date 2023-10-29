const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Destino_equipamento = sequelize.define('destino_equipamento', 
{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey :true
    },

    status_equipamento:
    {
        type:DataTypes.STRING,
        requerid: true
    },

    destino_equipamento:
    {
        type:DataTypes.STRING,
        required: true,
    },

})
module.exports = Destino_equipamento;


