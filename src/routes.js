const express = require('express');
const routes = express.Router();
const IntegrationController = require('./controllers/IntegrationController');


// Route to integrate and save pipedrive and bling data
routes.post('/integration/deal', IntegrationController.index)

// Route to get integreted data
routes.get('/integration/list/deal', IntegrationController.get)

module.exports = routes;