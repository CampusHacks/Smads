/*global MashupPlatform*/

(function () {

    "use strict";

    var ad_id = MashupPlatform.prefs.get("ad_id");

    function alreadySaved(){
    	return ad_id != "none";
    }

    function showAd(ad){
    	$("#video-id-txt").val(ad);

    	$("#temperature-min-txt").val(ad.conditions.temperature.min);
    	$("#temperature-max-txt").val(ad.conditions.temperature.max);

    	$("#lux-min-txt").val(ad.conditions.lux.min);
    	$("#lux-max-txt").val(ad.conditions.lux.max);

    	$("#humidity-min-txt").val(ad.conditions.humidity.min);
    	$("#humidity-max-txt").val(ad.conditions.humidity.max);
    };
    

    $(document).ready(function(){
		Api.getClients(function(data){
			var clients = data.clients, client;
			$(".select-div").html(ich.select_with_clients(clients));

			for(var i = 0; i < clients.length; i++){
				client = clients[i];
				client.ads.forEach(function(ad){
					if (ad._id == ad_id){
						showAd(ad);
					}
				});
			}
		});
    });


    function createAd(){
    	
    };

    $("#save-ad-btn").click(function(result){
    	if (alreadySaved()){
    		updateAd();
    	}
    	else {
    		createAd();
    	}
    });

})();
