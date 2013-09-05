io.sockets.on('connection', function (socket) {
	socket.emit('ads', { 
		ads: ['vpMeFh37mCE', 'LXO6Vefqxiw', 'rVke_MP_ZcA']
	});
});

var request = require('request');

var async = require('async');

var util = require('util');

setInterval(function (){

	request.get('http://192.168.10.174:8083/zwaveapi/run/devices[4].SensorMultilevel', function (err, response, body){

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

				console.log(data);

			});

			//console.log(util.inspect(body.data['2'], { showHidden: true, depth: null }));
		}

	});

}, 2000);