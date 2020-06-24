const Discord = require('discord.js');
const { version } = require('../config.json');
const { name, itemcount, bulbsneeded, mainprize, grandprize, enddate } = require('../config/prizemap.json');

const PrizeMapEmbed = new Discord.MessageEmbed()
    .setColor('#805304')
    .setTitle(`${name} Prize Map`)
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Prizes', value: `${itemcount}`, inline: true},
        { name: 'Bulbs Needed', value: `${bulbsneeded}`, inline: true},
        { name: 'Main Prize', value: `${mainprize}`},
        { name: 'Grand Prize', value: `${grandprize}`},
        { name: 'Check Other Prize Map Rewards', value: 'pvz.prizemap list'}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const PrizeMapList = new Discord.MessageEmbed()
    .setColor('#805304')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

var bulb = '<:prizebulb:721918291400196126>';
var star = '<:rainbowstar:724372673056210945>';

module.exports = {
    name: 'prizemap',
    description: 'Check Prize Map information.',
    execute(message, args){
        if (args[0] === 'list')
        {
            if (args[1] === '1')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 1/5)');
                PrizeMapList.setDescription(`[1] Shish Kabob - Emoji ${bulb} 3\n[2] Sky Celebration - 80s Action Hero Gesture ${bulb} 7\n[3] Kick Somoe Grass - Expression ${bulb} 3\n[4] Beetle Boxing - Punchers ${bulb} 3\n`
                + `[5] ${star} 50 ${bulb} 0\n[6] Jungle Shook - Victory Slab ${bulb} 5\n[7] Aztec Support - Wizard Spectrum Hat ${bulb} 7\n[8] Beautiful Day - Emoji ${bulb} 3\n[9] Propeller Head - Chomper Accessory (Adorkable Set) ${bulb} 7`
                + '\n\nType in "pvz.prizemap list 2" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '2')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 2/5)');
                PrizeMapList.setDescription(`[10] Which Way? - Expression ${bulb} 3\n[11] Sweet Truth - Punchers ${bulb} 3\n[12] The Zombies Are Coming - Expression ${bulb} 3\n[13] Majorly Magenta - Space Cadet Costume ${bulb} 10\n`
                + `[14] That\'s Cool - Emoji ${bulb} 3\n[15] Gotta Pinata - Victory Slab ${bulb} 5\n[16] Kick The Bucket - Emoji ${bulb} 3\n[17] Brace Yourself - Chomper Accessory (Adorkable Set) ${bulb} 7\n[18] Get Off My Lawn - Expression ${bulb} 3\n[19] ${star} 50 ${bulb} 0`
                + '\n\nType in "pvz.prizemap list 3" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '3')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 3/5)');
                PrizeMapList.setDescription(`[20] In The Doghouse - Victory Slab ${bulb} 5\n[21] See You Later - Expression ${bulb} 3\n[22] Blasting Cap - Acorn Gesture ${bulb} 7\n[23] Chow Down - Punchers ${bulb} 3\n[24] ${star} 50 ${bulb} 0\n`
                + `[25] Sooo Hot - Emoji ${bulb} 3\n[26] Crew Neck - Chomper Accessory (Adorkable Set) ${bulb} 7\n[27] High Five! - Expression ${bulb} 3\n[28] Mask For Trouble - Sunflower Spectrum Hat ${bulb} 7\n[29] Oh Hai - Expression ${bulb} 3`
                + '\n\nType in "pvz.prizemap list 4" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '4')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 4/5)');
                PrizeMapList.setDescription(`[30] Neon Gear Chandelier - Electric Slide Spectrum Hat ${bulb} 7\n[31] Peace - Emoji ${bulb} 3\n[32] Praise Dummy! - Expression ${bulb} 3\n[33] They Ant, No Picnic - Victory Slab ${bulb} 5\n[34] Fight Or Flight? - Punchers ${bulb} 3\n`
                + `[35] Noble Glasses - Chomper Accessory (Adorkable Set) ${bulb} 7\n[36] Revive Friends - Expression ${bulb} 3\n[37] Hot Air Time Machine - Victory Slab ${bulb} 5\n[38] You\'re a Wizard - Expression ${bulb} 3\n[39] The Big Fin-Ish - Chomper Hat ${bulb} 20`
                + '\n\nType in "pvz.prizemap list 5" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '5')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 5/5)');
                PrizeMapList.setDescription(`[40] Confused Fuse - Captain Deadbeard Gesture ${bulb} 7\n[41] Fast Food - Punchers ${bulb} 3\n[42] Future Crop - Peashooter Costume (Main Prize) ${bulb} 20\n[43] Highly Decorated Crop - Peashooter Costume (Grand Prize)`);
                message.channel.send(PrizeMapList);
            }
            else {
                PrizeMapList.setTitle('Prize Map Rewards (Page 1/5)');
                PrizeMapList.setDescription('[1] Shish Kabob - Emoji\n[2] Sky Celebration - 80s Action Hero Gesture\n[3] Kick Somoe Grass - Expression\n[4] Beetle Boxing - Punchers\n'
                + `[5] ${star} 50\n[6] Jungle Shook - Victory Slab\n[7] Aztec Support - Wizard Hat\n[8] Beautiful Day - Emoji\n[9] Propeller Head - Chomper Accessory (Adorkable Set)`
                + '\n\nType in "pvz.prizemap list 2" to view the next page.');
                message.channel.send(PrizeMapList);
            }
        }
        else
        {
            var mapEndsIn = new Date(`${enddate}`).getTime();
        var now = new Date().getTime();
        var timeLeft = mapEndsIn - now;

        var weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor(timeLeft % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (weeks > 0)
            PrizeMapEmbed.setDescription('Time Remaining - ' + weeks + "w " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        else if (weeks === 0)
            PrizeMapEmbed.setDescription('Time Remaining - ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        else if (days === 0)
            PrizeMapEmbed.setDescription('Time Remaining - ' + hours + "h " + minutes + "m " + seconds + "s ");
        else if (hours === 0)
            PrizeMapEmbed.setDescription('Time Remaining - ' + seconds + "s ");
        else if (timeLeft < 0)
        {
            PrizeMapEmbed.setDescription('Prize Map ended.')
        }

        message.channel.send(PrizeMapEmbed);
        }
        
    }
}