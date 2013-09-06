var mongoose = require('mongoose');
var async = require('async');

var adSchema = mongoose.model('Ad', require('./ad'));
var ObjectId = mongoose.Schema.ObjectId
var clientSchema = new mongoose.Schema({
	
	name: String,
	fid: String,
	ip: String,
	id: ObjectId,
	ads: Array

});

clientSchema.statics.list = function (callback){

	this.find({}).exec(function(err, clients){
		
		if (err) {
			callback(er);
			return;
		}

		adSchema.list(function(er, ads){

			if (er) {
				callback(er);
				return;
			}

			async.map(clients, function (client, cb){

				async.map(ads, function (ad, _cb){

					if(ad && ad.client_id && client._id && ad.client_id.indexOf(client._id)+1){
						_cb(null, ad);
					} else{
						_cb(null);
					}

				}, function (err, ads){

					client.ads = ads;

					cb(null, client);
				});

			}, function (err, clients){

				callback(err, clients);

			});

		});

	});

};

module.exports = exports = clientSchema;