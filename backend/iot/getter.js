var xml = require('xml2json'),
	fs = require('fs')

fs.readFile('./body.xml', function (err, d){

	console.log(xml.toJson(d.toString()))
})