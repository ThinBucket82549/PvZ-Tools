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
        message.channel.send(EventEmbed);
    }
}