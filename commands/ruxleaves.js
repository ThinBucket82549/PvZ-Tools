const Discord = require('discord.js');
const { version } = require('../config/config.json');

const RuxEmbed = new Discord.MessageEmbed()
    .setColor('#fa4cb2')
    .setTitle('Next Rux Rotation (GW2)')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

module.exports = {
    name: 'ruxleaves',
    description: 'Gets the amount of time left until Rux leaves.',
    execute(message, args) {
        var ruxLeavesIn = new Date("Jun 22, 2020 7:00:00").getTime();

        var now = new Date().getTime();

        var timeLeft = ruxLeavesIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        RuxEmbed.setDescription('Rux leaves in - ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeLeft < 0) {
            RuxEmbed.setDescription("Rux has left.");
        }
        message.channel.send(RuxEmbed);
    }
}