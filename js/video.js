var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	autostart = false;
	loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.10*video.playbackRate;
	console.log("New speed is "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.10*video.playbackRate;
	console.log("New speed is "+video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime=video.currentTime+10;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("New location "+video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if(video.muted == true) {
		document.querySelector('#mute').innerHTML = 'Unmute';
	} else {
		document.querySelector('#mute').innerHTML = 'Mute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value/100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.documentElement.className = 'oldSchool';
});

document.querySelector("#orig").addEventListener("click", function() {
	document.documentElement.classList.remove("oldSchool");
});