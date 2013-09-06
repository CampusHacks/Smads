var request = require('request');
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');

var Client = mongoose.model('Client');
var getter = require('./getter');
var mongoose = require('mongoose')

var adSchema = mongoose.model('Ad');

var _sent;

io.sockets.on('connection', function (socket) {

	getter.get(function (err, data){

		console.log(data);

		adSchema.find({})
			
			/*.where('temperature.max').lt(data.temperature)
			.where('temperature.min').gt(data.temperature)

			.where('humidity.max').lt(data.illuminance)
			.where('humidity.min').gt(data.illuminance)	

			.where('illuminance.max').lt(data.relativeHumidity)
			.where('humidity.min').gt(data.relativeHumidity)

			.select('url')*/

		.exec(function (err, ads){

			async.map(ads, function (ad, cb){

				cb(null, ad.url);

			}, function (err, ads){

				socket.emit('ads', ads);

			});

			console.log(ads);

		});

	});
	
	socket.on('fid', function (data) {
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
			
/*			.where('temperature.max').lt(Number(data.temperature))
			.where('temperature.min').gt(Number(data.temperature))

			.where('lux.max').lt(Number(data.illuminance))
			.where('lux.min').gt(Number(data.illuminance))	

			.where('humidity.max').lt(Number(data.relativeHumidity))
			.where('humidity.min').gt(Number(data.relativeHumidity))

			.select('url')*/

		.exec(function (err, ads){

			async.map(ads, function (ad, cb){

				if( ad.temperature.max > data.temperature && ad.temperature.min < data.temperature && ad.lux.max > data.illuminance && ad.lux.min < data.illuminance  ){
					cb(null, ad.url);
				} else{
					cb(null);
				}

			}, function (err, ads){

				io.sockets.emit('ads', ads);

				console.log(data, ads);

			});

		});
	

	});

}, 1000);