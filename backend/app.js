var env = process.argv[2] || 'dev';
var PORT = ((env == 'prod') ? 80 : 3000);
process.env.NODE_ENV = ((env == 'prod') ? 'production' : 'development');

var model = require('./model');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smads');
mongoose.model('Ad', model.ad);
mongoose.model('Client', model.client);

var server = require('./server');

global.io = require('socket.io').listen(server);
require("./iot/main");

server.listen(PORT, function (err){
	console.log('Up and running on port '+PORT);
});

// Require the IoT Bridge engine

require(__dirname + '/iot/main');