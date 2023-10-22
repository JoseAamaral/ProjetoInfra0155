const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Cadastro_equipamento = sequelize.define('cadastro_equipamento', 
{
    id: 
    {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    nome_equipamento: 
    {
      type:DataTypes.STRING,
      required: true
    },

    especificacao: 
    {
      type:DataTypes.STRING,
      required: true        
    },

    numero_patrimonio: 
    {
      type:DataTypes.INTEGER,
      required: true  
    },

    custo:
    {
      type:DataTypes.FLOAT
    },
}) 

module.exports = Cadastro_equipamento;