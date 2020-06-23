const Discord = require('discord.js');
const { version } = require('../config.json');
const { gw1gamemode } = require('../functions/randomizer.js');


const RandomizerEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Random GW1 Game Mode')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'gw1gamemode',
    description: 'random gw1 gamemode',
    execute(message, args) {
        let result = gw1gamemode();
        switch(result)
        {
            case "Welcome Mat":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Team Vanquish":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Gardens & Graveyards":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Gnome Bomb":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Mixed Mode":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Vanquish Confirmed":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Suburbination":
                RandomizerEmbed.setDescription(`${result}`);
                break;
            case "Taco Bandits":
                RandomizerEmbed.setDescription(`${result}`);
                break;
        }
        message.channel.send(RandomizerEmbed);
    }
}