var socket = io.connect('http://130.206.83.5');
var start;

socket.on('connect', function(){
	function d(){
		if (working == false){
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			working = true;
		}
	}

	function permuteArray(sort){
		 var rsort = new Array(sort.length);
		 for(var idx = 0; idx < sort.length; idx++)
		 {
		     rsort[idx] = sort[idx];
		 }

		 // then proceed to shuffle the rsort array      
		 for(var idx = 0; idx < rsort.length; idx++)
		 {
		    var swpIdx = idx + Math.floor(Math.random() * (rsort.length - idx));
		    // now swap elements at idx and swpIdx
		    var tmp = rsort[idx];
		    rsort[idx] = rsort[swpIdx];
		    rsort[swpIdx] = tmp;
		 }	
		 return rsort;
	};

	var working = false;
	socket.on('ads', function(data) {

		console.log(data);
		d();
		document.getElementById('loadingTitle').style.display = "none";
		data = permuteArray(data);
		ads = data;
		ad = 0;
		start = true;
	});
});