const Cadastro_agencia = require('../models/cadastro_agencia')

module.exports = class Cadastro_agenciaController
{
    static createTask(req, res)
    {
        res.render('tasks/create') 
    }
}