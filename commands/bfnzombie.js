const Discord = require('discord.js');
const { version } = require('../config/config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomBfnZombie } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random BFN Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

let zom = '<:zombie:722081554851168266>';
let legend = '<:legendary_upg:722632525796737055>';

module.exports = {
    name: 'bfnzombie',
    description: 'Randomly selects a BFN Zombie character',
    execute(message, args) {
        let result = randomBfnZombie();
        if (result.includes('Foot'))
        {
            RandomizerEmbed.setColor('#ad9940');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result === 'Imp')
        {
            RandomizerEmbed.setColor('#e9683b');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Super'))
        {
            RandomizerEmbed.setColor('#70328c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('80'))
        {
            RandomizerEmbed.setColor('#172b4e');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Elec'))
        {
            RandomizerEmbed.setColor('#dc3b82');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('All'))
        {
            RandomizerEmbed.setColor('#d03123');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Capt'))
        {
            RandomizerEmbed.setColor('#4e566a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Spac'))
        {
            RandomizerEmbed.setColor('#a3867c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Scientist'))
        {
            if (result.includes('Steam'))
            {
                RandomizerEmbed.setColor('#9e1abf');
                RandomizerEmbed.setDescription(`${zom} ${result} ${legend}`);
            }
            else
            {
                RandomizerEmbed.setColor('#9e1abf');
                RandomizerEmbed.setDescription(`${zom} ${result}`);
            }
        }
        if (result.includes('Engi'))
        {
            RandomizerEmbed.setColor('#fdaa4a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Wiz'))
        {
            RandomizerEmbed.setColor('#3160b2');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        message.channel.send(RandomizerEmbed);
    }
}