const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Permissao_usuario = sequelize.define('permissao_usuario', 
{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey :true
    },

    ag_administrador:
    {
        type:DataTypes.STRING,
        requerid: true
    },

    })
module.exports = Permissao_usuario;


