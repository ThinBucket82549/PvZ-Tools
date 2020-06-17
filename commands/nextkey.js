const Discord = require('discord.js');
const { version } = require('../config/config.json');

const KeyEmbed = new Discord.MessageEmbed()
    .setColor('#eaa854')
    .setTitle('Next Character Key')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

module.exports = {
    name: 'nextkey',
    description: 'Get the amount of time left until the next Character Key is available.',
    execute(message, args){
        var nextKeyIn = new Date("Jun 22, 2020 14:15:00").getTime();

        var now = new Date().getTime();

        var timeLeft = nextKeyIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        KeyEmbed.setDescription('Next Character Key in ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeLeft < 0) {
            KeyEmbed.setDescription("EXPIRED");
        }
        message.channel.send(KeyEmbed);
    }
}