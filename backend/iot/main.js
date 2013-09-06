var request = require('request');
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');

var Client = mongoose.model('Client');
var getter = require('./getter');
var mongoose = require('mongoose')

var adSchema = mongoose.model('Ad');

var _sent = [];

Array.prototype.same = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

io.sockets.on('connection', function (socket) {

	getter.get(function (err, data){

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

				if(_sent.same(ads)){
					return;
				}

				_sent = ads;

				socket.emit('ads', ads);

			});

		});

	});
	
	socket.on('fid', function (data) {
		Client.list(function (err, clients) {
			Client.find({fid: data.fid}, function (er, client) {

				if(_sent.same(ads)){
					return;
				}

				_sent = ads;

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
			
			.where('conditions.temperature.max').gt(Number(data.temperature))
			.where('conditions.temperature.min').lt(Number(data.temperature))

			.where('conditions.lux.max').gt(Number(data.illuminance))
			.where('conditions.lux.min').lt(Number(data.illuminance))	

			.where('conditions.humidity.max').gt(Number(data.relativeHumidity))
			.where('conditions.humidity.min').lt(Number(data.relativeHumidity))

			.select('url')

		.exec(function (err, ads){

			async.map(ads, function (ad, cb){

				cb(null, ad.url);

			}, function (err, ads){

				if(_sent.same(ads)){
					return;
				}

				_sent = ads;	

				io.sockets.emit('ads', ads);

				console.log(data, ads);

			});

		});
	

	});

}, 3000);