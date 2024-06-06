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
// Criar as rotas

const tipo_carnes = require("./controllers/tipo_carnes");
app.use('/', tipo_carnes);

const acompanhamentos = require("./controllers/acompanhamentos");
app.use('/', acompanhamentos);

const bebidas = require("./controllers/bebidas");
app.use('/', bebidas);

const marmitas = require("./controllers/marmitas");
app.use('/', marmitas);

const clientes = require("./controllers/clientes");
app.use('/', clientes);

const marmita_acompanhamentos = require("./controllers/marmita_acompanhamentos");
app.use('/', marmita_acompanhamentos);

const pedidos = require("./controllers/pedidos");
app.use('/', pedidos);

const pedido_bebidas = require("./controllers/pedido_bebidas");
app.use('/', pedido_bebidas);

const pedido_marmitas = require("./controllers/pedido_marmitas");
app.use('/', pedido_marmitas);

const usuarios = require("./controllers/usuarios");
app.use('/', usuarios);

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});




