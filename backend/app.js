// Imports

	var express = require('express');
	var model = require('./model');
	mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/smads');

	mongoose.model('Ad', model.ad);
	//mongoose.model('Client', model.client);

// Lib modules

	var rest = require('./lib/rest');

// Inicializations

	var app = express();

// APP ROUTES

	app.get('/ad', rest.listAds);

	app.post('/ad', rest.createAd);

	app.put('/ad', rest.updateAd);

	app.del('/ad', rest.deleteAd);

	app.listen(8080);