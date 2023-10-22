const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')


const Cadastro_agencia = sequelize.define('cadastro_agencia', 
{
    //INFORMAÇÕES PARA CADASTRO DE AGÊNCIAS
    id_agencia: 
    {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    nome: 
    {
      type: DataTypes.STRING,
      required: true,
    },

    contato: 
    {
      type: DataTypes.INTEGER,
      required: true
    },

    cnpj: 
    {
      type: DataTypes.INTEGER,
      required: true  
    },  
        
    iplocal: 
    {
      type:DataTypes.INTEGER,
      required: true
    },

    tipo_monitoramento:
    {
      type:DataTypes.BOOLEAN,
      required: true
    },
      
    //ENDEREÇOS DAS AGÊNCIAS   

    cidade: 
    {
      type:DataTypes.STRING,
      required: true
    },  

    bairro: 
    {
      type:DataTypes.STRING,
      required: true
    },  
  
    rua:  
    {
      type:DataTypes.STRING,
      required: true
    },
    
    cep: 
    {
      type: DataTypes.INTEGER,
      required: true
    },

    numero_predio: 
    {
      type: DataTypes.INTEGER,
      required: true
    },
})  

    module.exports = Cadastro_agencia;