var socket = io.connect('http://localhost:3000');
var ads, ad, start;
socket.emit('fid', {
	fid: parseUri(location.href).query
});
socket.on('ads', function(data) {
	document.getElementById('loadingTitle').style.display = "none";
	ads = data.ads;
	ad = 0;
	start = true;
});
