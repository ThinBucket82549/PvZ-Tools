const Discord = require('discord.js');
const { version } = require('../config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.7.1 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• See what a prize map reward looks like with pvz.prizemap rewards [reward number].')
    .addFields(
        { name: 'All Changelogs', value: 'https://github.com/zSupremoz/PvZ-Tools/wiki/Changelogs' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'botchanges',
    description: 'Fetch bot changes',
    execute(message, args){
        message.channel.send(ChangelogEmbed);
    }
}