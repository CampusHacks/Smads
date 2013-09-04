var env = process.argv[2] || 'dev';
var PORT = ((env == 'prod') ? 80 : 3000)
process.env.NODE_ENV = ((env == 'prod') ? 'production' : 'development')

var model = require('./model'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smads');
mongoose.model('Ad', model.ad);
mongoose.model('Client', model.client);

var server = require('./server');

var io = require('socket.io').listen(server);

server.listen(PORT, function (err){

	console.log('Up and running on port '+PORT);
});

//io.