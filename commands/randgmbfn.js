const Discord = require('discord.js');
const { version } = require('../config.json');
const { bfngamemode } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Random BFN Game Mode')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'bfngamemode',
    description: 'get bfn gamemode',
    execute(message, args) {
        let result = bfngamemode();
        switch (result)
        {
            case "Weekly Event":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726900865281163285/stars.png');
                break;
            case "Turf Takeover":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726899669334229186/turf.png');
                break;
            case "Team Vanquish":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726899686916620388/teamv.png');
                break;
            case "Battle Arena":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/724667925071527976/Battle_Arena.png');
                break;
            case "Garden & Graveyard Ops":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726899807687278632/ops.png');
                break;
            case "Mixed Modes":
                RandomizerEmbed.setDescription(`${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726899812775231559/mixed.png')
                break;
        }
        message.channel.send(RandomizerEmbed);
    }
}