const Discord = require('discord.js');
const { version } = require('../config.json');
const { name } = require('../config/prizemap.json');
const { ch1name, ch1chal1, ch1chal2, ch1chal3, ch1chal4, ch1chal5, ch2name, ch2chal1, ch2chal2, ch2chal3, ch2chal4, ch2chal5, ch3name, ch3chal1, ch3chal2, ch3chal3, ch3chal4, ch3chal5, ch4name, ch4chal1, ch4chal2, ch4chal3, ch4chal4, ch4chal5 } = require('../config/charchallenges.json');

const CharChallenge = new Discord.MessageEmbed()
    .setColor('#e5964f')
    .setTitle(`${name} Character Challenges`)
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: `${ch1name}`, value: `${ch1chal1}\n${ch1chal2}\n${ch1chal3}\n${ch1chal4}\n${ch1chal5}`, inline: true },
        { name: `${ch2name}`, value: `${ch2chal1}\n${ch2chal2}\n${ch2chal3}\n${ch2chal4}\n${ch2chal5}`, inline: true },
        { name: `${ch3name}`, value: `${ch3chal1}\n${ch3chal2}\n${ch3chal3}\n${ch3chal4}\n${ch3chal5}`, inline: true },
        { name: `${ch4name}`, value: `${ch4chal1}\n${ch4chal2}\n${ch4chal3}\n${ch4chal4}\n${ch4chal5}`, inline: true }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'charchallenges',
    description: 'Get Character Challenge Info',
    execute(message, args) {
        message.channel.send(CharChallenge);
    }
}