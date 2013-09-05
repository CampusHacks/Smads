
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
	Ad.create(JSON.parse(req.body.data), function (err, ad){
		res.send({
			err: err,
			ad: ad
		});
	});
};


rest.update = function (req, res) {
	Ad.update(req.body.id, req.body.data, function (err){
		res.send({
			err: err
		});
	});
};


rest.remove = function (req, res) {
	Ad.remove(req.body.id, function (err){
		res.send({
			err: err
		});
	});
};

rest.listClient = function (req, res){
	Client.list(function (err, clients){
		console.log("ey"+clients);
		res.send({err: err, clients: clients});
	});
};

module.exports = rest;