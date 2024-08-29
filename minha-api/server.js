const express = require('express')
const app = express()
const porta = 80 

app.get('/', (req, res) =>{

    const rotaPadrao =
    {
        nome_rota: '/',
        codigo_status: '200 OK',
        metodo_http: 'GET',
        
    }

    res.status(200)
    res.json(rotaPadrao)
})

app.listen(porta,() =>{
    console.log(`Servidor rodando na porta ${porta}`)
})