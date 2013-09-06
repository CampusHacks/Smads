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
    	$("#save-ad-btn").click(function(result){
	    	if (alreadySaved()){
	    		updateAd();
	    	}
	    	else {
	    		createAd();
	    	}
	    });
		Api.getClients(function(data){
			console.log(data);
			var clients = data.clients, client;
			$(".select-div").html(ich.select_with_clients(data));

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

    function getMinAndMax(features){
        var result = {}, feature;

        for (var i = 0; i < features.length; i++){
            feature = features[i];
            result[feature] = {
                min: $("#" + feature + "-min-txt").val(),
                max: $("#" + feature + "-max-txt").val()
            };
        }

        return result;
    }

    function getClientIDs(){
    	var checkboxes = $(".screen-id-checkbox");
    	var client_ids = [];
    	checkboxes.each(function(_, checkbox){
    		var cb = $(checkbox);
    		if (cb.is(":checked"))
    			client_ids.push(cb.attr("data-client-id"));
    	});
    	return client_ids;
    };


    function createAd(){
    	var client_ids = getClientIDs();
    	console.log(client_ids);
    	Api.Ad.create(client_ids, $("#video-id-txt").val(), getMinAndMax(["temperature", "lux", "humidity"]), function(data){
    		var ad = data.ad;
    		MashupPlatform.prefs.set("ad_id", ad._id);
    		ad_id = ad._id;
    		alert("Ad created");
    	});
    };

    function updateAd(){
    	var client_ids = getClientIDs();
    	Api.Ad.update(ad_id, client_ids, $("#video-id-txt").val(), getMinAndMax(["temperature", "lux", "humidity"]), function(){
    		alert("Ad updated");
    	});	
    }

    

})();
