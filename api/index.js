const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteadorUsuario = require('./rotas/usuarios')
app.use('/api/usuarios', roteadorUsuario)

app.listen(config.get('api.porta'), () => console.log('API está funcionando'))