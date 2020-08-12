const Discord = require('discord.js');
const { version } = require('../config.json');
const { name, itemcount, bulbsneeded, mainprize, grandprize, enddate } = require('../config/prizemap.json');

const PrizeMapEmbed = new Discord.MessageEmbed()
    .setColor('#3177bc')
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
    .setColor('#3177bc')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const MapReward = new Discord.MessageEmbed()
    .setColor('#3177bc')
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
                    reward('[1] Squashed Smores', `Cost - ${bulb} 5\nAcorn Hat`, `https://cdn.discordapp.com/attachments/722937222772293722/743063998366351481/Hat1.png`);
                    break;
                case '2':
                    reward('[2] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '3':
                    reward('[3] Let\'s Rock!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '4':
                    reward('[4] Mouse Boat', `Cost - ${bulb} 5\nVictory Slab`, `https://cdn.discordapp.com/attachments/722937222772293722/743064450147287100/VictorySlab1.png`);
                    break;
                case '5':
                    reward('[5] Ice Cream', `Cost - ${bulb} 3\nEmoji`, `https://cdn.discordapp.com/attachments/722937222772293722/743064586302783508/Emoji1.png`);
                    break;
                case '6':
                    reward('[6] Water Ski Oopsie', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/743064779534630972/Punchers1.png`);
                    break;
                case '7':
                    reward('[7] Head Lob', `Cost - ${bulb} 5\nSnapdragon Gesture`, 'https://cdn.discordapp.com/attachments/722937222772293722/743064854251962368/Gesture1.png');
                    break;
                case '8':
                    reward('[8] Bringing the Heat!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '9':
                    reward('[9] Arrowhead', `Cost - ${bulb} 7\nCactus Hat (Arch Support Set)`, `https://cdn.discordapp.com/attachments/722937222772293722/743065307748368404/Hat2.png`);
                    break;
                case '10':
                    reward('[10] Stay in Circles', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '11':
                    reward('[11] One-Eyed Tiger-Topper', `Cost - ${bulb} 5\n80s Action Hero Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/743065668106190898/Hat3.png');
                    break;
                case '12':
                    reward('[12] Zomboss Coin', `Cost - ${bulb} 3\nEmoji`, `https://cdn.discordapp.com/attachments/722937222772293722/743065812532723712/Emoji2.png`);
                    break;
                case '13':
                    reward('[13] Guard Target', `Cost - ${bulb} 7\nCactus Arms (Arch Support Set)`, `https://cdn.discordapp.com/attachments/722937222772293722/743066015721586728/Arms1.png`);
                    break;
                case '14':
                    reward('[14] Food Feud', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/743066091911381092/Punchers2.png');
                    break;
                case '15':
                    reward('[15] Dave Coin', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/743066255996747776/Emoji3.png');
                    break;
                case '16':
                    reward('[16] Silly Grilly', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/743066468974985296/VictorySlab2.png');
                    break;
                case '17':
                    reward('[17] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '18':
                    reward('[18] Ya Burnt!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '19':
                    reward('[19] Marco...', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '20':
                    reward('[20] Polo!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '21':
                    reward('[21] Side to Side', `Cost - ${bulb} 5\nImp Gesture`, `https://cdn.discordapp.com/attachments/722937222772293722/743067158526820372/Gesture2.png`);
                    break;
                case '22':
                    reward('[22] Shelly', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/743067226956890223/Emoji4.png');
                    break;
                case '23':
                    reward('[23] Space Bolts', `Cost - ${bulb} 7\nEngineer Hat`, 'https://cdn.discordapp.com/attachments/722937222772293722/743067514132496444/Hat4.png');
                    break;
                case '24':
                    reward('[24] Shell We Dance', `Cost - ${bulb} 3\nPunchers`, `https://cdn.discordapp.com/attachments/722937222772293722/743067674065764352/Punchers3.png`);
                    break;
                case '25':
                    reward('[25] Kite Might', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/743067845960794112/Punchers4.png');
                    break;
                case '26':
                    reward('[26] Timber!', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '27':
                    reward('[27] Complete Kite Off', `Cost - ${bulb} 5\nVictory Slab`, `https://cdn.discordapp.com/attachments/722937222772293722/743068296215265360/VictorySlab3.png`);
                    break;
                case '28':
                    reward('[28] Idolize', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/743068450502737960/Emoji5.png');
                    break;
                case '29':
                    reward('[29] Shell Being', `Cost - ${bulb} 3\nEmoji`, `https://cdn.discordapp.com/attachments/722937222772293722/743068536586502204/Emoji6.png`);
                    break;
                case '30':
                    reward('[30] Surf Takeover', `Cost - ${bulb} 5\nVictory Slab`, `https://cdn.discordapp.com/attachments/722937222772293722/743068709924372550/VictorySlab4.png`);
                    break;
                case '31':
                    reward('[31] Quilly Quiver', `Cost - ${bulb} 5\nCactus Neck Prop (Arch Support Set)`, `https://cdn.discordapp.com/attachments/722937222772293722/743068900685643797/Neck1.png`);
                    break;
                case '32':
                    reward('[32] Luminous Fungus', `Cost - ${bulb} 10\nNight Cap Costume`, `https://cdn.discordapp.com/attachments/722937222772293722/743069270635839508/Costume1.png`);
                    break;
                case '33':
                    reward('[33] That Happened', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '34':
                    reward('[34] Go Fish', `Cost - ${bulb} 3\nPunchers`, 'https://cdn.discordapp.com/attachments/722937222772293722/743069516124258334/Punchers5.png');
                    break;
                case '35':
                    reward('[35] Heals Over There', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '36':
                    reward('[36] Boom Town', `Cost - ${bulb} 5\nPeashooter Gesture`, `https://cdn.discordapp.com/attachments/722937222772293722/743070015657607269/Gesture3.png`);
                    break;
                case '37':
                    reward('[37] Cone Buddies', `Cost - ${bulb} 3\nEmoji`, 'https://cdn.discordapp.com/attachments/722937222772293722/743070172293627964/Emoji7.png');
                    break;
                case '38':
                    reward('[38] Big Mood', `Cost - ${bulb} 3\nExpression`, `${expression}`);
                    break;
                case '39':
                    reward('[39] Clownfish Car', `Cost - ${bulb} 5\nVictory Slab`, 'https://cdn.discordapp.com/attachments/722937222772293722/743070378888396891/VictorySlab5.png');
                    break;
                case '40':
                    reward('[40] Rainbow Stars (50)', `Cost - ${bulb} 0`, `${starimg}`);
                    break;
                case '41':
                    reward('[41] Chomp-Knight', `Cost - ${bulb} 20\nChomper Costume`, 'https://cdn.discordapp.com/attachments/722937222772293722/743071074144747570/Costume2.png');
                    break;
                case '42':
                    reward('[42] Fortress Nut', `Cost - ${bulb} 20\nAcorn Costume (Main Prize)`, 'https://cdn.discordapp.com/attachments/722937222772293722/743071387198947399/Costume3.png');
                    break;
                case '43':
                    reward('[43] Gilded Oak', `Acorn Costume (Grand Prize)`, 'https://cdn.discordapp.com/attachments/722937222772293722/727971012708270090/Costume2.png');
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
                PrizeMapList.setDescription(`[1] Squashed Smores - Acorn Hat ${bulb} 5\n[2] ${star} 50 ${bulb} 0\n[3] Let\'s Rock! - Expression ${bulb} 3\n[4] Mouse Boat - Victory Slab ${bulb} 5\n`
                + `[5] Ice Cream - Emoji ${bulb} 3\n[6] Water Ski Oopsie - Punchers ${bulb} 3\n[7] Head Lob - Snapdragon Gesture ${bulb} 5\n[8] Bringing the Heat! - Expression ${bulb} 3\n[9] Arrowhead - Cactus Hat (Arch Support Set) ${bulb} 7`
                + '\n\nType in "pvz.prizemap list 2" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '2')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 2/5)');
                PrizeMapList.setDescription(`[10] Stay in Circle - Expression ${bulb} 3\n[11] One-Eyed Tiger-Topper - 80s Action Hero Hat ${bulb} 5\n[12] Zomboss Coin - Emoji ${bulb} 3\n[13] Guard Target - Cactus Arms (Arch Support Set) ${bulb} 7\n`
                + `[14] Food Feud - Punchers ${bulb} 3\n[15] Dave Coin - Emoji ${bulb} 3\n[16] Silly Grilly - Victory Slab ${bulb} 5\n[17] ${star} 50 ${bulb} 0\n[18] Ya Burnt! - Expression ${bulb} 3\n[19] Marco... - Expression ${bulb} 3`
                + '\n\nType in "pvz.prizemap list 3" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '3')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 3/5)');
                PrizeMapList.setDescription(`[20] Polo! - Expression ${bulb} 3\n[21] Side to Side - Imp Gesture ${bulb} 5\n[22] Shelly - Emoji ${bulb} 3\n[23] Space Bolts - Engineer Hat ${bulb} 7\n[24] Shell We Dance - Punchers ${bulb} 3\n`
                + `[25] Kite Might - Punchers ${bulb} 3\n[26] Timber! - Expression ${bulb} 3\n[27] Complete Kite Off - Victory Slab ${bulb} 5\n[28] Idolize - Emoji ${bulb} 3\n[29] Shell Being - Emoji ${bulb} 3`
                + '\n\nType in "pvz.prizemap list 4" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '4')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 4/5)');
                PrizeMapList.setDescription(`[30] Surf Takeover - Victory Slab ${bulb} 5\n[31] Quilly Quiver - Cactus Neck Prop (Arch Support Set) ${bulb} 7\n[32] Luminous Fungus - Night Cap Costume ${bulb} 10\n[33] That Happened - Expression ${bulb} 3\n[34] Go Fish - Punchers ${bulb} 3\n`
                + `[35] Heals Over There - Expression ${bulb} 3\n[36] Boom Town - Peashooter Gesture ${bulb} 3\n[37] Cone Buddies - Emoji ${bulb} 3\n[38] Big Mood - Expression ${bulb} 3\n[39] Clownfish Car - Victory Slab ${bulb} 5`
                + '\n\nType in "pvz.prizemap list 5" to view the next page.');
                message.channel.send(PrizeMapList);
            }
            else if (args[1] === '5')
            {
                PrizeMapList.setTitle('Prize Map Rewards (Page 5/5)');
                PrizeMapList.setDescription(`[40] ${star} 50 ${bulb} 0\n[41] Chomp-Knight - Chomper Costume ${bulb} 20\n[42] Fortress Nut - Acorn Costume (Main Prize) ${bulb} 20\n[43] Gilded Oak - Acorn Costume (Grand Prize)`);
                message.channel.send(PrizeMapList);
            }
            else {
                PrizeMapList.setTitle('Prize Map Rewards (Page 1/5)');
                PrizeMapList.setDescription(`[1] Squashed Smores - Acorn Hat ${bulb} 5\n[2] ${star} 50 ${bulb} 0\n[3] Let\'s Rock! - Expression ${bulb} 3\n[4] Mouse Boat - Victory Slab ${bulb} 5\n`
                + `[5] Ice Cream - Emoji ${bulb} 3\n[6] Water Ski Oopsie - Punchers ${bulb} 3\n[7] Head Lob - Snapdragon Gesture ${bulb} 5\n[8] Bringing the Heat! - Expression ${bulb} 3\n[9] Arrowhead - Cactus Hat (Arch Support Set) ${bulb} 7`
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