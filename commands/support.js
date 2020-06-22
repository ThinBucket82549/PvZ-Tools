const Discord = require('discord.js');
const { version } = require('../config.json');
const client = new Discord.Client();

const Support = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('PvZ Tools Support')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Hello, if you would like to report an issue, make a suggestion, or recieve assistance, please join the support server or create an issue on the GitHub page.')
    .addFields(
        {name: 'Support Server', value: 'https://discord.gg/GDfFz99'},
        {name: 'GitHub Issues Page', value: 'https://github.com/zSupremoz/PvZ-Tools/issues'}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'support',
    description: 'recieve support',
    execute (message, args) {
        message.author.send(Support);
    }
}