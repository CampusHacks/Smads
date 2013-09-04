var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

//Express config 

app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());

app.use(function (req, res, next){

	res.sendfile = function (file, cb){
		res.sendfile(path.resolve(file), cb);
	};

	next();

});

//Error handling
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
var rest = require('./rest');

//Test
app.get('/', function (req, res){

	res.sendfile(__dirname + '/../views/index.html');

});

app.get('/ad', rest.list);
app.post('/ad', rest.create);
app.put('/ad', rest.update);
app.del('/ad', rest.remove);

app.get('/clients', rest.listClient);

exports = module.exports = http.createServer(app);