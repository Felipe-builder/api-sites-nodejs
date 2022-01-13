const modelos = [
    require('../rotas/usuarios/ModeloTabelaUsuario')
]

async function criarTabelas() {
    for(let i = 0; i < modelos.length; i++) {
        const modelo = modelos[i]
        await modelo
            .sync()
            .then(() => console.log('Tabela criada com sucesso'))
            .catch(console.log)
    }
}

criarTabelas()

// const ModeloTabela = require('../rotas/usuarios/ModeloTabelaUsuario')

// ModeloTabela
//     .sync()
//     .then(() => console.log('Tabela criada com sucesso'))
//     .catch(console.log)
