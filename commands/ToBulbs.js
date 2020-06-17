const Discord = require('discord.js');
const { version } = require('../config/config.json');
const Calc = require('../functions/conversions.js');

const ToBulbEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('XP to Prize Bulb Conversion')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

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