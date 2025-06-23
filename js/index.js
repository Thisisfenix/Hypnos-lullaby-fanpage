// Auto reproducción de música de fondo
window.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
});

// Sonido al seleccionar un botón
const menuButtons = document.querySelectorAll('.menu-button');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectSound = document.getElementById('selectSound');
        selectSound.play();
    });
});
