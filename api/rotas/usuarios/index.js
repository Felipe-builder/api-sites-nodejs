const roteador = require('express').Router()

roteador.get('/', (req, res) => {
    res.status(200)
    res.send(
        JSON.stringify("OK")
    )
})

module.exports = roteador
