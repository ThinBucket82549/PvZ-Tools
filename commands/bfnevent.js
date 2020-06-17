const Discord = require('discord.js');
const { version } = require('../config/config.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Boss Turf Takeover')
    .setAuthor('BFN Weekly Event', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Permitted Characters', value: 'All', inline: true},
        { name: 'Game Mode', value: 'Turf Takeover', inline: true},
        { name: 'Challenges', value: '1. Open a Boss Chest. <:rainbowstar:722757038442020896>10\n2. Vanquish a Boss. <:rainbowstar:722757038442020896>20\n3. Win 5 Matches. <:rainbowstar:722757038442020896>30', inline: true}
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'bfnevents',
    description: 'Shows the current BFN Weekly Event',
    execute(message, args){
        var nextEventIn = new Date("Jun 23, 2020 14:15:00").getTime();
        var now = new Date().getTime();
        var timeLeft = nextEventIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        EventEmbed.setDescription('8v8 Turf Takeover where teams not only battle over turf, but also compete for the Boss Chest to spawn an AI boss for their cause!\n\nEnd Time\n' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeLeft < 0)
        {
            EventEmbed.setDescription('8v8 Turf Takeover where teams not only battle over turf, but also compete for the Boss Chest to spawn an AI boss for their cause!\nEnd Time\n' + 'Weekly Event ended. Please update the bot.');
        }
        
        message.channel.send(EventEmbed);
    }
}