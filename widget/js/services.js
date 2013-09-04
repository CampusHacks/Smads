var Services = (function(){
	var services = {};


	services.get = function(url, data, fn, err_fn) {
		MashupPlatform.http.makeRequest(url, {
			method: "GET",
			parameters: data,
			onSuccess: function(transport){
				var json = JSON.parse(transport.responseText);
				fn(json);
			},
			onFailure: err_fn
		});	
	};


	services.post = function(url, data, fn, err_fn){
		MashupPlatform.http.makeRequest(url, {
			method: "POST",
			parameters: data,
			onSuccess: function(transport){
				var json = JSON.parse(transport.responseText);
				fn(json);
			},
			onFailure: err_fn
		});
	};

	return services;
})();