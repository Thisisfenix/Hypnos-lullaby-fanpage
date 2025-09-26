let audioStarted = false;
const backgroundMusic = document.getElementById('backgroundMusic');

function startAudio() {
    if (!audioStarted) {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        audioStarted = true;
    }
}

document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);
