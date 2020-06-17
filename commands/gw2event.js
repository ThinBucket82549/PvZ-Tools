const Discord = require('discord.js');
const { version } = require('../config/config.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('None')
    .setAuthor('Garden Warfare 2 Mystery Portal', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Please check back later.')
    .addFields(
        { name: 'Permitted Characters', value: 'N/A' },
        { name: 'Game Mode', value: 'N/A'},
        { name: 'End Time', value: 'N/A' }
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'gw2events',
    description: 'Get Garden Warfare 2 Mystery Portal event details.',
    execute(message, args){
        var nextEventIn = new Date("Jun 16, 2020 14:15:00").getTime();
        var now = new Date().getTime();
        var timeLeft = nextEventIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        EventEmbed.setDescription('Gw2 Mystery Portal Event Description\n\nEnd Time\n' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        if (timeLeft < 0)
        {
            EventEmbed.setDescription('There is currently no Mystery Portal event open.');
        }

        message.channel.send(EventEmbed);
    }
}