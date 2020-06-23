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
                break;
            case "Turf Takeover":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Team Vanquish":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Battle Arena":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Garden & Graveyard Ops":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Mixed Modes":
                RandomizerEmbed.setDescription(`${result}`);
                break;
        }
        message.channel.send(RandomizerEmbed);
    }
}