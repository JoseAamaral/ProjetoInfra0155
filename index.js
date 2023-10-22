const routers = require('express')
const express = require('express') //Biblioteca Node
const conn = require('./config/db') //Conexão DB
const app = express()
app.use(express.json())

//IMPORTANDO MODELLS
const Agencia = require('./models/agencia')
const Cadastro_agencia = require('./models/cadastro_agencia')
const Cadastro_equipamento = require('./models/cadastro_equipamento')
const Cadastro_fornecedor = require('./models/cadastro_fornecedor')
const Cadastro_usuario = require('./models/cadastro_usuario')
const Equipamento = require('./models/equipamento')
const Usuario = require('./models/usuario')

app.use('/', routers)

conn.sync
    ({
        force: true
    })
        .then(()=>
    {
        app.listen(5433)
        console.log('App Online!!')
    })
