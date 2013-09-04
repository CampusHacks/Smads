
var rest = {};

var mongoose = require('mongoose');

var Ad = mongoose.model('Ad');

rest.list = function (req, res, next) {
	Ad.list(function (err, ads){
		
		res.send({
			err: err,
			ads: ads
		});

		next();

	});
};


rest.create = function (req, res, next) {

	Ad.create(req.body.data, function (err, ad){

		res.send({
			err: err,
			ad: ad
		});

		next();

	});

};


rest.update = function (req, res, next) {

	Ad.update(req.body.id, req.body.data, function (err){

		res.send({err: err});
		next();
	});

};


rest.remove = function (req, res, next) {

	Ad.remove(req.body.id, function (err){
		res.send({err: err});
	});

};


module.exports = rest;