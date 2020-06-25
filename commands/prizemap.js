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

const MapReward = new Discord.MessageEmbed()
    .setColor('#805304')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

var bulb = '<:prizebulb:721918291400196126>';
var star = '<:rainbowstar:724372673056210945>';
var expression = 'https://cdn.discordapp.com/attachments/722937222772293722/725477083073085530/Statement.png';
var starimg = 'https://cdn.discordapp.com/attachments/722937222772293722/725484688839540787/RainbowStars.png';

module.exports = {
    name: 'prizemap',
    description: 'Check Prize Map information.',
    execute(message, args){
        function reward(title, desc, url)
        {
            MapReward.setTitle(title);
            MapReward.setDescription(desc);
            MapReward.setImage(url);
            message.channel.send(MapReward);
        }
        if (args[0] === 'rewards')
        {
            switch (args[1])
            {
                case '1':
                    reward('[1] Shish Kebob', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/725477085031825469/Emoji1.png');
                    break;
                case '2':
                    reward('[2] Sky Celebration', `Cost - ${bulb} 7\n80s Action Hero Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/725477086768267305/Gesture1.png');
                    break;
                case '3':
                    reward('[3] Kick Some Grass', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '4':
                    reward('[4] Beetle Boxing', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/725484685484097626/Puncher1.png`);
                    break;
                case '5':
                    reward('[5] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '6':
                    reward('[6] Jungle Shook', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/725487028505935913/VictorySlab1.png');
                    break;
                case '7':
                    reward('[7] Aztec Support', `Cost - ${bulb} 7\nWizard Spectrum Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/725487021656768532/Custom1.png');
                    break;
                case '8':
                    reward('[8] Beautiful Day', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/725487936715489341/Emoji2.png');
                    break;
                case '9':
                    reward('[9] Propeller Head', `Cost - ${bulb} 7\nChomper Hat (Adorkable Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/725487932886220820/Custom2.png');
                    break;
                case '10':
                    reward('[10] Which Way?', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '11':
                    reward('[11] Sweet Truth', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/725489564143190076/Puncher2.png');
                    break;
                case '12':
                    reward('[12] The Zombies Are Coming', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '13':
                    reward('[13] Majorly Magenta', `Cost - ${bulb} 10\nSpace Cadet Costume`, `https://cdn.discordapp.com/attachments/722937222772293722/725489575476330596/Costume1.png`);
                    break;
                case '14':
                    reward('[14] That\'s Cool', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/725489602785443881/Emoji4.png');
                    break;
                case '15':
                    reward('[15] Gotta Pinata', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/725490379318755449/VictorySlab2.png');
                    break;
                case '16':
                    reward('[16] Kick The Bucket', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/725490374054772747/Emoji3.png');
                    break;
                case '17':
                    reward('[17] Brace Yourself', `Cost - ${bulb} 7\nChomper Accessory (Adorkable Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/725490373647925248/Custom3.png');
                    break;
                case '18':
                    reward('[18] Get Off My Lawn', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '19':
                    reward('[19] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '20':
                    reward('[20] In The Doghouse', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/725491686687375380/VictorySlab3.png');
                    break;
                case '21':
                    reward('[21] See You Later', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '22':
                    reward('[22] Blasting Cap', `Cost - ${bulb} 7\nAcorn Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/725491703783358506/Gesture2.png');
                    break;
                case '23':
                    reward('[23] Chow Down', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/725491730023055450/Puncher3.png');
                    break;
                case '24':
                    reward('[24] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '25':
                    reward('[25] Sooo Hot', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/725493286051250275/Emoji5.png');
                    break;
                case '26':
                    reward('[26] Crew Neck', `Cost - ${bulb} 7\nChomper Accessory (Adorkable Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/725493302803169400/Custom4.png');
                    break;
                case '27':
                    reward('[27] High Five!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '28':
                    reward('[28] Mask For Trouble', `Cost - ${bulb} 7\nSunflower Spectrum Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/725493318930399252/Custom5.png');
                    break;
                case '29':
                    reward('[29] Oh Hai', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '30':
                    reward('[30] Neon Gear Chandelier', `Cost - ${bulb} 7\nElectric Slide Spectrum Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/725494475979358271/Custom6.png');
                    break;
                case '31':
                    reward('[31] Peace', `Cost - ${bulb} 3\nExpression`, 'https://cdn.discordapp.com/attachments/722937222772293722/725494493079535736/Emoji6.png');
                    break;
                case '32':
                    reward('[32] Praise Dummy!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '33':
                    reward('[33] They Ant, No Picnic', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/725495199416975569/VictorySlab4.png');
                    break;
                case '34':
                    reward('[34] Fight Or Flight?', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/725495257663406100/Puncher4.png');
                    break;
                case '35':
                    reward('[35] Noble Glasses', `Cost - ${bulb} 7\nChomper Accessory (Adorkable Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/725495278827864224/Custom7.png');
                    break;
                case '36':
                    reward('[36] Revive Friends', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '37':
                    reward('[37] Hot Air Time Machine', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/725496287499124817/VictorySlab5.png');
                    break;
                case '38':
                    reward('[38] You\'re a Wizard', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '39':
                    reward('[39] The Big Fin-Ish', `Cost - ${bulb} 20\nChomper Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/725496313868845126/Custom8.png');
                    break;
                case '40':
                    reward('[40] Confused Fuse', `Cost - ${bulb} 7\nCaptain Deadbeard Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/725496334706147438/Gesture3.png');
                    break;
                case '41':
                    reward('[41] Fast Food', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/725497144731238410/Puncher5.png');
                    break;
                case '42':
                    reward('[42] Future Crop', `Cost - ${bulb} 20\nPeashooter Costume (Main Prize)`, 'https://cdn.discordapp.com/attachments/722937222772293722/725497692230254612/Costume2.png');
                    break;
                case '43':
                    reward('[43] Highly Decorated Crop', 'Peashooter Costume (Grand Prize)', 'https://cdn.discordapp.com/attachments/722937222772293722/725497701994725436/Costume3.png');
                    break;
                default:
                    reward('Invalid Reward Entered', 'Type in pvz.prizemap list to view the reward numbers.');
                    break;
            }
        }
        else if (args[0] === 'list')
        {
            if (args[1] === '1')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 1/5)');
                PrizeMapList.setDescription(`[1] Shish Kabob - Emoji ${bulb} 3\n[2] Sky Celebration - 80s Action Hero Gesture ${bulb} 7\n[3] Kick Some Grass - Expression ${bulb} 3\n[4] Beetle Boxing - Punchers ${bulb} 3\n`
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
                PrizeMapList.setDescription('[1] Shish Kabob - Emoji\n[2] Sky Celebration - 80s Action Hero Gesture\n[3] Kick Some Grass - Expression\n[4] Beetle Boxing - Punchers\n'
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