var request = require('request');
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');

var Client = mongoose.model('Client');
var getter = require('./getter');
var mongoose = require('mongoose')

var adSchema = mongoose.model('Ad');

io.sockets.on('connection', function (socket) {

	socket.on("fid", function (data) {
		Client.list(function (err, clients) {
			Client.find({fid: data.fid}, function (er, client) {
				socket.emit('ads', { 
					ads: client.ads
				});
			});
		});
	});
});

setInterval(function (){

	getter.get(function (err, data){

		adSchema.find({})
			
			.where('temperature.max').lt(data.temperature)
			.where('temperature.min').gt(data.temperature)

			.where('humidity.max').lt(data.illuminance)
			.where('humidity.min').gt(data.illuminance)	

			.where('illuminance.max').lt(data.relativeHumidity)
			.where('humidity.min').gt(data.relativeHumidity)

			.select('url')

		.exec(function (err, ads){

			async.map(ads, function (ad, cb){

				cb(ad.url);

			}, function (err, ads){

				io.sockets.emit('ads', ads);

			});

			io.sockets.emit('ads', {ads: ads});

		});
	

	});

}, 1000);

