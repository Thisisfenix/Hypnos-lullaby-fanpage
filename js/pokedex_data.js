const pokemonData = [
    {
        name: "Hypno (Safety Lullaby)",
        subtitle: "The Hypnosis Pokémon",
        image: "pokedex/HypnoSafetyLullabyArt.png",
        description: "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
        height: "6'05\"",
        weight: "26.5 lbs"
    },
    {
        name: "Hypno (Left Unchecked)",
        subtitle: "The Hypnosis Pokémon",
        image: "pokedex/HypnoLeftUncheckedArt.png",
        description: "When it is very hungry, it puts humans it meets to sleep, then it feasts on their dreams.",
        height: "6'05\"",
        weight: "26.5 lbs"
    },
    {
        name: "Hypno (Lost Cause)",
        subtitle: "The Hypnosis Pokémon",
        image: "pokedex/HypnoLostCauseArt.png",
        description: "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
        height: "6'05\"",
        weight: "26.5 lbs"
    },
    {
        name: "Gold (Monochrome)",
        subtitle: "The Tortured Trainer",
        image: "pokedex/GoldMonochromeArt.png",
        description: "With Unowns as his puppeteer, his groans are pitiful sparks of hope that Gold is possibly still alive.",
        height: "5'6\"",
        weight: "114 lbs"
    },
    {
        name: "Gold (Frostbite)",
        subtitle: "The Tortured Trainer",
        image: "pokedex/FrostbiteGoldArt.png",
        description: "Determined and filled with hope, this trainer's ignorance gets to him and the Pokémon he loved. His Typhlosion's last breath will be Gold's burden of thinking before acting, even in death.",
        height: "5'6\"",
        weight: "114 lbs"
    },
    {
        name: "Red (Dead Red)",
        subtitle: "The Frozen Trainer",
        image: "pokedex/DeadRedArt.png",
        description: "The Kanto Regions Greatest Champion, residing in isolation with his Pokémon at the freezing top of Mt. Silver. What a fool he was.",
        height: "5'9\"",
        weight: "???"
    },
    {
        name: "Pikachu (Freakachu)",
        subtitle: "The Mouse Pokémon",
        image: "pokedex/FreakachuArt.png",
        description: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.",
        height: "1'04\"",
        weight: "13.2 lbs"
    },
    {
        name: "Silver",
        subtitle: "The Silenced Trainer",
        image: "pokedex/SilverArt.png",
        description: "Certain Pokémon have been able to hear the muffled screams and wails this trainer does. When they hear it, their faces are filled with fear.",
        height: "5'7\"",
        weight: "140 lbs"
    },
    {
        name: "Feraligatr",
        subtitle: "The Big Jaw Pokémon",
        image: "pokedex/FeraligatrSleepyArt.png",
        description: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
        height: "7'07\"",
        weight: "195.8 lbs"
    },
    {
        name: "Missingno",
        subtitle: "???",
        image: "pokedex/MissingnoArt.png",
        description: "MissingNo. is a glitch type Pokémon in Pokémon Red, Blue and Yellow. The glitch occurs due to a bug in the game's programming from the Old Man battle, and others.",
        height: "10'0\"",
        weight: "3507.2 lbs"
    },
    {
        name: "Buried Alive (+ Co)",
        subtitle: "The Imprisoned Half-Man",
        image: "pokedex/BuriedAliveCoArt.png",
        description: "Buried at the top of Pokémon Tower, his attempts to break free from his grave causes subtle but noticeable rumbles throughout the whole tower with anyone inside.",
        height: "???",
        weight: "???"
    },
    {
        name: "S!3V3N",
        subtitle: ". . .",
        image: "pokedex/StevenArt.png",
        description: "After the tragic events of his beloved Miki, he wanders from town to town in sorrow and anger. Any Wild Pokémon he comes in contact with completely ignore him.",
        height: "7'1\"",
        weight: "???"
    },
    {
        name: "Glitchy Red",
        subtitle: "The Sentient Glitch",
        image: "pokedex/GlitchyRedArt.png",
        description: "A misfortunate trainer designed to be wronged by his creator, forever trapped in a box, to be forgotten and replaced by the next generation.",
        height: "6'9\"",
        weight: "???"
    },
    {
        name: "DISABLED",
        subtitle: "The Balloon Pokémon",
        image: "pokedex/DISABLEDArt.png",
        description: "A Wigglytuff received through trade, with it's name in all capital letters. It only knew four moves, but all of them were disabled. And so it struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles, and struggles.",
        height: "3'03\"",
        weight: "26.5 lbs"
    },
    {
        name: "Ponyta",
        subtitle: "The Fire Horse Pokémon",
        image: "pokedex/PonytaArt.png",
        description: "It is a weak runner immediately after birth. It gradually becomes faster by chasing after its parents.",
        height: "3'03\"",
        weight: "66.1 lbs"
    },
    {
        name: "Hell Bell (+ Old Man)",
        subtitle: "The Bronze Bell Pokémon",
        image: "pokedex/BeelzeAndHellBellArt.png",
        description: "A Bronzong with all its stats saying 666. Upon receiving it through trade, a piece of mail was attached from it, the owner's name being \"Beelze.\"",
        height: "666'",
        weight: "666 lbs"
    },
    {
        name: "Purin",
        subtitle: "The Balloon Pokémon",
        image: "pokedex/PurinArt.png",
        description: "This unknown form of Jigglypuff appears to have a far deadlier Sing ability than usual, be cautious.",
        height: "1'08\"",
        weight: "12.1 lbs"
    },
    {
        name: "Nurse Joy (+ Co)",
        subtitle: "",
        image: "pokedex/NurseJoyArt.png",
        description: "This kind-hearted Nurse Joy is a Pokémon caretaker found in an abandoned Pokecenter. She'd do anything for her precious little Pokémon... Anything at all.",
        height: "5'05\"",
        weight: "120 lbs"
    },
    {
        name: "Shinto",
        subtitle: "The Bootleg Pokémon",
        image: "pokedex/ShintoArt.png",
        description: "SHINTO SO COOL!!!! SHINJTO NOT FROM BOOT LEG GAME BUT FROM REAL ONE!!!! PLAY WITH ME???",
        height: "TALL",
        weight: "NOT FAT"
    },
    {
        name: "Grey",
        subtitle: "The Bootleg Trainer",
        image: "pokedex/GreyArt.png",
        description: "Rumors say the developers that created this character couldn't be bothered to code him, so they trapped the soul of a dead kid in it and called it a day.",
        height: "5'7\"",
        weight: "116 lbs"
    },
    {
        name: "Shitno",
        subtitle: ". . .",
        image: "pokedex/ShitnoArt.png",
        description: "Her name is actually Shinto, but due to the fact that it's not possible to beat her in the game she's from, players nicknamed her 'Shitno.' The only way to capture her would be to use a hacked copy and go beyond the glitched difficulty cap. But you don't want to do that...",
        height: "???",
        weight: "???"
    },
    {
        name: "Hypno (Pasta Night)",
        subtitle: "The Hypnosis Pokémon",
        image: "pokedex/HypnoPastaNightArt.png",
        description: "Hypno holds a pendulum in its hand. It refuses to let go or put anything else in its hands, so it uses to psychic abilities to lift other objects",
        height: "6'05\"",
        weight: "26.5 lbs"
    },
    {
        name: "Lord X",
        subtitle: "",
        image: "pokedex/LordXLullabyArt.png",
        description: "A sinister entity comprised solely of VOID energy, doing whatever it likes so long as it satisfies them. Seems like an innocent game of cards, but things are sure to turn deadly.",
        height: "3'03\"",
        weight: "77 lbs"
    },
    {
        name: "MX",
        subtitle: "",
        image: "pokedex/MXLullabyArt.png",
        description: "This maniac version of Mario resides within an NES Mario cartridge with the sole purpose of torturing the soul of an innocent child. Although today he's just here to play some cards.",
        height: "12'0\"",
        weight: "???"
    }
];