var express = require('express'),
	http = require('http')

var app = express()

//Express config 

app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());

//Error handling
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
var rest = require('./rest')

app.get('/ad', rest.listAds);
app.post('/ad', rest.createAd);
app.put('/ad', rest.updateAd);
app.del('/ad', rest.deleteAd);

exports = module.exports = http.createServer(app)