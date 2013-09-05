var socket = io.connect('http://localhost:3000');
var ads;
socket.on('ads', function(data) {
	document.getElementById('loadingTitle').style.display = "none";
	ads = data.ads;
});
