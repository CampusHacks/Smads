MashupPlatform.Services = (function(){
	var services = {};

	services.get = function(url, data, fn, err_fn) {
		MashupPlatform.http.makeRequest(url, {
			method: "GET",
			parameters: data,
			onSuccess: fn,
			onFailure: err_fn
		});	
	};

	return services;
})();