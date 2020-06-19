const Discord = require('discord.js');
const { version } = require('../config.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#e5964f')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let challenge1 = '(<:rainbowstar:722757038442020896> 10)';
let challenge2 = '(<:rainbowstar:722757038442020896> 20)';
let challenge3 = '(<:rainbowstar:722757038442020896> 30)';

module.exports = {
    name: 'eventlist',
    description: 'Get event data',
    execute(message, args) {
        args[0].toLowerCase();
        if (args[0] === 'The' && args[1] === 'Reinforcements')
        {
            EventEmbed.setTitle('The Reinforcements (BFN)');
            EventEmbed.setDescription('Acorn, Night Cap, Snapdargon, Space Cadet, 80s Action Hero, and Electric Slide take to the battlefield in this wacky and fun mode.\n\n'
            + 'Game Mode\nTeam Vanquish\n\nPermitted Characters\nNight Cap, Snapdragon, Acorn, 80s Action Hero, Electric Slide, Space Cadet');
        }
        else if (args[0] === 'Rando')
        {
            if (args[1] === 'Confirmed')
            {
                EventEmbed.setTitle('Rando Confirmed');
                EventEmbed.setDescription('Description\nSpawn as a random character each time you get canquished in Vanquish Confirmed.\n\n'
                + `Game Mode\nVanquish Confirmed\n\nPermitted Characters\nAll (Randomized)\n\nChallenges\n1. Win a Match ${challenge1}\n2. Get 15 Vanquishes ${challenge2}\n3. Confirm 10 Vanquishes ${challenge3}`);
            }
            else if (args[1] === 'Ops')
            {
                EventEmbed.setTitle('Rando Ops');
                EventEmbed.setDescription('Spawn as random characters and battle waves of enemies in Ops!\n\nGame Mode\nOps\n\nPermitted Characters\nAll (Randomized)\n\n'
                + `Challenges\n1. Complete Rando Ops ${challenge1}\n2. Complete Rando Ops Without Being Vanquished ${challenge2}\n3. Complete Rando Ops Five Times ${challenge3}`);
            }
        }
        else if (args[0] === 'Space' && args[1] === 'Nuts')
        {
            EventEmbed.setTitle('Space Nuts');
            EventEmbed.setDescription('A not-so-classic Suburbination face-off between Space Cadets and those pesky little Acorns!\n\nGame Mode\nSuburbination\n\nPermitted Characters\nAcorn, Space Cadet\n\n'
            + `Challenges\n1. Get 1 Vanquish as Oak or Space Station ${challenge1}\n2. Get 10 Vanquishes as a Passenger on Oak or Space Station ${challenge2}\n3. Get 10 Objective Captures ${challenge3}`);
        }
        else if (args[0] === 'Boss')
        {
            if (args[1] === 'Team' && args[2] === 'Vanquish')
            {
                EventEmbed.setTitle('Boss Team Vanquish');
                EventEmbed.setDescription('Team Vanquish with a twist! AI bosses will spawn throughout the match. Vanquish the opponent team\'s boss for extra points!\n\nGame Mode\nTeam Vanquish\n\nPermitted Characters\nAll\n\n'
                + `Challenges\n1. Win a Match ${challenge1}\n2. Vanquish a Boss ${challenge2}\n3. Vanquish a Boss and win the Match ${challenge3}`);
            }
            else if (args[1] === 'Turf' && args[2] === 'Takeover')
            {
                EventEmbed.setTitle('Boss Turf Takeover');
                EventEmbed.setDescription('8v8 Turf Takeover where teams not only battle over turf, but also compete for the Boss Chest to spawn an AI boss for their cause!\n\nGame Mode\nTurf Takeover\n\nPermitted Characters\nAll\n\n'
                + `Challenges\n1. Open a Boss Chest ${challenge1}\n2. Vanquish a Boss ${challenge2}\n3. Win 5 Matches ${challenge3}`);
            }
        }
        else if (args[0] === 'Turf' && args[1] === 'Takeover' && args[2] === 'Tactical')
        {
            EventEmbed.setTitle('Turf Takeover Tactical');
            EventEmbed.setDescription('8v8 Turf Takeover: Where teamwork is more essential than ever.\n\nGame Mode\nTurf Takeover\n\nPermitted Characters\nAll\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Win a Match with 8 Vanquishes ${challenge2}\n3. Get a Vanquish Streak of 4 ${challenge3}`);
        }
        else if (args[0] === 'Garden' && args[1] === 'Warfare')
        {
            EventEmbed.setTitle('Garden Warfare');
            EventEmbed.setDescription('Classic characters from the original Garden Warfare battle in the ultimate Gnome Bomb showdown!\n\nGame Mode\nGnome Bomb\n\nPermitted Characters\nPeashooter, Chomper, Cactus, Sunflower, Foot Soldier, All-Star, Scientist, Engineer\n\n'
            + `Challenges\n1. Get 3 Vanquishes in a Match ${challenge1}\n2. Win 3 Matches ${challenge2}\n3. Plant and Detonate the Bomb Once as Each Faction ${challenge3}`);
        }
        else if (args[0] === 'Ranged' && args[1] === 'Renegades')
        {
            EventEmbed.setTitle('Ranged Renegades');
            EventEmbed.setDescription('It\'s a long distance Team Vanquish relationship between the prickly Cactus and salty Captain Deadbeard.\n\nGame Mode\nTeam Vanquish\n\nPermitted Characters\nCactus, Captain Deadbeard\n\n'
            + `Challenges\n1. Get 3 Vanquishes as a Drone ${challenge1}\n2. Get 3 Potato Mine or Barrel Blast Vanquishes in a Match ${challenge2}\n3. Get 5 Critical Vanquishes in a Match ${challenge3}`);
        }
        else if (args[0] === 'Power' && args[1] === 'Team' || args[2] === 'Vanquish')
        {
            EventEmbed.setTitle('Power Team Vanquish');
            EventEmbed.setDescription('What\'s in a Crystal Dog anyway? Well, only UNLIMITED POWER! (Disclaimer: Unlimited power only lasts a limited time, some exceptions may apply).\n\nGame Mode\nTeam Vanquish\n\nPermitted Characters\nAll\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Vanquish an Enemy While Invincible ${challenge2}\n3. Get 3 Vanquishes While Invincible in a Single Spawn ${challenge3}`);
        }
        else if (args[0] === 'Collision' && args[1] === 'Course')
        {
            EventEmbed.setTitle('Collision Course');
            EventEmbed.setDescription('The titans of teaming up are set on a collision course, with only healers and tanks to contain the fury (or add to it-your choice).\n\nGame Mode\nGnome Bomb\n\nPermitted Characters\nCitron, Acorn, Sunflower, All-Star, Space Cadet, Scientist\n\n'
            + `Challenges\n1. Get 15 Vanquishes ${challenge1}\n2. Vanquish the Bomb Carrier ${challenge2}\n3. Plant and Detonate the Bomb Once as Each Faction ${challenge3}`);
        }
        else if (args[0] === 'Back-Up' && args[1] === 'In' && args[2] === 'Arms')
        {
            EventEmbed.setTitle('Back-Up In Arms');
            EventEmbed.setDescription('The plants and zombies send their support classes to face off in a breathtaking battle of the buff-givers!\n\nGame Mode\nTurf Takeover\n\nPermitted Characters\nSunflower, Rose, Engineer, Scientist, Wizard\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Vanquish 10 Capturing Heroes ${challenge2}\n3. Vanquish 10 Heroes While Defending the Point ${challenge3}`);
        }
        else if (args[0] === 'Lunchtime' && args[1] === 'at' && args[2] === 'the' && args[3] === 'Lab')
        {
            EventEmbed.setTitle('Lunchtime at the Lab');
            EventEmbed.setDescription('Scientists are about to map the Chomper\'s digestive tract in Lunchtime at the Lab! Who\'ll triumph? Lack-of-brainz or burrowing brawn?\n\nGame Mode\nTeam Vanquish\n\nPermitted Characters\nChomper, Scientist\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Get 30 Vanquishes ${challenge2}\n3. Win 3 Matches ${challenge3}`);
        }
        else if (args[0] === 'Up-Close' && args[1] === '&' && args[2] === 'Impersonal')
        {
            EventEmbed.setTitle('Up-Close & Impersonal');
            EventEmbed.setDescription('Brawlers and long-shot callers hit the battlefield to get up-close and impersonal!\n\nGame Mode\nVanquish Confirmed\n\nPermitted Characters\nSnapdragon, Cactus, Super Brainz, Captain Deadbeard\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Get 20 Critical Hits ${challenge2}\n3. Confirm 20 Vanquishes ${challenge3}`);
        }
        else if (args[0] === 'My' && args[1] === 'Turf,' && args[2] === 'My' && args[3] === 'Rules')
        {
            EventEmbed.setTitle('My Turf, My Rules');
            EventEmbed.setDescription('Control the situation with these crowd dis-pleasers.\n\nGame Mode\nTurf Takeover\n\nPermitted Characters\nSnapdragon, Rose, Super Brainz, Electric Slide\n\n'
            + `Challenges\n1. Get 3 Vanquishes in a Match ${challenge1}\n2. Win 2 Matches ${challenge2}\n3. Deal 10,000 Damage ${challenge3}`);
        }
        else if (args[0] === 'Satellite' && args[1] === 'Takeover')
        {
            EventEmbed.setTitle('Satellite Takeover');
            EventEmbed.setDescription('A satellite has gone rogue! Hop to it in Turf Takeover.\n\nGame Mode\nTurf Takeover\n\nPermitted Characters\nAll\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Deal 7,000 Damage ${challenge2}\n3. Complete 5 Matches ${challenge3}`);
        }
        else if (args[0] === 'Harm,' && args[1] === 'Help,' && args[2] === 'Hinder')
        {
            EventEmbed.setTitle('Harm, Help, Hinder');
            EventEmbed.setDescription('Outmaneuver your opponents with these sneaky heroes and their big buddies.\n\nGame Mode\nVanquish Confirmed\n\nPermitted Characters\nNight Cap, Acorn, Sunflower, Imp, Captain Deadbeard, Scientist\n\n'
            + `Challenges\n1. Get 15 Vanquishes ${challenge1}\n2. Deal 7,000 Damage ${challenge2}\n3. Complete 5 Matches ${challenge3}`);
        }
        else if (args[0] === 'Oops!' && args[1] === 'Too,' && args[2] === 'Many' && args[3] === 'Players')
        {
            EventEmbed.setTitle('Oops! Too Many Players');
            EventEmbed.setDescription('Oops! We let too many players into the Funderdome. Elbow to Petal, Foot to Leaf--there\'s no room to hide, so get vanquishing!\n\nGame Mode\nTeam Vanquish\n\nPermitted Characters\nAll\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Deal 10,000 Damage ${challenge2}\n3. Get 35 Vanquishes ${challenge3}\n`);
        }
        else if (args[0] === 'Cool' && args[1] === 'Explosions' && args[2] === 'Only')
        {
            EventEmbed.setTitle('Cool Explosions Only');
            EventEmbed.setDescription('Cool dudes usually don\'t look at explosions, but with so many going off it\'s hard not to. Bombs, Beans, and Fireballs all go BOOM this week!\n\nGame Mode\nGnome Bomb\n\nPermitted Characters\nPeashooter, Kernel Corn, Snapdragon, Foot Soldier, Super Brainz, 80s Action Hero\n\n'
            + `Challenges\n1. Win a Match ${challenge1}\n2. Get 20 Vanquishes ${challenge2}\n3. Win 3 Matches ${challenge3}`)
        }
        else if (args[0] === 'list')
        {
            EventEmbed.setTitle('List of Weekly Events');
            EventEmbed.setDescription('"The Reinforcements"\t"Rando Confirmed"\t"Space Nuts"\n"Rando Ops"\t"Boss Team Vanquish"\t"Turf Takeover Tactical"\n"Garden Warfare"\t"Ranged Renegades"\t"Power Team Vanquish"\n"Collision Course"\t"Back-Up In Arms"\t"Lunchtime at the Lab"\n"Up-Close & Impersonal"\t"My Turf, My Rules"\t"Satellite Takeover"\n"Harm, Help, Hinder"\t"Oops! Too Many Players"\t"Cool Explosions Only"');
        }
        else
        {
            EventEmbed.setTitle('Invalid Event');
            EventEmbed.setDescription('Looks like you entered in something that wasn\'t an event. Please refer to pvz.eventdata list');
        }
        message.channel.send(EventEmbed);
    }
}
