var request = require('request');
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');
var Ad = mongoose.model('Ad');
var Client = mongoose.model('Client');

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

	request.get('', function (err, response, body){

		if(err){
			console.log(err);
		} else{
			body = JSON.parse(body);

			async.map([1, 3, 5], function (key, callback){

				callback(null, {
					name: body.data[key].sensorTypeString.value,
					value: body.data[key].val.value
				});

			}, function (err, data){

				if(err){
					console.log(err);
				} else{

					var gatherData = {};

					async.map(data, function (row, cb){

						gatherData[row.name] = row.value;

					}, function (err){

						
						
					});

				}

			});

			//console.log(util.inspect(body.data['2'], { showHidden: true, depth: null }));
		}

	});

}, 2000);

