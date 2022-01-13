const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'usuarios',
    timestamp: true,
    createdAt: 'dtCriacao',
    updatedAt: 'dtAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('usuario', colunas, opcoes)