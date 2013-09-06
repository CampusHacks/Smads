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
	var working = false;
	socket.on('ads', function(data) {

		console.log(data);
		d();
		document.getElementById('loadingTitle').style.display = "none";
		ads = data;
		ad = 0;
		start = true;
	});
});