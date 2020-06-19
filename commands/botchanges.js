const Discord = require('discord.js');
const { version } = require('../config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.4.0 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• pvz.nextkey now tells how many keys have already been distributed.\n• All commands now have a timestamp in the footer\n• Added pvz.eventdata\n• Added an embed for unknown commands.\n• Changed commands pvz.bfnevents and pvz.gw2events to pvz.weeklyevent and pvz.mysteryportal.\n• Added images for BFN Randomizer commands.\n• Changed the Mystery Portal Embed\n• Added Contributors field and link to the support server in pvz.info')
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