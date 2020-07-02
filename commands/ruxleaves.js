const Discord = require('discord.js');
const { version } = require('../config.json');
const { ruxgw2 } = require('../config/timers.json');

const RuxEmbed = new Discord.MessageEmbed()
    .setColor('#fa4cb2')
    .setTitle('Next Rux Rotation (GW2)')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726902269794320565/unknown.png')
    .setTimestamp();

module.exports = {
    name: 'ruxleaves',
    description: 'Gets the amount of time left until Rux leaves.',
    execute(message, args) {
        var ruxLeavesIn = new Date(`${ruxgw2}`).getTime();

        var now = new Date().getTime();

        var timeLeft = ruxLeavesIn - now;

        var weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor(timeLeft % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (weeks > 0)
            RuxEmbed.setDescription('Rux leaves in - ' + weeks + "w " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        else if (weeks === 0)
            RuxEmbed.setDescription('Rux leaves in - ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        else if (days === 0)
            RuxEmbed.setDescription('Rux leaves in - ' + hours + "h " + minutes + "m " + seconds + "s ");
        else if (hours === 0)
            RuxEmbed.setDescription('Rux leaves in - ' + minutes + "m " + seconds + "s ");
        else if (minutes === 0)
            RuxEmbed.setDescription('Rux leaves in - ' + seconds + "s ")
        if (timeLeft < 0) {
            RuxEmbed.setDescription("Rux has left.");
        }
        message.channel.send(RuxEmbed);
    }
}