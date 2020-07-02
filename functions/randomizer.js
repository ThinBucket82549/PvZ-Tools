// Plants vs. Zombies: Garden Warfare Definitions
var gw1plants = ["Peashooter", "Fire Pea", "Ice Pea", "Toxic Pea", "Commando Pea", "Agent Pea", "Law Pea", "Berry Pea", "Plasma Pea",
                "Chomper", "Fire Chomper", "Hot-Rod Chomper", "Power Chomper", "Count Chompula", "Toxic Chomper", "Armor Chomper",
                "Chester Chomper", "Chomp Thing", "Sunflower", "Fire Flower", "Power Flower", "Shadow Flower", "Mystic Flower",
                "Metal Petal", "Sun Pharaoh", "Alien Flower", "Cactus", "Fire Cactus", "Power Cactus", "Future Cactus",
                "Power Cactus", "Camo Cactus", "Bandit Cactus", "Citrus Cactus", "Jade Cactus"];

var gw1zombies = ["Foot Soldier", "Arctic Trooper", "Super Commando", "Tank Commander", "General Supremo", "Camo Ranger",
                "Sky Trooper", "Centurion", "Engineer", "Welder", "Electrician", "Mechanic", "Plumber", "Painter",
                "Landscaper", "Sanitation Expert", "Scientist", "Marine Biologist", "Physicist", "Dr. Toxic", "Astronaut",
                "Chemist", "Archaeologist", "Dr. Chester", "Paleontologist", "All-Star", "Cricket Star", "Hocky Star",
                "Goalie Star", "Rugby Star", "Baseball Star", "Wrestling Star", "Golf Star"];

function randomgw1plant () {
    var randomPlant = Math.floor(Math.random()*gw1plants.length);

    switch (randomPlant) {
        case 0:
            return 'Peashooter';
        case 1:
            return 'Fire Pea';
        case 2:
            return 'Ice Pea';
        case 3:
            return 'Toxic Pea';
        case 4:
            return 'Commando Pea';
        case 5:
            return 'Agent Pea';
        case 6:
            return 'Law Pea';
        case 7:
            return 'Berry Pea';
        case 8:
            return 'Plasma Pea';
        case 9:
            return 'Chomper';
        case 10:
            return 'Fire Chomper';
        case 11:
            return 'Power Chomper';
        case 12:
            return 'Hot-Rod Chomper';
        case 13:
            return 'Count Chompula';
        case 14:
            return 'Toxic Chomper';
        case 15:
            return 'Armor Chomper';
        case 16:
            return 'Chester Chomper';
        case 17:
            return 'Chomp Thing';
        case 18:
            return 'Sunflower';
        case 19:
            return 'Fire Flower';
        case 20:
            return 'Power Flower';
        case 21:
            return 'Shadow Flower';
        case 22:
            return 'Mystic Flower';
        case 23:
            return 'Metal Petal';
        case 24:
            return 'Sun Pharaoh';
        case 25:
            return 'Alien Flower';
        case 26:
            return 'Cactus';
        case 27:
            return 'Fire Cactus';
        case 28:
            return 'Ice Cactus';
        case 29:
            return 'Power Cactus';
        case 30:
            return 'Future Cactus';
        case 31:
            return 'Camo Cactus';
        case 32:
            return 'Bandit Cactus';
        case 33:
            return 'Citrus Cactus';
        case 34:
            return 'Jade Cactus';
    }
}

function randomgw1zombie () {
    var randomZombie = Math.floor(Math.random()*gw1zombies.length);

    switch (randomZombie)
    {
        case 0:
            return 'Foot Soldier';
        case 1:
            return 'Arctic Trooper';
        case 2:
            return 'Super Commando';
        case 3:
            return 'Tank Commander';
        case 4:
            return 'General Supremo';
        case 5:
            return 'Camo Ranger';
        case 6:
            return 'Sky Trooper';
        case 7:
            return 'Centurion';
        case 8:
            return 'Engineer'
        case 9:
            return 'Welder';
        case 10:
            return 'Electrician';
        case 11:
            return 'Mechanic';
        case 11:
            return 'Plumber';
        case 12:
            return 'Painter';
        case 13:
            return 'Landscpaer';
        case 14:
            return 'Sanitation Expert';
        case 15:
            return 'Scientist';
        case 16:
            return 'Marine Biologist';
        case 17:
            return 'Physicist';
        case 18:
            return 'Dr. Toxic';
        case 19:
            return 'Astronaut';
        case 20:
            return 'Chemist';
        case 21:
            return 'Archeologist';
        case 22:
            return 'Dr. Chester';
        case 23:
            return 'Paleontologist';
        case 24:
            return 'All-Star';
        case 25:
            return 'Cricket Star';
        case 26:
            return 'Hockey Star';
        case 27:
            return 'Goalie Star';
        case 28:
            return 'Rugby Star';
        case 29:
            return 'Baseball Star';
        case 30:
            return 'Wrestling Star';
        case 31:
            return 'Golf Star';
    }
}

var gw2plants = ["Peashooter", "Fire Pea", "Ice Pea", "Toxic Pea", "Commando Pea", "Agent Pea", "Law Pea", "Plasma Pea",
                "Rock Pea", "Electro Pea", "Chomper", "Fire Chomper", "Hot-Rod Chomper", "Power Chomper", "Count Chompula",
                "Toxic Chomper", "Armor Chomper", "Chomp Thing", "Yeti Chomper", "Disco Chomper", "Unicorn Chomper",
                "Twilight Chomper", "Sunflower", "Fire Flower", "Power Flower", "Shadow Flower", "Mystic Flower",
                "Metal Petal", "Sun Pharaoh", "Alien Flower", "Vampire Flower", "Stuffy Flower", "Cactus", "Fire Cactus", 
                "Power Cactus", "Future Cactus", "Power Cactus", "Camo Cactus", "Bandit Cactus", "Jade Cactus", "Zen Cactus",
                "Petrified Cactus", "Citron", "Ice Citron", "Electro Citron", "Iron Citron", "Party Citron", "Toxic Citron",
                "Rose", "Druid Rose", "Fire Rose", "Frost Rose", "Party Rose", "Nec'Rose", "Kernel Corn", "BBQ Corn",
                "Pops Corn", "Mob Cob", "Party Corn", "Commando Corn", "Torchwood"];

var gw2zombies = ["Foot Soldier", "Arctic Trooper", "Super Commando", "Tank Commander", "General Supremo", "Camo Ranger",
                "Sky Trooper", "Centurion", "Park Ranger", "Scuba Soldier", "Engineer", "Welder", "Electrician", "Mechanic", 
                "Plumber", "Painter", "Landscaper", "Sanitation Expert", "Roadie-Z", "A.C-Perry", "Scientist", "Marine Biologist", 
                "Physicist", "Dr. Toxic", "Astronaut", "Chemist", "Archaeologist", "Paleontologist", "Zoologist", 
                "Computer Scientist", "All-Star", "Cricket Star", "Hocky Star", "Goalie Star", "Rugby Star", 
                "Baseball Star", "Wrestling Star", "Golf Star", "Tennis Star", "Moto-X Star", "Imp", "Lil' Drake", "Pylon Imp",
                "S.H.R.Imp", "Party Imp", "Z7 Imp", "Scallywag Imp", "Super Brainz", "Cozmic Brainz", "Electro Brainz",
                "Toxic Brainz", "Party Brainz", "Breakfast Brainz", "Captain Deadbeard", "Captain Cannon", "Captain Flameface",
                "Captain Sharkbite", "Captain Partyman", "Captain Squawk", "Hovergoat-3000"];

function randomgw2plant () {
    var randomPlant = Math.floor(Math.random()*gw2plants.length);

    switch (randomPlant) {
        case 0:
            return 'Peashooter';
        case 1:
            return 'Fire Pea';
        case 2:
            return 'Ice Pea';
        case 3:
            return 'Toxic Pea';
        case 4:
            return 'Commando Pea';
        case 5:
            return 'Agent Pea';
        case 6:
            return 'Law Pea';
        case 7:
            return 'Plasma Pea';
        case 8:
            return 'Rock Pea';
        case 9:
            return 'Electro Pea';
        case 10:
            return 'Chomper';
        case 11:
            return 'Fire Chomper';
        case 12:
            return 'Hot-Rod Chomper';
        case 13:
            return 'Power Chomper';
        case 14:
            return 'Count Chompula';
        case 15:
            return 'Toxic Chomper';
        case 16:
            return 'Armor Chomper';
        case 17:
            return 'Chomp Thing';
        case 18:
            return 'Yeti Chomper';
        case 19:
            return 'Disco Chomper';
        case 20:
            return 'Unicorn Chomper';
        case 21:
            return 'Twilight Chomper';
        case 22:
            return 'Sunflower';
        case 23:
            return 'Fire Flower';
        case 24:
            return 'Power Flower';
        case 25:
            return 'Shadow Flower';
        case 26:
            return 'Mystic Flower';
        case 27:
            return 'Metal Petal';
        case 28:
            return 'Sun Pharaoh';
        case 29:
            return 'Alien Flower';
        case 30:
            return 'Vampire Flower';
        case 31:
            return 'Stuffy Flower';
        case 32:
            return 'Cactus';
        case 33:
            return 'Fire Cactus';
        case 34:
            return 'Ice Cactus';
        case 35:
            return 'Power Cactus';
        case 36:
            return 'Future Cactus';
        case 37:
            return 'Camo Cactus';
        case 38:
            return 'Bandit Cactus';
        case 39:
            return 'Jade Cactus';
        case 40:
            return 'Zen Cactus';
        case 41:
            return 'Petrified Cactus';
        case 42:
            return 'Citron';
        case 43:
            return 'Frozen Citron';
        case 44:
            return 'Electro Citron';
        case 45:
            return 'Iron Citron';
        case 46:
            return 'Party Citron';
        case 47:
            return 'Toxic Citron';
        case 48:
            return 'Rose';
        case 49:
            return 'Druid Rose';
        case 50:
            return 'Fire Rose';
        case 51:
            return 'Frost Rose';
        case 52:
            return 'Party Rose';
        case 53:
            return 'Nec\'Rose';
        case 54:
            return 'Kernel Corn';
        case 55:
            return 'BBQ Corn';
        case 56:
            return 'Pops Corn';
        case 57:
            return 'Mob Cob';
        case 58:
            return 'Party Corn';
        case 59:
            return 'Commando Corn';
        case 60:
            return 'Torchwood';
    }
}

function randomgw2zombie () {
    var randomZombie = Math.floor(Math.random()*gw2zombies.length);

    switch(randomZombie) {
        case 0:
            return 'Foot Soldier';
        case 1:
            return 'Arctic Trooper';
        case 2:
            return 'Super Commando';
        case 3:
            return 'Tank Commander';
        case 4:
            return 'General Supremo';
        case 5:
            return 'Camo Ranger';
        case 6:
            return 'Sky Trooper';
        case 7:
            return 'Centurion';
        case 8:
            return 'Park Ranger';
        case 9:
            return 'Scuba Soldier';
        case 10:
            return 'Engineer';
        case 11:
            return 'Welder';
        case 12:
            return 'Electrician';
        case 13:
            return 'Mechanic';
        case 14:
            return 'Plumber';
        case 15:
            return 'Painter';
        case 16:
            return 'Landscaper';
        case 17:
            return 'Sanitation Expert';
        case 18:
            return 'Roadie-Z';
        case 19:
            return 'AC Perry';
        case 20:
            return 'Scientist';
        case 21:
            return 'Marine Biologist';
        case 22:
            return 'Physicist';
        case 23:
            return 'Dr. Toxic';
        case 24:
            return 'Astronaut';
        case 25:
            return 'Chemist';
        case 26:
            return 'Archeologist';
        case 27:
            return 'Paleontologist';
        case 28:
            return 'Zoologist';
        case 29:
            return 'Computer Scientist';
        case 30:
            return 'All-Star';
        case 31:
            return 'Cricket Star';
        case 32:
            return 'Hockey Star';
        case 33:
            return 'Goalie Star';
        case 34:
            return 'Rugby Star';
        case 35:
            return 'Baseball Star';
        case 36:
            return 'Wrestling Star';
        case 37:
            return 'Golf Star';
        case 38:
            return 'Tennis Star';
        case 39:
            return 'Moto-X Star';
        case 40:
            return 'Imp';
        case 41:
            return 'Lil\' Drake';
        case 42:
            return 'Pylon Imp';
        case 43:
            return 'S.H.R.Imp';
        case 44:
            return 'Party Imp';
        case 45:
            return 'Z7 Imp';
        case 46:
            return 'Scallywag Imp';
        case 47:
            return 'Super Brainz';
        case 48:
            return 'Cozmic Brainz';
        case 49:
            return 'Electro Brainz';
        case 50:
            return 'Toxic Brainz';
        case 51:
            return 'Party Brainz';
        case 52:
            return 'Breakfast Brainz';
        case 53:
            return 'Captain Deadbeard';
        case 54:
            return 'Captain Cannon';
        case 55:
            return 'Captain Flameface';
        case 56:
            return 'Captain Sharkbite';
        case 57:
            return 'Captain Partyman';
        case 58:
            return 'Captain Squawk';
        case 59:
            return 'Hover Goat-3000';
    }
}

// Plants vs. Zombies: Battle for Neighborville Definitions
var bfnplants = ["Peashooter", "Chomper", "Kernel Corn", "Night Cap", "Snapdragon", "Cactus", "Citron", "Acorn", "Sunflower", "Rose"];
var bfnzombies = ["Foot Soldier", "Imp", "Super Brainz", "80s Action Hero", "Electrict Slide", "All-Star", "Captain Deadbeard", "Space Cadet", "Scientist", "Engineer", "Wizard"];
var HasLegendaryUpg = ["Yes", "No"];

function randomBfnPlant () {
    var randomPlant = Math.floor(Math.random()*bfnplants.length);

    switch (randomPlant)
    {
        case 0:
            return 'Peashooter';
        
        case 1:
            return 'Chomper';
        
        case 2:
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);
            
            switch (useLegendary)
            {
                case 0:
                    return 'Kernel Corn';
                case 1:
                    return 'Kernel Corn - Shogun Guard';
            }
            break;

        case 3:
            return 'Night Cap';

        case 4:
            return 'Snapdragon';

        case 5:
            return 'Cactus';

        case 6:
            return 'Citron';

        case 7:
            return 'Oak & Acorn';
            
        case 8:
            return 'Sunflower';

        case 9:
            
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);

            switch (useLegendary)
            {
                case 0:
                    return 'Rose';
                case 1:
                    return 'Rose - Thorn Apart';
            }
            break;
    }
}

function randomBfnZombie () {
    var randomZombie = Math.floor(Math.random()*bfnzombies.length);
    
    switch (randomZombie)
    {
        case 0:
            return 'Foot Soldier';

        case 1:
            return 'Imp';

        case 2:
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);
            
            switch(useLegendary)
            {
                case 0:
                    return 'Super Brainz';
                case 1:
                    return 'Super Brainz - Brainium Basher 9001';
            }
            

        case 3:
            return '80s Action Hero';

        case 4:
            return 'Electric Slide';

        case 5:
            return 'All-Star';

        case 6:
            return 'Captain Deadbeard';

        case 7:
            return 'Space Cadet';

        case 8:
            
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);

            switch (useLegendary)
            {
                case 0:
                    return 'Scientist';
                case 1:
                    return 'Scientist - Steam Blaster';
            }

            break;

        case 9:
            return 'Engineer';

        case 10:
            return 'Wizard';
    }
}

var gw1gamemodes = ["Welcome Mat", "Team Vanquish", "Gardens & Graveyards", "Gnome Bomb", "Mixed Mode", 
                    "Vanquish Confirmed", "Suburbination", "Taco Bandits"];

function gw1gamemode() {
    var randomGameMode = Math.floor(Math.random()*gw1gamemodes.length);
    switch (randomGameMode)
    {
        case 0:
            return 'Welcome Mat';
        case 1:
            return 'Team Vanquish';
        case 2:
            return 'Gardens & Graveyards';
        case 3:
            return 'Gnome Bomb';
        case 4:
            return 'Mixed Mode';
        case 5:
            return 'Vanquish Confirmed';
        case 6:
            return 'Suburbination';
        case 7:
            return 'Taco Bandits';
    }
}

var gw2gamemodes = ["Welcome Mat", "Mixed Mode", "Turf Takeover", "Team Vanquish", "Gnome Bomb", "Suburbination", "Vanquish Confirmed"];

function gw2gamemode() {
    var randomGameMode = Math.floor(Math.random()*gw1gamemodes.length);
    switch (randomGameMode)
    {
        case 0:
            return 'Welcome Mat';
        case 1:
            return 'Mixed Mode';
        case 2:
            return 'Turf Takeover';
        case 3:
            return 'Team Vanquish';
        case 4:
            return 'Gnome Bomb';
        case 5:
            return 'Suburbination';
        case 6:
            return 'Vanquish Confirmed';
    }
}

var bfngamemodes = ["Weekly Event", "Turf Takeover", "Team Vanquish", "Battle Arena", "Garden & Graveyard Ops", "Mixed Modes"];

function bfngamemode() {
    var randomGameMode = Math.floor(Math.random()*bfngamemodes.length);
    switch (randomGameMode)
    {
        case 0:
            return "Weekly Event";
        case 1:
            return "Turf Takeover";
        case 2:
            return "Team Vanquish";
        case 3:
            return "Battle Arena";
        case 4:
            return "Garden & Graveyard Ops";
        case 5:
            return "Mixed Modes";
    }
}

module.exports = {
    randomgw1plant,
    randomgw1zombie,
    randomgw2plant,
    randomgw2zombie,
    randomBfnPlant,
    randomBfnZombie,
    gw1gamemode,
    gw2gamemode,
    bfngamemode
};