// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Chamar a função express
const app = express();

const cors = require('cors');

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

app.use(cors());
// Testar conexão com banco de dados
// const db = require("./db/models");

// Incluir as CONTROLLERS
const tipo_carnes = require("./controllers/tipo_carnes");

const bebidas = require("./controllers/bebidas");

// Criar as rotas
app.use('/', tipo_carnes);
app.use('/', bebidas);



// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});




