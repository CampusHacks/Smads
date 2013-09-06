var ads, ad, player;

function onYouTubeIframeAPIReady() {
	start = false;
	player = new YT.Player('player', {
		height: screen.availHeight,
		width: screen.availWidth,
		videoId: ads[ad],
		playerVars: {'autoplay':1, 'rel':0, 'shownifo':0, 'egm':0, 'showsearch':0, 'controls':0,},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
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