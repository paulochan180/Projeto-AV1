const express = require('express');
const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const routes = express.Router();

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);
routes.post('/incidents', incidentcontroller.create);

module.exports = routes;
