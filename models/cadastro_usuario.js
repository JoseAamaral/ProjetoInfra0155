const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');  

const Cadastro_usuario = sequelize.define('cadastro_usuario', 
{
    id: 
    {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    nome: 
    {
      type: DataTypes.STRING, 
      required: true
    },        

    ldap: 
    {
      type: DataTypes.STRING,
      required: true
    },

    senha:
    {
      type:DataTypes.STRING,
      required: true
    },

    perfil_adm: 
    {
      type: DataTypes.BOOLEAN,
      required: true
    },

    email: 
    {
      type: DataTypes.STRING,
      required: true
    },

    contato: 
    {
      type: DataTypes.INTEGER,
      required: true
    },            
})

module.exports = Cadastro_usuario;