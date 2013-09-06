var socket = io.connect('http://130.206.83.5');
var ads, ad, start;
socket.on('ads', function(data) {
	console.log(data);
	document.getElementById('loadingTitle').style.display = "none";
	ads = data.ads;
	ad = 0;
	start = true;
	console.log(ads[ad]);
});