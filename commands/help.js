const Discord = require('discord.js');
const { version } = require('../config/config.json');

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('Help Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('[Randomizer Help] -  pvz.randomizer\n[Calculator Help] - pvz.calc\n[Information] - pvz.info\n[Check Garden Warfare 2\'s Mystery Portal] - pvz.gw2events\n[Check Battle for Neighborville\'s Weekly Event] - pvz.bfnevents\n[Check BFN character upgrades] pvz.bfnupgs <Character Name>\n[View Bot Changelogs] pvz.botchangelog')
    .addFields(
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'help',
    description: 'Shows help commands.',
    execute(message, args){
        message.channel.send(HelpEmbed);
    }
}