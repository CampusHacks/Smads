var socket = io.connect('http://130.206.83.5');
var start;

socket.on('connect', function(){
 	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	socket.on('ads', function(data) {
		document.getElementById('loadingTitle').style.display = "none";
		ads = data;
		ad = 0;
		start = true;
	});
});