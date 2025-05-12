const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
})

app.get('/sobre', (req, res) => {
    res.send('Bem-vindo à pagina sobre!');
})

app.get('/usuario', (req, res) => {
    res.send('vitor');
})

app.post('/usuario', (req, res) => {
    const nome = req.body.nome
    res.send("Usuário " + nome + " criado com susseso")
})

const curso = ('Programador beck-end')

app.get('/senai', (req, res) => {
    res.send( curso );
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
