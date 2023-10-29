const routers = require('express')
const express = require('express') //BIBLIOTECA
const conn = require('./config/db') //CONEXÃO COM DB
const app = express()

app.use(express.json())

//EXPORTANDO MODELLS

const Cadastro_agencia = require('./models/cadastro_agencia')
const Cadastro_equipamento = require('./models/cadastro_equipamento')
const Cadastro_fornecedor = require('./models/cadastro_fornecedor')
const Cadastro_usuario = require('./models/cadastro_usuario')
const Cargo_usuario = require('./models/cargo_usuario')
const Destino_equipamento = require('./models/destino_equipamento')
const Historico_fornecedor = require('./models/historico_fornecedor')
const Permissao_usuario = require('./models/permissao_usuario')


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
