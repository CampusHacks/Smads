var ads, ad, player;

function onYouTubeIframeAPIReady() {
	start = false;
	console.log("1.1"+ads[ad]);
	player = new YT.Player('player', {
		height: screen.availHeight,
		width: screen.availWidth,
		videoId: ads[ad],
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	console.log("Amo a Laura");
}

function DoFullScreen() {
	var elem = document.getElementById("player");
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
}

function onPlayerReady(event) {
	console.log("molo");
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		if (start) {
			start = false;
		} else {
			ad = (ad + 1) % ads.length;
		}
		player.loadVideoById(ads[ad]);
	}
}