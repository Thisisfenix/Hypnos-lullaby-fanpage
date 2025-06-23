document.addEventListener('DOMContentLoaded', () => {
    const creditItems = document.querySelectorAll('.credit-item');
    let currentIndex = 0;
    
    function updateDisplay() {
        creditItems.forEach((item, index) => {
            item.style.display = (index === currentIndex) ? 'flex' : 'none';
        });
    }
    
    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = creditItems.length - 1;
        }
        updateDisplay();
    });
    
    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < creditItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateDisplay();
    });

    // Inicia la música al cargar la página
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();

    // Inicializar la visualización
    updateDisplay();
});
