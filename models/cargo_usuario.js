const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Cargo_usuario = sequelize.define('cargo_usuario', 
{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey :true
    },

    cargo:
    {
        type:DataTypes.STRING,
        requerid: true
    },
})
module.exports = Cargo_usuario;


