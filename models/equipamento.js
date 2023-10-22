const {DataTypes} = require('sequelize');
const database = require ('../config/db');
const sequelize = require('../config/db');

const Equipamento = sequelize.define('equipamento', 
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

    quantidade: 
    {
    type:DataTypes.INTEGER,
    },

})

  module.exports = Equipamento;
