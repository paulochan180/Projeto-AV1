const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Metodos HTTP:
 * 
 * GET: buscar/listaruma informação de back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * /
 /** 
 * Tipos de parametros:
 * Query params: Parametros nomeados envados na rota após '?'(filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */



