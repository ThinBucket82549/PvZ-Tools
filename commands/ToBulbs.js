const Discord = require('discord.js');
const { version } = require('../config.json');
const Calc = require('../functions/conversions.js');

const ToBulbEmbed = new Discord.MessageEmbed()
    .setColor('#22b5d0')
    .setTitle('XP to Prize Bulb Conversion | <:xp:722080853869592648><:arrow:722971202544730113><:prizebulb:721918291400196126>')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726893941974368356/prizebulb.png')
    .setTimestamp();

module.exports = {
    name: 'tobulb',
    description: 'Converts XP to Prize Bulbs',
    execute(message, args){
        let xp = args[0];
        let result = Calc.ConvertToPrizeBulb(xp);
        ToBulbEmbed.setDescription(`Prize Bulbs - ${result} <:prizebulb:721918291400196126>`);
        message.channel.send(ToBulbEmbed);
    }
}