var Services = (function(){
	var services = {};


	function createMethod(method_name){
		return function(url, data, fn, err_fn) {
			MashupPlatform.http.makeRequest(url, {
				method: method_name,
				parameters: data,
				onSuccess: function(transport){
					var json = JSON.parse(transport.responseText);
					fn(json);
				},
				onFailure: err_fn
			});	
		};		
	};

	services.get = createMethod("GET");
	services.post = createMethod("POST");
	services.put = createMethod("PUT");
	services.delete = createMethod("DELETE");

	return services;
})();