const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');  

const Usuario = sequelize.define('usuario', 
{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome:
    {
        type:DataTypes.STRING,
        required: true
    },

    senha:
    {
        type:DataTypes.STRING,
        required: true
    },

    ldap:
    {
        type:DataTypes.STRING,
        required: true        
    },

})

module.exports = Usuario;