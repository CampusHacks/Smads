var xml = require('xml2json'),
	fs = require('fs'),
	requests = require('request')



module.exports.get = function (cb){

	fs.readFile(__dirname + '/body.xml', function (err, d){
		requests('http://192.168.10.174:8083/ZWaveAPI/Run/devices[5].instances[0].commandClasses[49].Get()', function (err, res, body){

			setTimeout(function (){

				requests.post({
		requests.post({

			url: 'http://130.206.80.44:1029/ngsi10/queryContext',
			headers: {

				'Content-Type':'application/xml',
				'Content-Length':d.length
			},
			body:d.toString('utf8'),
			method:'POST'

		}, function (err, res, body){
			
			var json = JSON.parse(xml.toJson(body))
			var shit = json['queryContextResponse']['contextResponseList']['contextElementResponse']['contextElement']['contextAttributeList']['contextAttribute']

			var arr = {};
			for (s in shit){

				var ss = shit[s]
				
				arr[ss['name']] = ss['contextValue'];
			}
			
			cb(err, arr)
		})
			}, 300)
			

		})
		
	})
	
}
