var xml = require('xml2json'),
	fs = require('fs'),
	requests = require('request')



exports.get = function (cb){

	fs.readFile('./body.xml', function (err, d){
		
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

			var arr = []
			for (s in shit){

				var ss = shit[s]
				arr.push({name:ss['name'], value:ss['contextValue']})
			}
			
			cb(null, arr)
		})
	})
	
}
this.get(console.log)
