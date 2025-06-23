const pokemonData = [
    {
        name: "Hypno (Safety Lullaby)",
        image: "path/to/hypno_safety_lullaby.png", // Cambia a la ruta real
        description: "Hypno uses his pendulum to put people to sleep. This form is known for its eerie lullabies."
    },
    {
        name: "Hypno (Left Unchecked)",
        image: "path/to/hypno_left_unchecked.png", // Cambia a la ruta real
        description: "This form of Hypno is highly dangerous, with hypnosis powers that have gone out of control."
    },
    {
        name: "Hypno (Lost Cause)",
        image: "path/to/hypno_lost_cause.png", // Cambia a la ruta real
        description: "Hypno in this state is extremely unpredictable, known for wandering aimlessly."
    }
    // Agrega más objetos según sea necesario
];

let currentIndex = 0;

function updatePokedex() {
    const currentPokemon = pokemonData[currentIndex];
    document.getElementById("pokemon-name").innerText = currentPokemon.name;
    document.getElementById("pokemon-image").src = currentPokemon.image;
    document.getElementById("pokemon-image").alt = currentPokemon.name;
    document.getElementById("pokemon-description").innerText = currentPokemon.description;
}

function navigate(direction) {
    if (direction === 'previous') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : pokemonData.length - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex < pokemonData.length - 1) ? currentIndex + 1 : 0;
    }
    updatePokedex();
}

// Inicializar con el primer Pokémon
updatePokedex();
