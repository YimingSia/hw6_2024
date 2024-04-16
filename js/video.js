var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log ('auto play is set to '+video.autoplay);
	console.log("loop is set to " + video.loop);
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

function updateVolumeInfo() {
    var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = Math.round(video.volume * 100) + "%";
}

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

var slowDownCount = 0;

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate);
	slowDownCount++;
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    if (slowDownCount > 0) {
        video.playbackRate += 0.1 * slowDownCount;
        console.log("New Speed: " + video.playbackRate);
        slowDownCount = 0;
    }
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");

    var newTime = video.currentTime + 10;

    if (newTime > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = newTime;
    }

    console.log("Current Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");

    video.muted = !video.muted;

    var muteButton = document.querySelector("#mute");
    if (video.muted) {
        muteButton.textContent = "Unmute";
    } else {
        muteButton.textContent = "Mute";
    }

    updateVolumeInfo();
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Changed");

    var volumeValue = this.value;

    video.volume = volumeValue / 100;

    updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School clicked");
    video.classList.toggle("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original clicked");
    video.classList.remove("oldSchool"); // Remove the "oldSchool" class from the video element
});

