const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'dockerdes2'
};

const mysql = require('mysql2')

app.get('/', (req, res) => {

    const connection = mysql.createConnection(config)

    var sql = "insert into people(nome) values ('Jean')"
    connection.query(sql)

    var buscaNomes = new Promise((resolve, reject) => {
        var retorno = ''
        var sqlQuery = "select * from people"

        connection.query(sqlQuery, (err, rows) => {
            if (err) {
                retorno = ''
                console.log("Ocorreu erro ao buscar lista de nomes")
            } else {
                rows.forEach((reg, ind) => {
                    console.log("lista: " + reg["nome"] + " - " + reg["id"])
                    retorno = retorno + "ID: " + reg["id"] + " Nome: " + reg["nome"] + "<br>"
                })
            }
            resolve(retorno)
        })

    })

    buscaNomes.then((retorno) => {
            res.send('<h1>Full Cycle Rocks!</h1>\n<body>' + retorno + "</body>\n")
            console.log("Conseguiu enviar o resultado")
        })
        .finally(() => {
            connection.end()
            console.log("Fechou a Conexão")
        })

})

app.get('/healthcheck', (req, res) => {

    res.send('<h1>Aplicação Iniciada...</h1>\n')

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})