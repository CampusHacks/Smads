
var mongoose = require('mongoose');
var async = require('async');

var clientSchema = new mongoose.Schema({

	name: String,
	fid: String

});

clientSchema.statics.list = function (callback){

	this.find({}).exec(callback);

};

module.exports = exports = clientSchema;