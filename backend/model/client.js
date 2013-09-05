
var mongoose = require('mongoose');
var async = require('async');
var adSchema = require('')

var clientSchema = new mongoose.Schema({

	name: String,
	fid: String,
	ip: String


});

clientSchema.statics.list = function (callback){
	this.find({}).exec(function(err, data){
		adSchema.list(function(er, ads){

		})

	});

};

module.exports = exports = clientSchema;

"""
[

	client: {
		name ...
		ads: [
			{},
			{},
			{}
		]
	}

]