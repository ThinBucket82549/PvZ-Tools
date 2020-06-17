const Discord = require('discord.js');
const { version } = require('../config/config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.3.0 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• Check when the next Character Key is available with pvz.nextkey\n• Check Prize Map information with pvz.prizemap\n• Check when Rux leaves in GW2 with pvz.ruxgw2\n• GW2 and BFN event commands now tells how long until the Mystery Portal/Weekly Event ends as opposed to just having an end date.')
    .addFields(
        { name: 'All Changelogs', value: 'https://github.com/zSupremoz/PvZ-Tools/wiki/Changelogs' }
    )
    .setFooter(`Version - ${version}`)

module.exports = {
    name: 'botchanges',
    description: 'Fetch bot changes',
    execute(message, args){
        message.channel.send(ChangelogEmbed);
    }
}