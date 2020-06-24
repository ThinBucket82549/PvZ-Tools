const Discord = require('discord.js');
const { version } = require('../config.json');

const Stickerbook = new Discord.MessageEmbed()
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'stickerbook',
    description: 'get pvz shooter info',
    execute(message, args) {
        if (args[0] === 'bfn')
        {
            if (args[1] === 'Peashooter')
            {
                Stickerbook.setTitle('Peashooter (BFN)')
            }
        }
    }
}