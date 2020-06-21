const Discord = require('discord.js');
const { version } = require('../config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.6.0 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• pvz.bfnupgs can now show information on a specific upgrade.\n• pvz.bfnupgs error message has been changed.')
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