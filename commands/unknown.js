const Discord = require('discord.js');
const { version } = require('../config.json');

const UnknownCmd = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Unknown Command')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Unknown command entered. Please refer to pvz.help or the documentary.')
    .addFields(
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools#pvz-tools' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'unk',
    description: 'Unknown Command',
    execute(message, args) {
        message.channel.send(UnknownCmd);
    }
}