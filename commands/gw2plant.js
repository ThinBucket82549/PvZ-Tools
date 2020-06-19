const Discord = require('discord.js');
const { version } = require('../config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomgw2plant } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random GW2 Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let pla = '<:plant:722081541265686530>';

module.exports = {
    name: 'gw2plant',
    description: 'Randomly selects a Garden Warfare 2 Plant character',
    execute(message, args) {
        let result = randomgw2plant();
        if (result.includes("Pea"))
        {
            RandomizerEmbed.setColor('#4da43b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("Chomp"))
        {
            RandomizerEmbed.setColor('#5d3b76');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("lower") || result === 'Metal Petal' || result === 'Sun Pharaoh')
        {
            RandomizerEmbed.setColor('#faa74a');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("Cactus"))
        {
            RandomizerEmbed.setColor('#929d41');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("Citron"))
        {
            RandomizerEmbed.setColor('#ff9455');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("Rose"))
        {
            RandomizerEmbed.setColor('#be2c1f');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        if (result.includes("Corn") || result === "Mob Cob")
        {
            RandomizerEmbed.setColor('#fdb559');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
        }
        message.channel.send(RandomizerEmbed);
    }
}
//<:plant:722081541265686530>