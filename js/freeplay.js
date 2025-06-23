// Lista de canciones con sus imágenes y enlaces a las páginas HTML correspondientes
const songs = [
    {
        title: "Song 1 - Safety Lullaby",
        image: "gifs/SafetyLullaby.gif",
        link: "mod1.html" // Link a la página del mod 1
    },
    {
        title: "Song 2 - Left Unchecked",
        image: "gifs/LeftUnchecked.gif",
        link: "mod2.html" // Link a la página del mod 2
    },
    {
        title: "Song 3 - Lost Cause",
        image: "gifs/LostCause.gif",
        link: "mod3.html" // Link a la página del mod 3
    }
];

let currentSongIndex = 0;

const songDisplay = document.getElementById("songDisplay");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSong() {
    // Crear un nuevo elemento para la nueva canción
    const newSongBox = document.createElement("div");
    newSongBox.className = "song-box";
    newSongBox.innerHTML = `
        <img class="mod-image" src="${songs[currentSongIndex].image}" alt="${songs[currentSongIndex].title}">
        <div class="mod-title">${songs[currentSongIndex].title}</div>
    `;

    // Agregar el nuevo elemento al DOM
    songDisplay.appendChild(newSongBox);

    // Aplicar animación para deslizar
    newSongBox.style.transform = "translateX(100%)"; // Deslizar desde la derecha
    requestAnimationFrame(() => {
        newSongBox.style.transition = "transform 0.5s ease";
        newSongBox.style.transform = "translateX(0)"; // Deslizar hacia su posición original
    });

    // Remover el elemento antiguo
    const oldSongBox = songDisplay.querySelector(".song-box");
    if (oldSongBox) {
        oldSongBox.style.transition = "transform 0.5s ease";
        oldSongBox.style.transform = "translateX(-100%)"; // Deslizar hacia la izquierda
        setTimeout(() => {
            oldSongBox.remove(); // Eliminar después de la animación
        }, 500); // Tiempo de la transición
    }
}

// Eventos para cambiar de canción
prevButton.addEventListener("click", () => {
    // Cambiar a la canción anterior
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    updateSong();
});

nextButton.addEventListener("click", () => {
    // Cambiar a la siguiente canción
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    updateSong();
});

// Redirigir al HTML correspondiente cuando se haga clic en el cuadro de la canción
songDisplay.addEventListener("click", () => {
    window.location.href = songs[currentSongIndex].link;
});

// Llamada inicial para mostrar la primera canción
updateSong();
