const Discord = require('discord.js');
const { version } = require('../config.json');

const InfoEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('About PvZ Tools')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('The ultimate PvZ Shooter related Discord Bot written in JavaScript by zSupremoz. Can be used to fulfil various tasks such as randomly selecting a character, calculating XP to Prze Bulbs (and vice versa), and getting in-game info.')
    .addFields(
        { name: 'Source', value: 'https://github.com/zSupremoz/PvZ-Tools' },
        { name: 'Full Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' },
        { name: 'Contributors', value: 'Silvercyclops - Providing various images.'}
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