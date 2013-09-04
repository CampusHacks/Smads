var Api = (function(){
	var api = {};
	var host = "";

	api.getClients = function(fn){
		var url =  host + "/clients";
		Services.get(url, {}, fn);
	};


	return api;
})();