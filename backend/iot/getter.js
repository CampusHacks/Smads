var i = 0;

var conditions = [
	{

		"illuminance":91,
		"relativeHumidity":9919,
		"temperature":25
	},

	{

		"illuminance":91,
		"relativeHumidity":9191,
		"temperature":25
	},

	{

		"illuminance":91,
		"relativeHumidity":9191,
		"temperature":25
	},

	{

		"illuminance":91,
		"relativeHumidity":9191,
		"temperature":25
	},

	{

		"illuminance":91,
		"relativeHumidity":9191,
		"temperature":25
	},

	{

		"illuminance":2,
		"relativeHumidity":100,
		"temperature":0
	},

];

exports.get = function (cb){

		if(i >= conditions.length){
			i = 0;
		};

		cb(null, conditions[i]);
		io.sockets.emit('conditions', conditions[i]);
		i++;
					
}

