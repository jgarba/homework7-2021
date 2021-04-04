var video, volume, muteButton;

window.addEventListener("load", function() {
	console.log("Starting");
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
	muteButton = document.querySelector("#mute");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 15;
	}

	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		video.muted = true;
		mute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		mute.innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	console.log(this);
	console.log(this.volume);
	video.volume = e.target.value / 100;
	volume.innerHTML = e.target.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

