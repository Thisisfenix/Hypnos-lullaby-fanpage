let audioStarted = false;
const backgroundMusic = document.getElementById('backgroundMusic');

// Función para iniciar audio con interacción del usuario
function startAudio() {
    if (!audioStarted) {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        audioStarted = true;
    }
}

// Iniciar audio en cualquier interacción
document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);

// Sonido al seleccionar un botón
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        startAudio();
        const selectSound = document.getElementById('selectSound');
        selectSound.play().catch(e => console.log('Sound play failed:', e));
    });
});
