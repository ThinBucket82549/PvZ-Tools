const Discord = require('discord.js');
const { version } = require('../config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.4.1 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• pvz.ruxgw2 has been changed to pvz.rux\n• Updated timers for pvz.prizemap and pvz.rux\n• Added pvz.challenges to view the current BFN Character Challenges.')
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