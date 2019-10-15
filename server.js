const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o Banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qbmrb.mongodb.net/nodeapi?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)