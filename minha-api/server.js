const express = require('express');
const app = express();

// Simulação de uma base de dados de API Keys
const API_KEYS = {
  'valid-api-key-12345': 'User1',
  'valid-api-key-67890': 'User2'
};

// Middleware para verificar a API Key
function checkApiKey(req, res, next) {
  const apiKey = req.header('x-api-key'); // Obtém a API Key do cabeçalho da solicitação

  if (!apiKey || !API_KEYS[apiKey]) {
    return res.status(401).json({
      mensagem: 'acesso nao autorizado',
      cod_status: 401
    });
  }
  
  // Chave válida, pode prosseguir
  next();
}

// Endpoint protegido por autenticação com API Key
app.get('/', checkApiKey, (req, res) => {
  res.status(200).json({
    mensagem: 'acesso autorizado',
    cod_status: 200
  });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
