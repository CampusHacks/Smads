var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var ad = 0;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: screen.availHeight,
		width: screen.availWidth,
		videoUrl: "http://www.youtube.com/v/"+ads[ad]+"?version=3&enablejsapi=1",
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
	document.getElementById("fullscreen").click();
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		ad = (ad + 1) % ads.length;
		player.loadVideoByUrl("http://www.youtube.com/v/"+ads[ad]+"?version=3&enablejsapi=1");
	}
}