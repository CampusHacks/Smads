var socket = io.connect('http://130.206.83.5');
var ads, ad, start;
socket.emit('fid', {
	fid: parseUri(location.href).query
});
socket.on('ads', function(data) {
	console.log(data);
	document.getElementById('loadingTitle').style.display = "none";
	ads = data.ads;
	ad = 0;
	start = true;
});
