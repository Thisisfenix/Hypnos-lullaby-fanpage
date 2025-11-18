const creditsData = [
    {
        name: "Hypno's Lullaby Team",
        role: "Equipo de Desarrollo Original",
        quote: "\"The original creators of this amazing mod\"",
        description: "\"Banbuds (Director, Artist, Animator), MarStarBro (Musician), Saster (Programmer), Cerbera (Artist) y muchos otros colaboradores que hicieron posible Hypno's Lullaby. Gracias por crear este increíble mod de Friday Night Funkin' que nos inspiró a hacer este port.\"",
        icon: "icons/icon.ico"
    },
    {
        name: "nowzuq",
        role: "Porteador a Funky Maker Mobile",
        quote: "\"Llevando Hypno's Lullaby a móviles\"",
        description: "\"Soy nowzuq y estoy trabajando en portear el mod de Hypno's Lullaby a Funky Maker Mobile para que sea accesible en dispositivos móviles. ¡Es emocionante ayudar a expandir el alcance de este increíble mod!\"",
        icon: "icons/nowzuq.png"
    },
    {
        name: "ankush",
        role: "Creador Web y Diseñador",
        quote: "\"Meh brother creando el sitio web XD...\"",
        description: "\"Soy ankush, el creador y diseñador del sitio web de Hypno's Lullaby. Diseñé y construí toda esta experiencia de fanpage desde cero para acompañar nuestro port a Funky Maker Mobile. ¡Espero que disfrutes explorando el mundo de Hypno a través de esta interfaz!\"",
        icon: "icons/ankush.png"
    },
    {
        name: "Deivid",
        role: "Colaborador del Port",
        quote: "\"Hey que tal gente como están espero que bastante bien\"",
        description: "\"Hola mamá salgo en un port de funki meiker. Ayudé en el desarrollo del port de Hypno's Lullaby para Funky Maker Mobile junto con el equipo.\"",
        icon: "icons/Deivid.png"
    }
];

let currentIndex = 0;
let audioStarted = false;
let backgroundMusic;
let typewriterTimeout;
let deividClickCount = 0;
let ankushClickCount = 0;
let nowzuqClickCount = 0;
let deividExploded = false;
let ankushExploded = false;
let matrixClicked = { deivid: false, ankush: false, nowzuq: false, hypnoteam: false };
let matrixActive = false;

function startAudio() {
    if (!audioStarted && backgroundMusic) {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        audioStarted = true;
    }
}

function typewriterEffect(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    const isMobile = window.innerWidth <= 768;
    const adjustedSpeed = isMobile ? Math.max(speed * 0.7, 20) : speed;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, adjustedSpeed);
        }
    }
    
    type();
}

function getDeividIcon(name, defaultIcon) {
    if (name !== 'Deivid') return defaultIcon;
    
    if (deividClickCount >= 50) {
        return 'icons/DeividDEAD.png';
    } else if (deividClickCount >= 20) {
        return 'icons/DeividDURR.png';
    }
    return defaultIcon;
}

function getAnkushIcon(name, defaultIcon) {
    if (name !== 'ankush') return defaultIcon;
    
    if (ankushClickCount >= 100) {
        return 'icons/ankushold.png';
    }
    return defaultIcon;
}

function createExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 12 : 20;
    const maxDistance = isMobile ? 60 : 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = maxDistance + Math.random() * (isMobile ? 30 : 50);
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');
        particle.style.animation = 'explode 1s ease-out forwards';
        particle.style.pointerEvents = 'none';
        
        if (isMobile) {
            particle.style.width = '4px';
            particle.style.height = '4px';
        }
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    }
}

function handleDeividClick(event) {
    event.stopPropagation();
    deividClickCount++;
    
    const iconImg = event.target;
    
    // Activar Matrix en cada click
    console.log('Deivid clicked - activating matrix');
    createMatrixRain();
    
    // Explosión a los 100 clicks
    if (deividClickCount === 100) {
        createExplosion(iconImg);
        deividExploded = true;
        
        // Después de la explosión, reemplazar entrada de créditos de Deivid
        setTimeout(() => {
            // Encontrar y reemplazar la entrada de Deivid
            const deividIndex = creditsData.findIndex(credit => credit.name === "Deivid");
            if (deividIndex !== -1) {
                creditsData[deividIndex] = {
                    name: "Oh no, maté a Deivid",
                    role: "Memorial",
                    quote: "\"RIP Deivid - Clickeado hasta la muerte\"",
                    description: "\"Deivid fue clickeado 100 veces y no pudo resistir más. Ahora descansa en paz. Su sacrificio no será olvidado.\"<br><br><img src='images/oh no mate a deivid.png' style='width: 100%; max-height: 150px; object-fit: contain; border-radius: 5px; margin-top: 10px;' alt='Memorial de Deivid'>",
                    icon: "images/oh no mate a deivid.png"
                };
            }
            
            // Actualizar los créditos para mostrar los iconos actualizados
            updateCredits();
        }, 5000); // Esperar 5 segundos después de la explosión
        
        iconImg.remove();
        return;
    }
    
    // Cambiar temporalmente a Deivid2.png
    iconImg.src = 'icons/Deivid2.png';
    
    // Volver al icono correspondiente después de 800ms
    setTimeout(() => {
        iconImg.src = getDeividIcon('Deivid', 'icons/Deivid.png');
    }, 800);
}

function showDeividDeathImage(event) {
    event.stopPropagation();
    
    // Mostrar la imagen grande en la caja de descripción
    const descriptionElement = document.getElementById('creditDescription');
    descriptionElement.innerHTML = '<img src="images/oh no mate a deivid.png" style="width: 100%; height: auto; object-fit: contain; border-radius: 5px;" alt="Oh no, maté a Deivid">';
}

function handleAnkushClick(event) {
    event.stopPropagation();
    ankushClickCount++;
    
    const iconImg = event.target;
    
    // Activar Matrix en cada click
    console.log('Ankush clicked - activating matrix');
    createMatrixRain();
    
    // Explosión a los 200 clicks
    if (ankushClickCount === 200) {
        createExplosion(iconImg);
        ankushExploded = true;
        iconImg.remove();
        return;
    }
    
    // Efecto de parpadeo
    iconImg.style.opacity = '0.3';
    
    setTimeout(() => {
        iconImg.style.opacity = '1';
        iconImg.src = getAnkushIcon('ankush', 'icons/ankush.png');
    }, 300);
}

function createMatrixRain() {
    if (matrixActive) return;
    matrixActive = true;
    
    console.log('Creating Matrix rain...');
    const icons = ['icons/nowzuq.png', 'icons/ankush.png', 'icons/Deivid.png', 'icons/icon.ico'];
    const isMobile = window.innerWidth <= 768;
    const iconCount = isMobile ? 20 : 50;
    const iconSize = isMobile ? '20px' : '30px';
    
    console.log(`Matrix config: mobile=${isMobile}, iconCount=${iconCount}`);
    
    for (let i = 0; i < iconCount; i++) {
        setTimeout(() => {
            const matrixIcon = document.createElement('img');
            matrixIcon.src = icons[Math.floor(Math.random() * icons.length)];
            matrixIcon.className = 'matrix-icon';
            
            const startX = Math.random() * (window.innerWidth - 30);
            const duration = isMobile ? 1.5 + Math.random() * 1 : 2 + Math.random() * 1.5;
            
            matrixIcon.style.left = startX + 'px';
            matrixIcon.style.width = iconSize;
            matrixIcon.style.height = iconSize;
            matrixIcon.style.animation = `matrixFall ${duration}s linear forwards`;
            matrixIcon.style.pointerEvents = 'none';
            
            console.log(`Creating matrix icon ${i}: x=${startX}, duration=${duration}`);
            document.body.appendChild(matrixIcon);
            
            setTimeout(() => {
                if (matrixIcon.parentNode) {
                    matrixIcon.remove();
                }
            }, duration * 1000);
        }, i * (isMobile ? 80 : 40));
    }
    
    setTimeout(() => {
        matrixActive = false;
        console.log('Matrix rain finished');
    }, isMobile ? 8000 : 10000);
}

function handleHypnoTeamClick(event) {
    event.stopPropagation();
    
    const iconImg = event.target;
    
    // Activar Matrix en cada click
    console.log('Hypno Team clicked - activating matrix');
    createMatrixRain();
    
    // Efecto de brillo dorado
    iconImg.style.filter = 'brightness(1.5) drop-shadow(0 0 15px gold)';
    setTimeout(() => {
        iconImg.style.filter = '';
    }, 500);
}

function checkMatrixTrigger() {
    console.log('Matrix status:', matrixClicked);
    if (matrixClicked.deivid && matrixClicked.ankush && matrixClicked.nowzuq && matrixClicked.hypnoteam) {
        console.log('Matrix activated!');
        createMatrixRain();
        // Reset inmediato para poder activarlo de nuevo
        matrixClicked = { deivid: false, ankush: false, nowzuq: false, hypnoteam: false };
    }
}

function handleNowzuqClick(event) {
    event.stopPropagation();
    nowzuqClickCount++;
    
    const iconImg = event.target;
    
    // Activar Matrix en cada click
    console.log('Nowzuq clicked - activating matrix');
    createMatrixRain();
    
    // Efecto glitch a los 20 clicks
    if (nowzuqClickCount >= 20) {
        iconImg.classList.add('glitching');
    }
    
    // Efecto de sacudida al hacer click
    iconImg.style.transform = 'scale(0.9)';
    setTimeout(() => {
        iconImg.style.transform = '';
    }, 100);
}

function updateCredits() {
    const credit = creditsData[currentIndex];
    
    // Limpiar timeout anterior si existe
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }
    
    document.getElementById('creditHeader').textContent = credit.name;
    document.getElementById('creditSubtitle').textContent = credit.role;
    document.getElementById('creditQuote').textContent = credit.quote;
    
    // Aplicar efecto de escritura a la descripción
    const descriptionElement = document.getElementById('creditDescription');
    if (credit.description.includes('<img')) {
        // Si contiene HTML (imagen), usar innerHTML directamente
        descriptionElement.innerHTML = credit.description;
    } else {
        // Si es texto normal, usar efecto de escritura
        typewriterEffect(descriptionElement, credit.description, 30);
    }
    
    // Actualizar iconos
    const portraitsContainer = document.querySelector('.character-portraits');
    portraitsContainer.innerHTML = '';
    
    creditsData.forEach((person, index) => {
        if (person.icon && !(person.name === 'Deivid' && deividExploded) && !(person.name === 'ankush' && ankushExploded)) {
            const iconImg = document.createElement('img');
            let iconSrc = person.icon;
            if (person.name === 'Deivid') {
                iconSrc = getDeividIcon(person.name, person.icon);
            } else if (person.name === 'ankush') {
                iconSrc = getAnkushIcon(person.name, person.icon);
            }
            iconImg.src = iconSrc;
            iconImg.alt = person.name;
            iconImg.className = 'character-icon';
            if (index === currentIndex) {
                iconImg.classList.add('selected');
            }
            
            // Agregar click y touch listeners
            if (person.name === 'Deivid') {
                iconImg.addEventListener('click', handleDeividClick);
                iconImg.addEventListener('touchend', handleDeividClick);
                iconImg.style.cursor = 'pointer';
            } else if (person.name === 'ankush') {
                iconImg.addEventListener('click', handleAnkushClick);
                iconImg.addEventListener('touchend', handleAnkushClick);
                iconImg.style.cursor = 'pointer';
            } else if (person.name === 'nowzuq') {
                iconImg.addEventListener('click', handleNowzuqClick);
                iconImg.addEventListener('touchend', handleNowzuqClick);
                iconImg.style.cursor = 'pointer';
                // Aplicar glitch si ya tiene 20+ clicks
                if (nowzuqClickCount >= 20) {
                    iconImg.classList.add('glitching');
                }
            } else if (person.name === "Hypno's Lullaby Team") {
                iconImg.addEventListener('click', handleHypnoTeamClick);
                iconImg.addEventListener('touchend', handleHypnoTeamClick);
                iconImg.style.cursor = 'pointer';
            }
            
            portraitsContainer.appendChild(iconImg);
        }
    });
}

// Variables para soporte táctil
let touchStartY = 0;
let touchEndY = 0;

// Función para manejar navegación
function navigateUp() {
    startAudio();
    currentIndex = (currentIndex - 1 + creditsData.length) % creditsData.length;
    updateCredits();
}

function navigateDown() {
    startAudio();
    currentIndex = (currentIndex + 1) % creditsData.length;
    updateCredits();
}

// Función para manejar swipe
function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe hacia arriba - siguiente
            navigateDown();
        } else {
            // Swipe hacia abajo - anterior
            navigateUp();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic = document.getElementById('backgroundMusic');
    
    // Event listeners para flechas
    document.getElementById('upArrow').addEventListener('click', navigateUp);
    document.getElementById('downArrow').addEventListener('click', navigateDown);
    
    // Soporte táctil para flechas
    document.getElementById('upArrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        navigateUp();
    });
    
    document.getElementById('downArrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        navigateDown();
    });
    
    // Eventos para iniciar audio
    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
    document.addEventListener('keydown', startAudio);
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            navigateUp();
        } else if (e.key === 'ArrowDown') {
            navigateDown();
        }
    });
    
    // Soporte para swipe en móviles
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    // Prevenir zoom en doble tap en móviles
    document.addEventListener('touchend', (e) => {
        if (e.target.classList.contains('character-icon')) {
            e.preventDefault();
        }
    });
    
    // Prevenir doble click en iconos
    document.querySelectorAll('.character-icon').forEach(icon => {
        icon.addEventListener('touchstart', (e) => {
            e.preventDefault();
        });
    });
    
    // Inicializar
    updateCredits();
});
