const Discord = require('discord.js');
const { version } = require('../config.json');

const ChangelogEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('v1.8.0 Changelogs')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('• Added pvz.trivia (10 PvZ 1 questions as of now).\n• Changed various embeds.\n• Added Brainium Basher 9001 to pvz.bfnupgs.\n• Added Brainium Basher 9001 to pvz.bfnzombie\n• Fixed thumbnails not displaying properly on pvz.bfnupgs.\n• Added Double Trouble to pvz.eventdata.')
    .addFields(
        { name: 'All Changelogs', value: 'https://github.com/zSupremoz/PvZ-Tools/wiki/Changelogs' }
    )
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726893744623845426/changes.png')
    .setTimestamp();

module.exports = {
    name: 'botchanges',
    description: 'Fetch bot changes',
    execute(message, args){
        message.channel.send(ChangelogEmbed);
    }
}