const Discord = require('discord.js');
const { version } = require('../config/config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomBfnPlant } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random BFN Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

let pla = '<:plant:722081541265686530>';
let legend = '<:legendary_upg:722632525796737055>';

module.exports = {
    name: 'bfnplant',
    description: 'Randomly selects a BFN Plant character',
    execute(message, args) {
        let result = randomBfnPlant();
        if (result.includes('Pea'))
        {
            RandomizerEmbed.setColor('#4da43b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Chom'))
        {
            RandomizerEmbed.setColor('#5d3b76');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Kern'))
        {
            if (result.includes('Shogun'))
            {
                RandomizerEmbed.setColor('#fdb559');
                RandomizerEmbed.setDescription(`${pla} ${result} ${legend}`);
            }
            else
            {
                RandomizerEmbed.setColor('#fdb559');
                RandomizerEmbed.setDescription(`${pla} ${result}`);
            }
        }
        if (result.includes('Nigh'))
        {
            RandomizerEmbed.setColor('#c04359');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Sna'))
        {
            RandomizerEmbed.setColor('#ee6f21');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Cac'))
        {
            RandomizerEmbed.setColor('#929d41');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Cit'))
        {
            RandomizerEmbed.setColor('#ff9455');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Aco'))
        {
            RandomizerEmbed.setColor('#5c351b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Sun'))
        {
            RandomizerEmbed.setColor('#faa74a');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes('Rose'))
        {
            if (result.includes('Thorn'))
            {
                RandomizerEmbed.setColor('#be2c1f');
                RandomizerEmbed.setDescription(`${pla} ${result} ${legend}`);
            }
            else
            {
                RandomizerEmbed.setColor('#be2c1f');
                RandomizerEmbed.setDescription(`${pla} ${result}`);
            } 
        }
        message.channel.send(RandomizerEmbed);
    }
}