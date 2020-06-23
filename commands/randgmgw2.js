const Discord = require('discord.js');
const { version } = require('../config.json');
const { gw2gamemode } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random GW2 Game Mode')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setColor('#4da43b')
    .setTimestamp();

module.exports = {
    name: 'gw2gamemode',
    description: 'get gw2 gamemode',
    execute(message, args) {
        let result = gw2gamemode();
        switch (result)
        {
            case "Welcome Mat":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Mixed Mode":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Turf Takeover":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Team Vanquish":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Gnome Bomb":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Suburbination":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Vanquish Confirmed":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            
        }
        message.channel.send(RandomizerEmbed);
    }
}