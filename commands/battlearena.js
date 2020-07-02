const Discord = require('discord.js');
const { version } = require('../config.json');
const { map, endtime } = require('../config/battlearena.json');

const BattleArena = new Discord.MessageEmbed()
    .setColor('#47a188')
    .setTitle('Battle Arena Rotation')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Current Rotation', value: `${map}`}
    )
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/724667925071527976/Battle_Arena.png')
    .setTimestamp();

module.exports = {
    name: 'battlearena',
    description: 'get battlearena rotations',
    execute(message, args) {
        var nextMap = new Date(`${endtime}`).getTime();
        var now = new Date().getTime();
        var timeLeft = nextMap - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        BattleArena.setDescription(`End Time\n<:bfntimer:726788472790188082>` + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeLeft < 0)
        {
            BattleArena.setDescription(`End Time\n` + 'Battle Arena map has changed.');
        }
        
        message.channel.send(BattleArena);
    }
}