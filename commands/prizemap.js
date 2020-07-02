const Discord = require('discord.js');
const { version } = require('../config.json');
const { name, itemcount, bulbsneeded, mainprize, grandprize, enddate } = require('../config/prizemap.json');

const PrizeMapEmbed = new Discord.MessageEmbed()
    .setColor('#6b0d18')
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
    .setColor('#6b0d18')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const MapReward = new Discord.MessageEmbed()
    .setColor('#6b0d18')
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
                    reward('[1] Good Game', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '2':
                    reward('[2] Pillow Fort Thwart', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/727964616214183956/VictorySlab1.png');
                    break;
                case '3':
                    reward('[3] Lifeguard Stan', `Cost - ${bulb} 7\nExpression`, `https://cdn.discordapp.com/attachments/722937222772293722/727964556642484335/Custom1.png`);
                    break;
                case '4':
                    reward('[4] Getting Late', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/727964710338691175/Emoji1.png`);
                    break;
                case '5':
                    reward('[5] Pillow Fight', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/727964935006584912/Puncher1.png`);
                    break;
                case '6':
                    reward('[6] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '7':
                    reward('[7] Gorilla Krunch Arcade', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/727965206491168868/VictorySlab2.png');
                    break;
                case '8':
                    reward('[8] Ooo, Shiny!', `Cost - ${bulb} 7\nSpace Cadet Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/727965417213001861/Gesture1.png');
                    break;
                case '9':
                    reward('[9] That Was Fun', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '10':
                    reward('[10] Bear A Resemblance', `Cost - ${bulb} 7\nImp Hat (Teddy Bear Picnic Set)`, `https://cdn.discordapp.com/attachments/722937222772293722/727965797774917662/Custom2.png`);
                    break;
                case '11':
                    reward('[11] String Together', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/727965874061049978/Puncher2.png');
                    break;
                case '12':
                    reward('[12] Explody Sky Spell', `Cost - ${bulb} 7\nWizard Gesture`, `https://cdn.discordapp.com/attachments/722937222772293722/727966358268280862/Gesture2.png`);
                    break;
                case '13':
                    reward('[13] Hot Dog!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '14':
                    reward('[14] Froggy Headed', `Cost - ${bulb} 7\nSnapdragon Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/727966596475256932/Custom3.png');
                    break;
                case '15':
                    reward('[15] Warm Woolen Kittens', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/727966684870213632/VictorySlab3.png');
                    break;
                case '16':
                    reward('[16] String Out', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/727966821348671528/Emoji2.png');
                    break;
                case '17':
                    reward('[17] Spectacular Spectacles', `Cost - ${bulb} 7\nImp Accessory (Teddy Bear Picnic Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/727967000734728242/Custom4.png');
                    break;
                case '18':
                    reward('[18] You Go, I\'ll Stay', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '19':
                    reward('[19] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '20':
                    reward('[20] I Go, You Stay', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '21':
                    reward('[21] Watch Out', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '22':
                    reward('[22] Solar Eclipse', `Cost - ${bulb} 10\nSunflower Costume`, 'https://cdn.discordapp.com/attachments/722937222772293722/727967640429264977/Costume1.png');
                    break;
                case '23':
                    reward('[23] Mime Generator', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/727967900861988995/Emoji3.png');
                    break;
                case '24':
                    reward('[24] Fort Knocks', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/727968047272558682/Puncher3.png`);
                    break;
                case '25':
                    reward('[25] Nuzzle Muzzle', `Cost - ${bulb} 7\nImp Mouth (Teddy Bear Picnic Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/727968107552833576/Custom5.png');
                    break;
                case '26':
                    reward('[26] Outsmart Food Cart', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/727968590984118383/VictorySlab4.png');
                    break;
                case '27':
                    reward('[27] Summer Vibes', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '28':
                    reward('[28] Protect Me', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/727968785335582770/Emoji4.png');
                    break;
                case '29':
                    reward('[29] Flower Styled', `Cost - ${bulb} 5\nExpression`, `https://cdn.discordapp.com/attachments/722937222772293722/727968924783738970/Custom6.png`);
                    break;
                case '30':
                    reward('[30] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '31':
                    reward('[31] Ooo, Shiny!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '32':
                    reward('[32] Noodle Fangled', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/727969271761731684/Puncher4.png`);
                    break;
                case '33':
                    reward('[33] Ready Set Go', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/727969403911536661/Emoji5.png');
                    break;
                case '34':
                    reward('[34] The Bear Necessities', `Cost - ${bulb} 7\nImp Shoulders (Teddy Bear Picnic Set)`, 'https://cdn.discordapp.com/attachments/722937222772293722/727969481665675345/Custom7.png');
                    break;
                case '35':
                    reward('[35] Need Defense', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/727969859740106772/Emoji6.png');
                    break;
                case '36':
                    reward('[36] YEET!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '37':
                    reward('[37] Fortress Of Attitude', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/727969965155549235/VictorySlab5.png');
                    break;
                case '38':
                    reward('[38] Punch Your Ticket', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/727970174996840448/Puncher5.png`);
                    break;
                case '39':
                    reward('[39] Secret Shell Company', `Cost - ${bulb} 20\nSoldier Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/727970309365563392/Custom8.png');
                    break;
                case '40':
                    reward('[40] My Hero!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '41':
                    reward('[41] Make a Wish', `Cost - ${bulb} 7\nRose Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/727970738979602462/Gesture3.png');
                    break;
                case '42':
                    reward('[42] Brainium Basher 9001', `Cost - ${bulb} 20\nSuper Brainz Legendary Upgrade`, 'https://cdn.discordapp.com/attachments/722937222772293722/727970946375221359/LegendaryUpg1.png');
                    break;
                case '43':
                    reward('[43] Metal Head', `Cost - ${bulb} 0\nSuper Brainz Costume (Main Prize)`, 'https://cdn.discordapp.com/attachments/722937222772293722/727971012708270090/Costume2.png');
                    break;
                case '44':
                    reward('[44] Midas Tough', 'Super Brainz Costume (Grand Prize)', 'https://cdn.discordapp.com/attachments/722937222772293722/727971272625225817/Costume3.png');
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
                PrizeMapList.setDescription(`[1] Good Game - Expression ${bulb} 3\n[2] Pillow Fort Thwart - Victory Slab ${bulb} 5\n[3] Lifeguard Stan ${bulb} 7\n[4] Getting Late - Emoji ${bulb} 3\n`
                + `[5] Pillow Fight - Punchers ${bulb} 3\n[6] ${star} 50 ${bulb} 0\n[7] Gorilla Krunch Arcade - Victory Slab ${bulb} 5\n[8] Ooo, Shiny! - Space Cadet Gesture ${bulb} 7\n[9] That Was Fun - Expression ${bulb} 3`
                + '\n\nType in "pvz.prizemap list 2" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '2')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 2/5)');
                PrizeMapList.setDescription(`[10] Bear A Resemblance - Imp Hat (Teddy Bear Picnic Set) ${bulb} 7\n[11] String Together - Punchers ${bulb} 3\n[12] Explody Sky Spell ${bulb} 7\n[13] Hot Dog! - Expression ${bulb} 3\n`
                + `[14] Froggy Headed ${bulb} 7\n[15] Warm Woolen Kittens - Victory Slab ${bulb} 5\n[16] String Out - Emoji ${bulb} 3\n[17] Spectacular Spectacles - Imp Accessory (Teddy Bear Picnic Set) ${bulb} 7\n[18] You Go, I'll Stay - Expression ${bulb} 3\n[19] ${star} 50 ${bulb} 0`
                + '\n\nType in "pvz.prizemap list 3" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '3')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 3/5)');
                PrizeMapList.setDescription(`[20] I Go, You Stay - Expression ${bulb} 3\n[21] Watch Out! - Expression ${bulb} 3\n[22] Solar Eclipse - Sunflower Costume ${bulb} 10\n[23] Mime Generator - Emoji ${bulb} 3\n[24] Fort Knocks - Punchers ${bulb} 3\n`
                + `[25] Nuzzle Muzzle - Imp Mouth (Teddy Bear Picnic Set) ${bulb} 7\n[26] Outsmart Food Cart - Victory Slab${bulb} 5\n[27] Summer Vibes - Expression ${bulb} 3\n[28] Protect Me - Emoji ${bulb} 3\n[29] Flower Styled - Cactus Hat ${bulb} 5`
                + '\n\nType in "pvz.prizemap list 4" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '4')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 4/5)');
                PrizeMapList.setDescription(`[30] ${star} 50 ${bulb} 0\n[31] Ooo, Shiny! - Expression ${bulb} 3\n[32] Noodle Fangled - Punchers ${bulb} 3\n[33] Ready Set Go - Emoji ${bulb} 5\n[34] The Bear Necessities - Imp Shoulders (Teddy Bear Picnic Set) ${bulb} 7\n`
                + `[35] Need Defense - Emoji ${bulb} 3\n[36] YEET! - Expression ${bulb} 3\n[37] Fortress of Attitude - Victory Slab ${bulb} 5\n[38] Punch Your Ticket - Punchers ${bulb} 3\n[39] Secret Shell Company - Soldier Hat ${bulb} 20`
                + '\n\nType in "pvz.prizemap list 5" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '5')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 5/5)');
                PrizeMapList.setDescription(`[40] My Hero! - Expression ${bulb} 3\n[41] Make a Wish - Rose Gesture ${bulb} 7\n[42] Brainium Basher 9001 - Super Brainz Legendary Upgrade ${bulb} 20\n[43] Metal Head - Super Brainz Costume (Main Prize) ${bulb} 0`
                + `[44] Midas Tough - Super Brainz Costume (Grand Prize)`);
                message.channel.send(PrizeMapList);
            }
            else {
                PrizeMapList.setTitle('Prize Map Rewards (Page 1/5)');
                PrizeMapList.setDescription(`[1] Good Game - Expression ${bulb} 3\n[2] Pillow Fort Thwart - Victory Slab ${bulb} 5\n[3] Lifeguard Stan ${bulb} 7\n[4] Getting Late - Emoji ${bulb} 3\n`
                + `[5] Pillow Fight - Punchers ${bulb} 3\n[6] ${star} 50 ${bulb} 0\n[7] Gorilla Krunch Arcade - Victory Slab ${bulb} 5\n[8] Ooo, Shiny! - Space Cadet Gesture ${bulb} 7\n[9] That Was Fun - Expression ${bulb} 3`
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
            PrizeMapEmbed.setDescription('The Prize Map has ended.') 
        }

        message.channel.send(PrizeMapEmbed);
        }
        
    }
}