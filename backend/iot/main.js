console.log('IoT Engine');
io.sockets.on('connection', function (socket) {
	socket.emit("ads", {ads: ["vpMeFh37mCE", "LXO6Vefqxiw", "rVke_MP_ZcA"]});
	setTimeout(
		function() {
			socket.emit("ads", {ads: ["vpMeFh37mCE", "LXO6Vefqxiw", "rVke_MP_ZcA"]});
		}, 10000);
});