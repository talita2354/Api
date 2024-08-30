const express = require('express')
const app = express()
const porta = 80 


app.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`);
  });

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

// Cria usuarios
app.post('/clientes/novo', (req, res) => {

    const response = [
        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }
    ]

    res.status(201)
    res.json(response)
})



  //atualizar cliente
  app.put('/clientes/update/cpfcnpj/12345678901', (req, res) => {

    const response = [
        {
            mensagem: 'dados atualizados com  sucesso',
            status: 200
        }
    ]

    res.status(200)
    res.json(response)
})




