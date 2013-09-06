var rest = {};

var mongoose = require('mongoose');

var Ad = mongoose.model('Ad');
var Client = mongoose.model('Client');

rest.list = function (req, res) {
	Ad.list(function (err, ads){
		res.send({
			err: err,
			ads: ads
		});
	});
};

rest.create = function (req, res) {
	if(req.body.data !== undefined){
		console.log(JSON.parse(req.body.data));
		Ad.create(JSON.parse(req.body.data), function (err, ad){
			res.send({
				err: err,
				ad: ad
			});
		});
	} else{
		res.send('Body data is undefined, here is your request object: '+ JSON.stringify(req.body));
	}
};

rest.update = function (req, res) {
	if(req.body.data !== undefined && req.body.id !== undefined){
		Ad.update(req.body.id, JSON.parse(req.body.data), function (err, data){
			res.send({
				err: err,
				data: data
			});
		});
	} else{
		res.send('Body data and id is undefined, here is your request object: '+ JSON.stringify(req.body));
	}
};

rest.remove = function (req, res) {
	if(req.body.data !== undefined && req.body.id !== undefined){
		Ad.remove(req.body.id, function (err){
			res.send({
				err: err
			});
		});
	} else{
		res.send('Body id is undefined, here is your request object: '+ JSON.stringify(req.body));
	}
};

rest.listClient = function (req, res){
	Client.list(function (err, clients){
		res.send({err: err, clients: clients});
	});
};

module.exports = rest;