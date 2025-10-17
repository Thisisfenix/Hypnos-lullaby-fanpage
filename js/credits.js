const creditsData = [
    {
        name: "nowzuq",
        role: "Porteador",
        quote: "\"Llevando Hypno's Lullaby a móviles\"",
        description: "\"Soy nowzuq y estoy trabajando en portear el mod de Hypno's Lullaby a Funky Maker Mobile para que sea accesible en dispositivos móviles. ¡Es emocionante ayudar a expandir el alcance de este increíble mod!\"",
        icon: "icons/nowzuq.png"
    },
    {
        name: "ankush",
        role: "Creador Web y Diseñador",
        quote: "\"Meh brother creando el sitio web XD...\"",
        description: "\"Soy ankush, el creador y diseñador del sitio web de Hypno's Lullaby. Diseñé y construí toda esta experiencia de fanpage desde cero. ¡Espero que disfrutes explorando el mundo de Hypno a través de esta interfaz!\"",
        icon: "icons/ankush.png"
    },
    {
        name: "Deivid",
        role: "Colaborador",
        quote: "\"Hey que tal gente como estan espero que bastante bien\"",
        description: "\"hola mama salgo enun port de funki meiker\"",
        icon: "icons/Deivid.png"
    }
];

let currentIndex = 0;
let audioStarted = false;
let backgroundMusic;

function startAudio() {
    if (!audioStarted && backgroundMusic) {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        audioStarted = true;
    }
}

function updateCredits() {
    const credit = creditsData[currentIndex];
    document.getElementById('creditHeader').textContent = credit.name;
    document.getElementById('creditSubtitle').textContent = credit.role;
    document.getElementById('creditQuote').textContent = credit.quote;
    document.getElementById('creditDescription').textContent = credit.description;
    
    // Actualizar iconos
    const portraitsContainer = document.querySelector('.character-portraits');
    portraitsContainer.innerHTML = '';
    
    creditsData.forEach((person, index) => {
        if (person.icon) {
            const iconImg = document.createElement('img');
            iconImg.src = person.icon;
            iconImg.alt = person.name;
            iconImg.className = 'character-icon';
            if (index === currentIndex) {
                iconImg.classList.add('selected');
            }
            portraitsContainer.appendChild(iconImg);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic = document.getElementById('backgroundMusic');
    
    document.getElementById('upArrow').addEventListener('click', () => {
        startAudio();
        currentIndex = (currentIndex - 1 + creditsData.length) % creditsData.length;
        updateCredits();
    });
    
    document.getElementById('downArrow').addEventListener('click', () => {
        startAudio();
        currentIndex = (currentIndex + 1) % creditsData.length;
        updateCredits();
    });
    
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + creditsData.length) % creditsData.length;
            updateCredits();
        } else if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % creditsData.length;
            updateCredits();
        }
    });
    
    // Inicializar
    updateCredits();
});
