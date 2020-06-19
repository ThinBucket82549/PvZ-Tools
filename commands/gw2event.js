const Discord = require('discord.js');
const { version } = require('../config.json');
const { title, description, gamemode, enddate } = require('../config/mysteryportal.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle(`${title}`)
    .setAuthor('Garden Warfare 2 Mystery Portal', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Game Mode', value: `${gamemode}`},
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'gw2events',
    description: 'Get Garden Warfare 2 Mystery Portal event details.',
    execute(message, args){
        var nextEventIn = new Date(`${enddate}`).getTime();
        var now = new Date().getTime();
        var timeLeft = nextEventIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        EventEmbed.setDescription(`${description}\n\nEnd Time\n` + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        if (timeLeft < 0)
        {
            EventEmbed.setDescription('There is currently no Mystery Portal event open.');
        }

        message.channel.send(EventEmbed);
    }
}