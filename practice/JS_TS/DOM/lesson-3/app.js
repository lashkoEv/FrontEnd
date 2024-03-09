document.addEventListener("click", () => {
    audio.play();
    console.log(audio.currentTime);
    audio.volume = 0.1;
});