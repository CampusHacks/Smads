var mongoose = require('mongoose');

var model = require('./model')

mongoose.connect('mongodb://localhost/smads');
mongoose.model('Ad', model.ad);
mongoose.model('Client', model.client);

var AdSchema = mongoose.model('Ad');
var ClientSchema = mongoose.model('Client');

ClientSchema.create({

	fid: 'as',
	ip: '0.0.0.0',
	name: Math.random()

}, function (err, client) {

	console.log(err);
	console.log(client);

	AdSchema.create({

		url: 'asxsadas',
		conditions: {
			temperature: {
				min: 5
			}
		},

		client_id: [client._id]

	}, function (err, ad){
		console.log(err);
		console.log(ad);
	});

});