var socket = io.connect('http://localhost:3000');
var ads;
socket.on('ads', function(data) {
	document.getElementById('loadingTitle').style.display = false;
	//ads = data.ads;
});
ads = ["vpMeFh37mCE", "LXO6Vefqxiw", "rVke_MP_ZcA"];