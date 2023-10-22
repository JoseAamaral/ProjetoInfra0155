
const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')


const Agencia = sequelize.define('agencia', 
{
    id: 
    {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    nome_agencia: 
    {
      type:DataTypes.STRING,
      required: true
    },

    numero_agencia: 
    {
      type:DataTypes.INTEGER,
      required: true
    },    
})

    module.exports = Agencia;