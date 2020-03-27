const expre = require('express');
//const crypto = require('crypto');
const ongControle = require('./controllers/ongController');
const incidenteControle = require('./controllers/incidentesController');
const incidentePorOng = require('./controllers/userController');
const session = require('./controllers/sessionController');

const routes = expre.Router();

routes.post('/sessions',session.create);

routes.post('/ongs', ongControle.criar);
//routes.post('/ongs', async(request, response) => {});
routes.get('/ongs', ongControle.listar); 

routes.post('/incidentes', incidenteControle.criar);
routes.get('/incidentes', incidenteControle.listar);
routes.delete('/incidentes/:id', incidenteControle.deleta);
routes.get('/incidPrOng', incidentePorOng.consUser);
module.exports = routes;