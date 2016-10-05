require('dotenv').config();
const graph = require('fbgraph');

graph.setAccessToken(process.env.ACCESS_TOKEN);

const locationPage = require('./modules/locationPage.js');
const nearbyPlaces = require('./modules/nearbyPlaces.js');

nearbyPlaces('Restaurante', 'place', '-22.323403', '-49.065613', graph);