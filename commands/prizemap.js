const Discord = require('discord.js');
const { version } = require('../config.json');
const { name, itemcount, bulbsneeded, mainprize, grandprize, enddate } = require('../config/prizemap.json');

const PrizeMapEmbed = new Discord.MessageEmbed()
    .setColor('#805304')
    .setTitle(`${name} Prize Map`)
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Items', value: `${itemcount}`, inline: true},
        { name: 'Bulbs Needed', value: `${bulbsneeded}`, inline: true},
        { name: 'Main Prize', value: `${mainprize}`},
        { name: 'Grand Prize', value: `${grandprize}`}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'prizemap',
    description: 'Check Prize Map information.',
    execute(message, args){
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