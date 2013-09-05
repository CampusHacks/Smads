
var mongoose = require('mongoose');
var async = require('async');
var adSchemaParent = require('./ad');
var adSchema = mongoose.model('Ad', adSchemaParent);

var clientSchema = new mongoose.Schema({
	name: String,
	fid: String,
	ip: String

});

clientSchema.statics.list = function (callback){
	this.find({}).exec(function(err, clients){
		var clientList = [];
		adSchema.list(function(er, ads){

			async.map(clients, function (client, cb) {
				console.log("a"+client);
				var adlist = [];
				async.map(ads, function (ad, cb2) {
					console.log("b"+ad);
					if (ad.client_ids.indexOf(client._id) > -1) {
						adlist.push(ad);
					}

					cb2(null, client, adlist);

				}, function (e, client, adlist) {
					console.log(adlist);
					client.ads = adlist;
					clientList.push(client);
					cb();
				});
				

			}, function (errr) {
				callback(clientList);
			})
		});
	});
};

module.exports = exports = clientSchema;