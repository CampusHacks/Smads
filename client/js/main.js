var socket = io.connect('http://localhost:3000');
var ads, ad, start;
socket.on('ads', function(data) {
	document.getElementById('loadingTitle').style.display = "none";
	ads = data.ads;
	ad = 0;
	start = true;
});
