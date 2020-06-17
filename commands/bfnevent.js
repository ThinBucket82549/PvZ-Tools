const Discord = require('discord.js');
const { version } = require('../config/config.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Boss Turf Takeover')
    .setAuthor('BFN Weekly Event', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('8v8 Turf Takeover where teams not only battle over turf, but also compete for the Boss Chest to spawn an AI boss for their cause!')
    .addFields(
        { name: 'Permitted Characters', value: 'All' },
        { name: 'Game Mode', value: 'Turf Takeover'},
        { name: 'End Time', value: 'Teusday, June 23 (2:15 PM EST)' },
        { name: 'Challenges', value: '1. Open a Boss Chest. <:rainbowstar:722757038442020896>10\n2. Vanquish a Boss. <:rainbowstar:722757038442020896>20\n3. Win 5 Matches. <:rainbowstar:722757038442020896>30'}
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'bfnevents',
    description: 'Shows the current BFN Weekly Event',
    execute(message, args){
        message.channel.send(EventEmbed);
    }
}