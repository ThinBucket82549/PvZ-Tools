const Discord = require('discord.js');
const { version } = require('../config.json');
const { title, description, allowedchars, gamemode, challenge1, challenge2, challenge3, enddate } = require('../config/weeklyevent.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle(`${title}`)
    .setAuthor('BFN Weekly Event', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Game Mode', value: `${gamemode}`, inline: true},
        { name: 'Permitted Characters', value: `${allowedchars}`, inline: true},
        { name: 'Challenges', value: `1. ${challenge1} <:rainbowstar:722757038442020896>10\n2. ${challenge2} <:rainbowstar:722757038442020896>20\n3. ${challenge3} <:rainbowstar:722757038442020896>30`, inline: true}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'bfnevents',
    description: 'Shows the current BFN Weekly Event',
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
            EventEmbed.setDescription(`${description}\nEnd Time\n` + 'Weekly Event ended. Please update the bot.');
        }
        
        message.channel.send(EventEmbed);
    }
}