const Discord = require('discord.js');
const { version } = require('../config.json');
const { prizemap } = require('../config/timers.json');

const PrizeMapEmbed = new Discord.MessageEmbed()
    .setColor('#805304')
    .setTitle('Garden Party Prize Map')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Items', value: '42', inline: true},
        { name: 'Bulbs Needed', value: '198', inline: true},
        { name: 'Main Prize', value: 'Future Crop'},
        { name: 'Grand Prize', value: 'Highly Decorated Crop'}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'prizemap',
    description: 'Check Prize Map information.',
    execute(message, args){
        var mapEndsIn = new Date(`${prizemap}`).getTime();
        var now = new Date().getTime();
        var timeLeft = mapEndsIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        PrizeMapEmbed.setDescription('Time Remaining - ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeLeft < 0)
        {
            PrizeMapEmbed.setDescription('Prize Map ended. Please update the bot.')
        }

        message.channel.send(PrizeMapEmbed);
    }
}