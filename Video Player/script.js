// script.js
const video = document.getElementById("video-player");
const playPauseBtn = document.getElementById("play-pause");
const stopBtn = document.getElementById("stop");
const seekBar = document.getElementById("seek-bar");
const fullscreenBtn = document.getElementById("fullscreen");
const fileInput = document.getElementById("file-input");

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Stop functionality
stopBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playPauseBtn.textContent = "Play";
});

// Seek Bar functionality
seekBar.addEventListener("input", (e) => {
  video.currentTime = (video.duration * e.target.value) / 100;
});

video.addEventListener("timeupdate", () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

// Fullscreen functionality
fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    // For Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    // For IE/Edge
    video.msRequestFullscreen();
  }
});

// File selection functionality
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    video.src = fileURL;
    playPauseBtn.textContent = "Play"; // Reset button text
  }
});
