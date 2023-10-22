const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Cadastro_fornecedor = sequelize.define('cadastro_fornecedor', 
{
    id:    
    {
      type:DataTypes.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    razao_social: 
    {
      type:DataTypes.STRING,
      required: true
    },

    cnpj: 
    {
      type:DataTypes.INTEGER,
      required: true
    },

    contato: 
    {
      type:DataTypes.INTEGER,
      required: true
    },

    contato_alternativo: 
    {
      type:DataTypes.INTEGER,
    },

    email:
    {
      type:DataTypes.STRING,
      required: true
    },

    cep: 
    {
      type:DataTypes.INTEGER,
      required: true
    },

    endereco: 
    {
      type:DataTypes.STRING,
      required: true
    },

    numero_predio: 
    {
      type:DataTypes.INTEGER,
      required: true
    },

    
});  

module.exports = Cadastro_fornecedor;