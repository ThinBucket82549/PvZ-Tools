const Discord = require('discord.js');
const { version } = require('../config.json');

const InfoEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('About PvZ Tools')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('A Plants vs. Zombies bot created by zSupremoz. With it you can perform PvZ related tasks such as randomly selecting a character, calculating XP for Prize Bulbs (and vice versa), and check in game events.')
    .addFields(
        { name: 'Source', value: 'https://github.com/zSupremoz/PvZ-Tools' },
        { name: 'Full Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' },
        { name: 'Contributors', value: 'Silvercyclops - Providing various images.'},
        { name: 'Support Server Link', value: 'https://discord.gg/GDfFz99'}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'botinfo',
    description: 'Shows bot information.',
    execute(message, args){
        message.channel.send(InfoEmbed);
    }
}