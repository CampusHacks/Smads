
var mongoose = require('mongoose');
var async = require('async');

var adSchema = new mongoose.Schema({

	url: String,
	
	temperature: {
		min: Number,
		max: Number
	},

	time: {
		start: Date,
		end: Date
	},

	humidity: {
		min: Number,
		max: Number
	},

	light: {
		min: Number,
		max: Number
	},

	client_id: String
});

adSchema.statics.create = function (data, callback) {
	var insert = new this();

	async.map(Object.keys(data), function (key, cb){

		insert[key] = data[key];

	}, function (err){
	
		insert.save(callback)
	
	});
};

adSchema.statics.delete = function (id, callback){

	this.findOne({_id: id}).remove().exec(callback);

};

adSchema.statics.update = function (){

};

adSchema.statics.list = function (callback){

	this.findAll().exec(callback);

};

module.exports = exports = adSchema;