let audioStarted = false;
const backgroundMusic = document.getElementById('backgroundMusic');

const songs = [
    { 
        name: "Hypno's Lullaby", 
        link: "https://funkymaker.com/hypnos-lullaby",
        gif: "weekgifs/hypnoweek.gif",
        confirmGif: "weekgifs/hypnoweekconfirm.gif"
    },
    { 
        name: "Monochrome", 
        link: "https://funkymaker.com/monochrome",
        gif: "weekgifs/gameboy.gif",
        confirmGif: "weekgifs/gameboyconfirm.gif"
    },
    { 
        name: "Lost Silver", 
        link: "https://funkymaker.com/lost-silver",
        gif: "weekgifs/lostsilverweek.gif",
        confirmGif: "weekgifs/lostsilverweekconfirm.gif"
    }
];

let currentCassetteIndex = 0;
let isInserting = false;

const cassetteTrack = document.getElementById('cassetteTrack');
const cassettes = document.querySelectorAll('.cassette');
const gameboys = document.querySelectorAll('.gameboy, .gameboy-hidden');
const whiteScreenOverlay = document.getElementById('whiteScreenOverlay');

function startAudio() {
    if (!audioStarted) {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        audioStarted = true;
    }
}

function updateCassettePosition() {
    cassettes.forEach((cassette, index) => {
        cassette.classList.remove('active', 'slide-left', 'slide-right');
        
        if (index === currentCassetteIndex) {
            cassette.classList.add('active');
        } else if (index < currentCassetteIndex) {
            cassette.classList.add('slide-left');
        } else {
            cassette.classList.add('slide-right');
        }
    });
    
    // Los gameboys ya están en su posición correcta
}

function navigateLeft() {
    if (isInserting) return;
    currentCassetteIndex = (currentCassetteIndex - 1 + songs.length) % songs.length;
    updateCassettePosition();
}

function navigateRight() {
    if (isInserting) return;
    currentCassetteIndex = (currentCassetteIndex + 1) % songs.length;
    updateCassettePosition();
}

function insertCassette() {
    if (isInserting) return;
    
    isInserting = true;
    const currentSong = songs[currentCassetteIndex];
    const activeGameboy = cassettes[currentCassetteIndex].querySelector('img');
    
    // Cambiar a GIF de confirm específico de la canción
    activeGameboy.src = currentSong.confirmGif;
    activeGameboy.classList.add('confirm-gif');
    
    setTimeout(() => {
        // Mostrar pantalla blanca completa
        whiteScreenOverlay.classList.add('active');
        
        setTimeout(() => {
            window.open(currentSong.link, '_blank');
            
            setTimeout(() => {
                // Resetear todo
                whiteScreenOverlay.classList.remove('active');
                activeGameboy.src = currentSong.gif;
                activeGameboy.classList.remove('confirm-gif');
                isInserting = false;
            }, 1000);
        }, 2000);
    }, 1000);
}

document.addEventListener('keydown', (e) => {
    startAudio();
    
    switch(e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            e.preventDefault();
            navigateLeft();
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            e.preventDefault();
            navigateRight();
            break;
        case 'Enter':
        case ' ':
            e.preventDefault();
            insertCassette();
            break;
    }
});

document.addEventListener('click', startAudio);

document.addEventListener('DOMContentLoaded', () => {
    updateCassettePosition();
});

window.addEventListener('keydown', (e) => {
    if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }
});