const Discord = require('discord.js');
const { version } = require('../config/config.json');

const EventEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Cool Explosions Only')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Cool dudes usually don\'t look at explosions, but with so many going off it\'s hard not to. Bombs, Beans, and Fireballs all go BOOM this week!')
    .addFields(
        { name: 'Permitted Characters', value: 'Peashooter, Kernel Corn, Snapdragon, Foot Soldier, Super Brainz, 80\'s Action Hero' },
        { name: 'Game Mode', value: 'Gnome Bomb'},
        { name: 'End Time', value: 'Teusday, June 16 (2:15 PM EST)' }
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'bfnevents',
    description: 'Shows the current BFN Weekly Event',
    execute(message, args){
        message.channel.send(EventEmbed);
    }
}