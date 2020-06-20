const Discord = require('discord.js');
const { version } = require('../config.json');

const todo = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('PvZ Tools To-Do List')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('A list of planned features/changes to PvZ Tools. If you have a suggestions you\'d love to make, please forward it to zSupremoz#9248 on Discord or submit them here https://github.com/zSupremoz/PvZ-Tools/issues.')
    .addFields(
        { name: 'Planned Changes', value: '• Add more thumbnails to command outputs.\n• Change embed colors on some commands\n• Add Garden Warfare 1 Randomizer Images\n• Add information about map rotations\n• Full loadout randomizer\n• Support for other PvZ Games\n• Implement BFN Stat Checker (if I get the BFN API)' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'todo',
    description: 'to do list',
    execute(message, args) {
        message.channel.send(todo);
    }
}