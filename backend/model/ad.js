
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;
var async = require('async');

var adSchema = new schema({

	url: String,
	
	conditions: Object,

	client_ids: Array
});

adSchema.statics.create = function (data, callback) {
	var insert = new this();

	insert.url = data.url;
	insert.conditons = data.conditons;
	insert.client_ids = data.client_ids;

	insert.save(callback)

};

adSchema.statics.remove = function (id, callback){

	this.findOne({_id: id}).remove().exec(callback);

};

adSchema.statics.update = function (id, data, callback){

	console.log(id, data);

	this.findById(id, function (err, ad){

		async.map(Object.keys(data), function (key, cb){

			ad[key] = data[key];

			cb();

		}, function (err){
		
			ad.save(callback);
		
		});

	});

};

adSchema.statics.list = function (callback){

	this.find({}).exec(callback);

};

module.exports = exports = adSchema;