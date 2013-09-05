
var mongoose = require('mongoose');
var schema = mongoose.Schema
var ObjectId = schema.ObjectId
var async = require('async');

var adSchema = new schema({

	url: String,
	
	conditions: Object,

/*	temperature: {
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
	},*/

	client_id: ObjectId
});

adSchema.statics.create = function (data, callback) {
	var insert = new this();

	async.map(Object.keys(data), function (key, cb){

		insert[key] = data[key];

	}, function (err){
	
		insert.save(callback)
	
	});
};

adSchema.statics.remove = function (id, callback){

	this.findOne({_id: id}).remove().exec(callback);

};

adSchema.statics.update = function (id, data, callback){

	this.findById(id, function (err, ad){

		async.map(Object.keys(data), function (key, cb){

			ad[key] = data[key];

		}, function (err){
		
			ad.save(callback)
		
		});

	});

};

adSchema.statics.list = function (callback){

	this.find({}).exec(callback);

};

module.exports = exports = adSchema;