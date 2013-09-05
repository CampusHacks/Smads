var Api = (function(){

	console.log("API loaded");

	var api = {};
	var host = "http://130.206.83.5";

	api.getClients = function(fn, err_fn){
		var url =  host + "/clients";
		Services.get(url, {}, fn, err_fn);
	};

	var Ad = {};

	Ad.get = function(fn){
		var url = host + "/ad";
		Services.get(url, {}, fn);
	};

	Ad.create = function(client_id, video_url, conditions, fn){
		var url = host + "/ad";
		var ad_data = {
			client_id: client_id,
			url: video_url,
			conditions: conditions
		};

		Services.post(url, { "data": JSON.stringify(ad_data) }, fn);

	};


	api.Ad = Ad;
	return api;
})();